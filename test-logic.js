// Test tự động cho phần logic thuần (không đụng DOM) của app.js: pickFood,
// parseOpeningHours, displayFoodName. Chạy bằng: node test-logic.js
//
// app.js là 1 file script trình duyệt thuần (không phải module, không có
// package.json/build step — đúng tinh thần "zero dependency" của dự án) nên
// không thể `require()` thẳng — nó sẽ crash ngay ở dòng `document.getElementById`.
// Thay vào đó, file test này tự trích các hàm/const CẦN THIẾT ra khỏi app.js thật
// (không copy logic ra một bản riêng — nếu copy riêng thì sửa app.js xong quên sửa
// test, test vẫn xanh dù code đã sai) bằng cách quét cân bằng ngoặc, rồi chạy trong
// 1 sandbox có localStorage/document giả tối thiểu.

const fs = require("fs");
const vm = require("vm");
const assert = require("assert");
const { test } = require("node:test");

const SRC = fs.readFileSync(__dirname + "/app.js", "utf8");

// Trích 1 khai báo (function foo(...) {...} hoặc const foo = {...}/[...]/giá trị đơn)
// bắt đầu từ vị trí tìm thấy `marker`, bằng cách đếm cân bằng { } [ ] ( ), bỏ qua nội
// dung bên trong chuỗi "..."/'...'/`...` (coi cả cụm template literal là chuỗi mờ vì
// mọi ${...} trong app.js chỉ chứa tên biến đơn giản, không có dấu ngoặc lồng bên trong).
function scanBalanced(start, openIdx) {
  let i = openIdx;
  let depth = 0;
  let inString = null; // '"' | "'" | '`' | null
  for (; i < SRC.length; i++) {
    const c = SRC[i];
    const prev = SRC[i - 1];
    if (inString) {
      if (c === inString && prev !== "\\") inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      continue;
    }
    if (c === "{" || c === "[" || c === "(") {
      depth++;
    } else if (c === "}" || c === "]" || c === ")") {
      depth--;
      if (depth === 0) {
        i++;
        if (SRC[i] === ";") i++;
        break;
      }
    }
  }
  return SRC.slice(start, i);
}

function extract(marker) {
  const start = SRC.indexOf(marker);
  if (start === -1) throw new Error(`Không tìm thấy marker: ${marker}`);
  const lastChar = marker[marker.length - 1];

  if (lastChar === "[" || lastChar === "{") {
    // const foo = {  /  const foo = [   -> đếm ngoặc bắt đầu từ chính ký tự cuối marker
    return scanBalanced(start, start + marker.length - 1);
  }
  if (/^(async\s+)?function\b/.test(marker.trim())) {
    // function foo(...) {...} / async function foo(...) {...} -> bỏ qua danh sách
    // tham số, tìm dấu { đầu tiên rồi mới đếm (giữ nguyên "async" nếu marker có).
    let i = start;
    while (SRC[i] !== "{") i++;
    return scanBalanced(start, i);
  }
  // const đơn giản không có ngoặc (vd const LANG_KEY = "..."; ) -> quét tới dấu ; top-level
  let i = start + marker.length;
  let inString = null;
  for (; i < SRC.length; i++) {
    const c = SRC[i];
    const prev = SRC[i - 1];
    if (inString) {
      if (c === inString && prev !== "\\") inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      continue;
    }
    if (c === ";") {
      i++;
      break;
    }
  }
  return SRC.slice(start, i);
}

