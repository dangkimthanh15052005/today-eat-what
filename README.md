# Hôm nay ăn gì? / What to Eat Today?

Web app: gợi ý món ăn theo giờ/khẩu vị, sau đó tìm quán ăn gần một địa chỉ nhập vào
(hoặc vị trí hiện tại). Song ngữ Việt/Anh (nút VI/EN ở đầu trang), có chế độ
Sáng/Tối/Hệ thống (nút ☀️/🌙/⚙️ cạnh VI/EN). Không cần đăng ký API key nào — toàn bộ
dữ liệu bản đồ/địa điểm lấy miễn phí từ OpenStreetMap (Nominatim để tìm địa chỉ,
Overpass API để tìm quán ăn gần đó), ảnh món ăn từ Wikipedia/Wikimedia Commons, danh
sách hành chính từ provinces.open-api.vn.

Random món dùng "random có gu" nhẹ (`weightedPick` trong `app.js`): món trùng
category/chính món đã yêu thích, hoặc khớp đúng ngân sách + bữa ăn đang chọn, được
cộng điểm nên dễ ra hơn — nhưng mọi món luôn có điểm nền ≥1 nên không món nào bị loại
hẳn khỏi vòng random (khác với món đã ẩn/vừa ăn gần đây, vốn bị loại cứng ở bước lọc
trước đó rồi).

Giao diện theo kiểu "app di động": mở app là thấy ngay thẻ món (hero) + 1 nút CTA
dính đáy, card Vị trí/Sở thích thu gọn thành 2 chip tóm tắt ở đầu trang — bấm vào mới
mở sheet chi tiết. Chọn món xong không còn bước "Xác nhận" riêng — CTA đổi thẳng
sang "Tìm quán gần đây", tự mở sheet Vị trí nếu chưa có toạ độ và tự tìm luôn ngay
khi có toạ độ, không cần bấm thêm lần nào.

**Bản đang chạy thật:** https://dangkimthanh15052005.github.io/today-eat-what/

## Chạy thử nhanh (local)

Vì tính năng "Dùng vị trí hiện tại" (Geolocation) chỉ hoạt động trên `https://`
hoặc `http://localhost`, nên chạy qua một server tĩnh nhỏ thay vì mở file
`index.html` trực tiếp:

```bash
npx serve .
# hoặc
python -m http.server 8000
```

Sau đó mở `http://localhost:<port>` trên trình duyệt.

Nếu chỉ cần test phần gợi ý món + nhập địa chỉ thủ công (không dùng nút định vị),
mở thẳng `index.html` bằng trình duyệt cũng được.

## Chạy test tự động

```bash
node --test test-logic.js
```

Test cho phần logic thuần (`pickFood`, `parseOpeningHours`, `displayFoodName`,
dữ liệu `FOODS`) — không cần cài thêm gì (dùng `node:test` có sẵn từ Node 18+).
File test tự trích các hàm liên quan thẳng từ `app.js` (không copy logic ra bản
riêng) nên luôn kiểm tra đúng code hiện tại, không sợ bị lệch. Bao gồm cả test
chống tái diễn bug "chọn Nướng/BBQ ra Lẩu mắm" đã từng gặp.

## Cập nhật code đã deploy

Sau khi sửa `app.js`/`index.html`/`style.css`, nhớ bump version trong query string
của thẻ `<script>`/`<link>` ở `index.html` (vd `app.js?v=6` → `?v=7`) để trình duyệt
không dùng nhầm bản cache cũ, rồi:

```bash
git add -A
git commit -m "..."
git push origin main
```

GitHub Pages tự rebuild sau khoảng 30-60 giây.

## Giới hạn hiện tại

- Dữ liệu quán ăn lấy trực tiếp từ OpenStreetMap — có thể thưa hơn Google Maps ở
  khu vực nhỏ/tỉnh lẻ hoặc quán mới mở. Nếu thấy quá ít kết quả, có thể nâng cấp
  sau bằng cách thay bước gọi Overpass API trong `app.js` (hàm `fetchNearbyPlaces`)
  bằng Google Places API — đánh đổi là phải quản lý API key/quota.
