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
  if (marker.trim().startsWith("function")) {
    // function foo(...) {...} -> bỏ qua danh sách tham số, tìm dấu { đầu tiên rồi mới đếm
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
  const sandbox = { localStorage, console };
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
    asVar(extract("const DAY_MAP =")),
    extract("function parseOpeningHours(")
  ].join("\n\n");

  vm.runInContext(code, sandbox);
  return sandbox;
}

test("pickFood: tôn trọng Loại món đã chọn kể cả khi xung đột với Bữa ăn/Ngân sách (regression: Nướng/BBQ + Tối + Trên 100k từng ra Lẩu mắm)", () => {
  const sb = buildSandbox();
  sb.state.categories.add("nuong");
  sb.state.price = "sang";
  sb.state.meal = "dinner";
  for (let i = 0; i < 15; i++) {
    const { food } = sb.pickFood();
    assert.strictEqual(food.category, "nuong", `Chọn "Nướng/BBQ" mà ra món category="${food.category}" (${food.name})`);
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

test("FOODS: mọi món đều có nameEn hợp lệ và không trùng tên", () => {
  // Dùng .length thay vì deepStrictEqual với mảng rỗng: FOODS được tạo bên trong vm
  // sandbox (khác realm) nên Array.prototype khác với mảng literal ở file test này —
  // deepStrictEqual sẽ báo sai khác dù nội dung rỗng giống hệt (lệch prototype).
  const sb = buildSandbox();
  const missing = sb.FOODS.filter((f) => !f.nameEn);
  assert.strictEqual(missing.length, 0, `Có món thiếu nameEn: ${missing.map((f) => f.name).join(", ")}`);
  const names = sb.FOODS.map((f) => f.name);
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  assert.strictEqual(dupes.length, 0, `Có tên món bị trùng: ${dupes.join(", ")}`);
});