function buildSandbox() {
  const store = {};
  const localStorage = {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
    setItem: (k, v) => {
      store[k] = String(v);
    }
  };
  const sandbox = { localStorage, console, AbortController, setTimeout, clearTimeout, fetch: undefined };
  vm.createContext(sandbox);

  // vm context: khai báo bằng `const`/`let` ở top-level KHÔNG gắn thành property của
  // sandbox (đúng theo spec ES6 — chỉ `var`/`function` mới gắn) nên phải đổi các
  // `const` top-level trích ra thành `var` để lấy lại được qua sb.FOODS, sb.state...
  const asVar = (s) => s.replace(/^const /, "var ");

  const code = [
    asVar(extract("const FOODS = [")),
    asVar(extract("const FOOD_NO_ANNOTATE")),
    extract("function displayFoodName("),
    extract("function displayFoodNameByCanonical("),
    asVar(extract("const CATEGORY_LABELS = {")),
    asVar(extract("const MEAL_LABELS = {")),
    "var MEAL_ICONS = {};", // pickFood không cần icon, tránh phải trích thêm dòng không liên quan
    asVar(extract("const BUDGET_BUCKETS = {")),
    extract("function matchesBudget("),
    extract("function formatVND("),
    extract("function formatPriceRange("),
    asVar(extract("const PRICE_LABELS = {")),
    asVar(extract("const RADIUS_LABELS = {")),
    asVar(extract("const LANG_KEY =")),
    asVar(extract("const STRINGS = {")),
    asVar(extract("const STRINGS_FN = {")),
    asVar(extract("const PLACES_CACHE_KEY =")),
    asVar(extract("const PLACES_CACHE_TTL_MS =")),
    asVar(extract("const IMG_CACHE_KEY =")),
    asVar(extract("const IMG_CACHE_TTL_MS =")),
    asVar(extract("const FAVORITES_KEY =")),
    asVar(extract("const BLACKLIST_KEY =")),
    asVar(extract("const HISTORY_KEY =")),
    asVar(extract("const SESSION_KEY =")),
    "var state = { lat:null, lon:null, locationLabel:null, radius:1000, meal:'auto', price:'any', categories:new Set(), spicyOnly:false, recentShown:[], currentFood:null, confirmed:false, province:null, district:null, hasFallback:false, matchedPlaces:[], otherPlaces:[], fallbackShown:false, lang:'vi' };",
    extract("function t(key)"),
    extract("function tf(key,"),
    extract("function loadJSON("),
    extract("function saveJSON("),
    extract("function getEffectiveMealTime("),
    extract("function pickFood("),
    extract("function weightedPick("),
    extract("function currentFoodMatchesFilters("),
    asVar(extract("const CATEGORY_CUISINE_TAGS = {")),
    extract("function matchesCuisineTag("),
    extract("function readPlacesCache("),
    extract("function writePlacesCache("),
    asVar(extract("const OVERPASS_HOSTS = [")),
    asVar(extract("const OVERPASS_TIMEOUT_MS =")),
    extract("async function fetchOverpassRaw("),
    asVar(extract("const DAY_MAP =")),
    extract("function parseOpeningHours(")
  ].join("\n\n");

  vm.runInContext(code, sandbox);
  return sandbox;
}

test("matchesBudget: khớp theo kiểu chồng khoảng (overlap), không cần khớp tuyệt đối bucket", () => {
  const sb = buildSandbox();
  const dish = { minPrice: 35000, maxPrice: 45000 }; // chồng lấn cả le40 lẫn b40_70
  assert.strictEqual(sb.matchesBudget(dish, "any"), true);
  assert.strictEqual(sb.matchesBudget(dish, "le40"), true);
  assert.strictEqual(sb.matchesBudget(dish, "b40_70"), true);
  assert.strictEqual(sb.matchesBudget(dish, "b70_100"), false);
  assert.strictEqual(sb.matchesBudget(dish, "gt100"), false);
});

test("formatPriceRange: hiện đúng 1 giá khi min=max, hiện khoảng khi khác nhau", () => {
  const sb = buildSandbox();
  assert.strictEqual(sb.formatPriceRange({ minPrice: 45000, maxPrice: 45000 }), "45.000đ");
  assert.strictEqual(sb.formatPriceRange({ minPrice: 40000, maxPrice: 70000 }), "40.000 – 70.000đ");
});

test("pickFood: tôn trọng Loại món đã chọn ngay cả khi tổ hợp với Ngân sách hiện KHÔNG có món nào khớp (audit động — bug gốc: chọn Nướng/BBQ+Trên 100k từng ra Lẩu mắm)", () => {
  const sb = buildSandbox();
  // Tự tìm 1 tổ hợp category+bucket hiện đang bất khả thi thay vì hard-code "nuong"+
  // "gt100" — data giá đã đổi (thêm BBQ Mỹ, Dê nướng...) nên tổ hợp cũ có thể không
  // còn bất khả thi nữa; audit động để test luôn có ý nghĩa dù data đổi tiếp về sau.
  const categories = [...new Set(sb.FOODS.map((f) => f.category))];
  const buckets = ["le40", "b40_70", "b70_100", "gt100"];
  let found = null;
  for (const cat of categories) {
    const items = sb.FOODS.filter((f) => f.category === cat);
    for (const b of buckets) {
      if (!items.some((f) => sb.matchesBudget(f, b))) {
        found = { cat, bucket: b };
        break;
      }
    }
    if (found) break;
  }
  assert.ok(found, "Không tìm thấy tổ hợp category+bucket nào bất khả thi — nếu data đã phủ hết mọi tổ hợp, test này không còn ý nghĩa và có thể bỏ");
  sb.state.categories.add(found.cat);
  sb.state.price = found.bucket;
  for (let i = 0; i < 15; i++) {
    const { food } = sb.pickFood();
    assert.strictEqual(food.category, found.cat, `Chọn "${found.cat}" (ngân sách "${found.bucket}" đang bất khả thi với nhóm này) nhưng ra món category="${food.category}" (${food.name})`);
  }
});