- **Overpass có thể bận (504)** — `fetchNearbyPlaces`/`fetchOverpassRaw` đã tự thử
  lần lượt 2 mirror công khai (`overpass-api.de`, `overpass.kumi.systems`, mỗi host
  timeout ~14s) trước khi báo lỗi thật; cache 6h + "stale-while-revalidate" tới 48h
  (trả bản cũ ngay, fetch nền cập nhật lại) để giảm tần suất phải gọi API. Khi cả 2
  host đều lỗi hoặc 0 quán trong bán kính, hiện khối lỗi/rỗng kèm nút "Thử lại" +
  chip đổi bán kính nhanh, không mở tab Bản đồ trống.
- Không có sao đánh giá, hay giờ mở cửa đáng tin cậy 100% — OSM không có dữ liệu
  rating; giờ mở chỉ hiện khi tag `opening_hours` của quán đủ đơn giản để đọc được,
  còn lại im lặng thay vì đoán bừa.
- **Giá món (`minPrice`/`maxPrice` trong `FOODS`) là giá THAM KHẢO** do tự ước lượng
  theo mặt bằng chung, không phải giá thật của từng quán cụ thể — khi hiện giá cạnh
  1 quán gần bạn, luôn ghi "khoảng X" chứ không khẳng định đó là giá tại quán đó
  (OSM không có dữ liệu giá theo từng quán).
- Tên Tỉnh/Quận/Phường trong phần chọn khu vực chỉ có tiếng Việt (nguồn dữ liệu
  provinces.open-api.vn chưa có bản tiếng Anh) — kể cả khi bật chế độ EN.
- **Không cache offline (chưa có service worker)**: đã cân nhắc thêm PWA offline
  caching nhưng cố tình bỏ, vì cơ chế cache-busting bằng query string (`?v=N`) đang
  dùng đã từng gây 1 sự cố thật ("sửa xong mà không thấy đổi") — thêm 1 lớp cache của
  service worker (vốn khó xoá hơn nhiều so với query string) lúc này rủi ro cao hơn
  lợi ích với quy mô 1 người dùng thử. Phần "cài vào màn hình chính" (manifest + icon)
  vẫn hoạt động bình thường, chỉ thiếu phần chạy được khi mất mạng.
- Quán ăn "khớp món" dựa vào 2 lớp: so khớp `food.keywords` với tên quán/tag
  `cuisine` (substring), CỘNG THÊM so khớp tag `cuisine` với danh sách cuisine OSM
  phổ biến theo từng category (`CATEGORY_CUISINE_TAGS` trong `app.js` — vd category
  "Nhật" khớp thêm cuisine `japanese/sushi/ramen`) để bắt được cả quán chỉ khai báo
  cuisine chung. Vẫn không có menu thật của từng quán nên không đảm bảo quán đó có
  bán đúng món, và không hiện sao đánh giá (OSM không có dữ liệu này, xem điểm phía
  trên) — cố tình không bịa số sao như một số app khác vẫn làm.
- Bản đồ (Leaflet) chỉ tải khi bấm tab "Bản đồ" lần đầu (lazy-load CSS+JS từ CDN),
  không tải sẵn ngay khi mở app — đa số lượt dùng chỉ xem Danh sách.
- Không có tài khoản/đăng nhập, không lưu dữ liệu trên server — mọi thứ (yêu thích,
  món đã ẩn, lịch sử, vị trí + bộ lọc đang chọn, ngôn ngữ) lưu trong `localStorage`
  của trình duyệt, riêng theo từng thiết bị/trình duyệt.
- Danh sách 184 món ăn (trong `app.js`, biến `FOODS`) là danh sách cố định, tự sửa/
  thêm món trực tiếp trong code nếu muốn (nhớ thêm đủ `nameEn`/`minPrice`/`maxPrice`/
  `category`/`tags`). Ngân sách lọc theo kiểu "khoảng giá chồng nhau" (`matchesBudget`
  trong `app.js`) chứ không khớp tuyệt đối 1 mức, nên 1 món có thể khớp nhiều mức
  ngân sách liền kề nếu khoảng giá của nó trải rộng.
