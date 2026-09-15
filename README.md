# Hôm nay ăn gì?

Web app đơn giản: gợi ý món ăn theo giờ/khẩu vị, sau đó tìm quán ăn gần một địa chỉ
nhập vào (hoặc vị trí hiện tại). Không cần đăng ký API key nào — toàn bộ dữ liệu
bản đồ/địa điểm lấy miễn phí từ OpenStreetMap (Nominatim để tìm địa chỉ, Overpass
API để tìm quán ăn gần đó).

## Chạy thử nhanh

Vì tính năng "Dùng vị trí hiện tại" (Geolocation) chỉ hoạt động trên `https://`
hoặc `http://localhost`, nên nên chạy qua một server tĩnh nhỏ thay vì mở file
`index.html` trực tiếp:

```bash
npx serve .
# hoặc
python -m http.server 8000
```

Sau đó mở `http://localhost:<port>` trên trình duyệt.

Nếu chỉ cần test phần gợi ý món + nhập địa chỉ thủ công (không dùng nút định vị),
mở thẳng `index.html` bằng trình duyệt cũng được.

## Đưa lên GitHub Pages (để dùng trên điện thoại)

1. Tạo repo GitHub mới, đẩy 4 file này lên.
2. Vào **Settings → Pages**, chọn branch `main` / thư mục gốc, bật Pages.
3. Sau vài phút sẽ có URL dạng `https://<username>.github.io/<repo>/` — mở URL
   này trên điện thoại là dùng được ngay (kể cả định vị vị trí hiện tại, vì
   GitHub Pages chạy trên `https://`).

## Giới hạn của bản v1

- Dữ liệu quán ăn lấy trực tiếp từ OpenStreetMap — có thể thưa hơn Google Maps ở
  khu vực nhỏ/tỉnh lẻ hoặc quán mới mở. Nếu thấy quá ít kết quả, có thể nâng cấp
  sau bằng cách thay bước gọi Overpass API trong `app.js` (hàm `fetchNearbyPlaces`)
  bằng Google Places API.
- Không có tài khoản/đăng nhập, không lưu dữ liệu trên server — chỉ cache tạm kết
  quả tìm kiếm trong `localStorage` của trình duyệt (để tránh gọi API lặp lại
  trong 6 tiếng).
- Danh sách món ăn (trong `app.js`, biến `FOODS`) là danh sách cố định, tự sửa/
  thêm món trực tiếp trong code nếu muốn.