test("pickFood: tôn trọng Chỉ món cay kể cả khi phải nới Bữa ăn/Ngân sách", () => {
  const sb = buildSandbox();
  sb.state.spicyOnly = true;
  sb.state.meal = "breakfast";
  for (let i = 0; i < 15; i++) {
    const { food } = sb.pickFood();
    assert.strictEqual(food.spicy, true, `Bật "Chỉ món cay" mà ra món không cay (${food.name})`);
  }
});

test("pickFood: không lặp lại 5 món vừa xem gần nhất khi còn lựa chọn khác", () => {
  const sb = buildSandbox();
  const seen = [];
  for (let i = 0; i < 10; i++) {
    const { food } = sb.pickFood();
    if (i >= 1) {
      const last5 = seen.slice(-5);
      assert.ok(!last5.includes(food.name) || sb.FOODS.length <= 5, `Món "${food.name}" lặp lại trong 5 lượt gần nhất`);
    }
    seen.push(food.name);
  }
});

test("pickFood: khi 1 Loại món chỉ có đúng 1 món hợp bữa hiện tại, tự mở rộng bữa khác để random không bị kẹt cứng 1 món (bug Crystal báo: chọn 'Nhật', bấm đổi món mãi vẫn ra Onigiri)", () => {
  const sb = buildSandbox();
  sb.state.categories.add("nhat");
  sb.state.meal = "breakfast"; // trong FOODS thật, chỉ "Onigiri" thuộc "nhat" hợp Sáng

  const onlyBreakfastDish = sb.FOODS.filter((f) => f.category === "nhat" && f.meal.includes("breakfast"));
  assert.strictEqual(onlyBreakfastDish.length, 1, "Test này giả định đúng 1 món Nhật hợp bữa Sáng — nếu data đổi, cần xem lại giả định của test");

  const seen = new Set();
  for (let i = 0; i < 30; i++) {
    const { food } = sb.pickFood();
    assert.strictEqual(food.category, "nhat", "Vẫn phải tôn trọng Loại món đã chọn (Nhật) dù có nới bữa ăn");
    seen.add(food.name);
  }
  assert.ok(seen.size > 1, `Chỉ ra đúng 1 món (${[...seen].join(", ")}) suốt 30 lần random — đúng bug đã báo, phải nới bữa ăn để có nhiều lựa chọn hơn`);
});

test("pickFood: khi Loại món đã chọn không còn món nào (bị ẩn hết), tự bỏ bộ lọc và báo lý do", () => {
  const sb = buildSandbox();
  sb.state.categories.add("nuong");
  const blacklist = sb.FOODS.filter((f) => f.category === "nuong").map((f) => f.name);
  sb.localStorage.setItem(sb.BLACKLIST_KEY, JSON.stringify(blacklist));
  const { food, note } = sb.pickFood();
  assert.ok(food, "Vẫn phải trả về 1 món nào đó thay vì crash/rỗng");
  assert.ok(note && note.length > 0, "Phải có ghi chú giải thích khi bỏ bộ lọc Loại món");
});

test("displayFoodName: chú thích tên gốc tiếng Việt khi ở chế độ EN, trừ món quốc tế", () => {
  const sb = buildSandbox();
  sb.state.lang = "en";
  const pho = sb.FOODS.find((f) => f.name === "Phở bò");
  const pizza = sb.FOODS.find((f) => f.name === "Pizza");
  assert.strictEqual(sb.displayFoodName(pho), "Beef Pho (Phở bò)");
  assert.strictEqual(sb.displayFoodName(pizza), "Pizza");
  sb.state.lang = "vi";
  assert.strictEqual(sb.displayFoodName(pho), "Phở bò");
});

test("parseOpeningHours: nhận diện đang mở / đã đóng / 24-7 đúng theo giờ hiện tại", () => {
  const sb = buildSandbox();
  const result247 = sb.parseOpeningHours("24/7");
  assert.strictEqual(result247.status, "open");

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const inRange = sb.parseOpeningHours(`00:00-23:59`);
  assert.strictEqual(inRange.status, "open", `Giờ hiện tại ${hh}:${mm} phải nằm trong 00:00-23:59`);

  const unsupported = sb.parseOpeningHours("PH off");
  assert.strictEqual(unsupported, null, "Cú pháp không hỗ trợ phải trả về null (không đoán bừa), không throw");
});

test("FOODS: mọi món đều có nameEn/minPrice/maxPrice/category/tags hợp lệ, không trùng tên", () => {
  // Dùng .length thay vì deepStrictEqual với mảng rỗng: FOODS được tạo bên trong vm
  // sandbox (khác realm) nên Array.prototype khác với mảng literal ở file test này —
  // deepStrictEqual sẽ báo sai khác dù nội dung rỗng giống hệt (lệch prototype).
  const sb = buildSandbox();
  const missing = sb.FOODS.filter((f) => !f.nameEn || !f.category || !Array.isArray(f.tags) || f.tags.length === 0);
  assert.strictEqual(missing.length, 0, `Có món thiếu nameEn/category/tags: ${missing.map((f) => f.name).join(", ")}`);
  const badPrice = sb.FOODS.filter((f) => typeof f.minPrice !== "number" || typeof f.maxPrice !== "number" || f.minPrice > f.maxPrice || f.minPrice < 0);
  assert.strictEqual(badPrice.length, 0, `Có món giá không hợp lệ (thiếu/âm/minPrice>maxPrice): ${badPrice.map((f) => f.name).join(", ")}`);
  const names = sb.FOODS.map((f) => f.name);
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  assert.strictEqual(dupes.length, 0, `Có tên món bị trùng: ${dupes.join(", ")}`);
  assert.ok(sb.FOODS.length >= 100, `Cần tối thiểu 100 món theo yêu cầu, hiện có ${sb.FOODS.length}`);
});

test("currentFoodMatchesFilters: phát hiện đúng lúc món đang hiện không còn khớp bộ lọc vừa đổi (bug: đổi Loại món không tự gợi ý lại)", () => {
  const sb = buildSandbox();
  const ga = sb.FOODS.find((f) => f.category === "ga");
  const nuong = sb.FOODS.find((f) => f.category === "nuong");
  sb.state.currentFood = ga;

  // Chưa chọn Loại món nào -> luôn khớp
  assert.strictEqual(sb.currentFoodMatchesFilters(), true);

  // Chọn đúng category của món đang hiện -> vẫn khớp
  sb.state.categories.add(ga.category);
  assert.strictEqual(sb.currentFoodMatchesFilters(), true);

  // Đổi sang category khác -> không còn khớp, phải trigger random lại
  sb.state.categories.clear();
  sb.state.categories.add(nuong.category);
  assert.strictEqual(sb.currentFoodMatchesFilters(), false);

  // Không có món nào đang hiện (chưa random lần nào) -> coi như khớp, không tự kích hoạt random
  sb.state.currentFood = null;
  assert.strictEqual(sb.currentFoodMatchesFilters(), true);
});

test("weightedPick (random thông minh): món trùng category yêu thích được cộng điểm nên xuất hiện thường xuyên hơn món khác, nhưng không loại hẳn món nào", () => {
  const sb = buildSandbox();
  const favFood = sb.FOODS.find((f) => f.category === "com");
  const otherFood = sb.FOODS.find((f) => f.category === "nuoc");
  sb.localStorage.setItem(sb.FAVORITES_KEY, JSON.stringify([favFood.name]));

  const candidates = [favFood, otherFood];
  const counts = { [favFood.name]: 0, [otherFood.name]: 0 };
  for (let i = 0; i < 500; i++) {
    const picked = sb.weightedPick(candidates, "lunch");
    counts[picked.name]++;
  }
  assert.ok(counts[favFood.name] > counts[otherFood.name], `Món cùng category yêu thích (${favFood.name}: ${counts[favFood.name]}) phải ra thường xuyên hơn món còn lại (${otherFood.name}: ${counts[otherFood.name]})`);
  assert.ok(counts[otherFood.name] > 0, "Món không phải yêu thích vẫn phải có cơ hội xuất hiện (base score = 1, không bị loại hẳn)");
});

test("CATEGORY_LABELS: mọi category dùng trong FOODS đều có nhãn hiển thị (vi + en)", () => {
  const sb = buildSandbox();
  const usedCats = new Set(sb.FOODS.map((f) => f.category));
  const missingVi = [...usedCats].filter((c) => !sb.CATEGORY_LABELS.vi[c]);
  const missingEn = [...usedCats].filter((c) => !sb.CATEGORY_LABELS.en[c]);
  assert.strictEqual(missingVi.length, 0, `Category dùng trong FOODS nhưng thiếu nhãn vi: ${missingVi.join(", ")}`);
  assert.strictEqual(missingEn.length, 0, `Category dùng trong FOODS nhưng thiếu nhãn en: ${missingEn.join(", ")}`);
});

test("matchesCuisineTag: khớp quán theo tag cuisine chung của category, kể cả khi món hiếm không có tên/keyword trùng tên quán (bug Crystal báo: 'Cơm lươn nướng' không ra quán nào dù khu vực có quán Nhật)", () => {
  const sb = buildSandbox();
  // Món hiếm (category "nhat"), quán Nhật chỉ ghi cuisine=japanese chung chung,
  // không có "unagi"/"eel" trong tên hay tag — trước đây sẽ KHÔNG khớp được.
  assert.strictEqual(sb.matchesCuisineTag("japanese", "nhat"), true);
  assert.strictEqual(sb.matchesCuisineTag("japanese;sushi", "nhat"), true);
  // Sai category -> không khớp
  assert.strictEqual(sb.matchesCuisineTag("korean", "nhat"), false);
  // Không có tag cuisine, hoặc category không nằm trong map -> không khớp (không suy đoán bừa)
  assert.strictEqual(sb.matchesCuisineTag("", "nhat"), false);
  assert.strictEqual(sb.matchesCuisineTag("japanese", "khong-ton-tai"), false);

  // Mọi category thật sự dùng trong FOODS nên có ít nhất 1 tag cuisine tương ứng,
  // để món nào cũng có cơ hội khớp quán rộng hơn, không riêng vài category may mắn.
  const usedCats = new Set(sb.FOODS.map((f) => f.category));
  const missingCuisineMap = [...usedCats].filter((c) => !sb.CATEGORY_CUISINE_TAGS[c] || sb.CATEGORY_CUISINE_TAGS[c].length === 0);
  assert.strictEqual(missingCuisineMap.length, 0, `Category dùng trong FOODS nhưng chưa có tag cuisine để khớp rộng: ${missingCuisineMap.join(", ")}`);
});

test("writePlacesCache: KHÔNG lưu cache khi Overpass trả về mảng rỗng (bug Crystal báo: nhiều món khác nhau ở cùng 1 vị trí đều báo 'không tìm thấy quán' — do 1 lần fetch đầu lỡ rỗng bị cache 6h, mọi món tìm sau đều ăn cache rỗng đó)", () => {
  const sb = buildSandbox();
  sb.writePlacesCache("10.776_106.700_5000", []);
  assert.strictEqual(sb.readPlacesCache("10.776_106.700_5000"), null, "Không được cache mảng rỗng — phải để lần tìm sau (món khác) fetch lại thật");

  sb.writePlacesCache("10.776_106.700_5000", [{ id: 1 }, { id: 2 }]);
  const cached = sb.readPlacesCache("10.776_106.700_5000");
  assert.strictEqual(cached.length, 2, "Kết quả thật (khác rỗng) vẫn phải cache bình thường");
});

test("fetchOverpassRaw: host đầu lỗi/timeout thì tự chuyển sang host tiếp theo, chỉ throw khi CẢ 2 đều lỗi", async () => {
  const sb = buildSandbox();

  let callLog = [];
  sb.fetch = async (url) => {
    callLog.push(url);
    if (url.includes("overpass-api.de")) {
      return { ok: false, status: 504, json: async () => ({}) };
    }
    return { ok: true, json: async () => ({ elements: [{ id: 1, lat: 10, lon: 106 }] }) };
  };
  const result = await sb.fetchOverpassRaw("fake-query");
  assert.deepStrictEqual(result.map((e) => e.id), [1]);
  assert.strictEqual(callLog.length, 2, "Phải thử đúng 2 host (host 1 fail rồi mới sang host 2), không dừng sớm hay gọi thừa");
  assert.ok(callLog[0].includes("overpass-api.de") && callLog[1].includes("kumi.systems"), "Phải thử theo đúng thứ tự host đã khai báo");

  // Cả 2 host đều lỗi -> phải throw thật (để hiện thông báo lỗi rõ ràng, không âm
  // thầm trả rỗng khiến người dùng tưởng nhầm khu vực không có quán nào)
  sb.fetch = async () => ({ ok: false, status: 500, json: async () => ({}) });
  await assert.rejects(() => sb.fetchOverpassRaw("fake-query"));
});
