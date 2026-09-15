const FOODS = [
  // ===== MÓN NƯỚC (phở/bún/mì/miến/cháo/súp/bánh canh) =====
  { name: "Phở bò", nameEn: "Beef Pho", meal: ["breakfast", "lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["pho"], wiki: "Phở", emoji: "🍜" },
  { name: "Bún bò Huế", nameEn: "Hue Beef Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: true, tags: ["Việt Nam", "Huế"], keywords: ["bun bo"], wiki: "Bún bò Huế", emoji: "🍲" },
  { name: "Bún chả", nameEn: "Grilled Pork with Vermicelli", meal: ["lunch"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: false, tags: ["Việt Nam", "Hà Nội"], keywords: ["bun cha"], wiki: "Bún chả", emoji: "🍢" },
  { name: "Bún riêu", nameEn: "Crab & Tomato Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun rieu"], wiki: "Bún riêu", emoji: "🍲" },
  { name: "Bún đậu mắm tôm", nameEn: "Vermicelli with Tofu & Shrimp Paste", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun dau"], wiki: "Bún đậu mắm tôm", emoji: "🍚" },
  { name: "Bún mắm", nameEn: "Fermented Fish Vermicelli Soup", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "nuoc", spicy: true, tags: ["Việt Nam", "Miền Tây"], keywords: ["bun mam"], wiki: "Bún mắm", emoji: "🍜" },
  { name: "Bún ốc", nameEn: "Snail Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 55000, category: "nuoc", spicy: true, tags: ["Việt Nam", "Hà Nội"], keywords: ["bun oc"], wiki: "Bún ốc", emoji: "🍜" },
  { name: "Bún cá", nameEn: "Fish Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun ca"], wiki: "Bún cá", emoji: "🍜" },
  { name: "Hủ tiếu", nameEn: "Southern-style Noodle Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 55000, category: "nuoc", spicy: false, tags: ["Việt Nam", "Nam Bộ"], keywords: ["hu tieu"], wiki: "Hủ tiếu", emoji: "🍜" },
  { name: "Mì Quảng", nameEn: "Quang-style Turmeric Noodles", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: false, tags: ["Việt Nam", "Quảng Nam"], keywords: ["mi quang"], wiki: "Mì Quảng", emoji: "🍜" },
  { name: "Mì cay", nameEn: "Korean Spicy Noodles", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 80000, category: "nuoc", spicy: true, tags: ["Hàn Quốc"], keywords: ["mi cay"], wiki: null, image: "https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%AC_cay_c%E1%BA%A5p_%C4%91%E1%BB%99_2_-_Mirace.jpg?width=800", emoji: "🌶️" },
  { name: "Cháo lòng", nameEn: "Rice Porridge with Pork Offal", meal: ["breakfast", "latenight"], minPrice: 25000, maxPrice: 45000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["chao long"], wiki: "Cháo lòng", emoji: "🥣" },
  { name: "Súp cua", nameEn: "Crab Soup", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["sup cua"], wiki: "Súp cua", emoji: "🥣" },
  { name: "Bánh canh", nameEn: "Thick Noodle Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["banh canh"], wiki: "Bánh canh", emoji: "🍲" },
  { name: "Bún thịt nướng", nameEn: "Grilled Pork with Vermicelli & Herbs", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 55000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun thit nuong"], wiki: "Bún thịt nướng", emoji: "🍜" },
  { name: "Phở gà", nameEn: "Chicken Pho", meal: ["breakfast", "lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["pho ga"], wiki: "Phở gà", emoji: "🍜" },
  { name: "Phở xào", nameEn: "Stir-fried Pho Noodles", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["pho xao"], wiki: "Phở xào", emoji: "🍜" },
  { name: "Bún mọc", nameEn: "Pork Meatball Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun moc"], wiki: "Bún mọc", emoji: "🍲" },
  { name: "Bún sườn", nameEn: "Pork Rib Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun suon"], wiki: null, image: "https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%BAn_m%E1%BB%8Dc_s%C6%B0%E1%BB%9Dn_non_(th%C3%A1ng_8_n%C4%83m_2018)_(1).jpg?width=800", emoji: "🍲" },
  { name: "Bún ngan", nameEn: "Muscovy Duck Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 35000, maxPrice: 60000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun ngan"], wiki: "Bún ngan", emoji: "🍜" },
  { name: "Bún dọc mùng", nameEn: "Taro Stem Vermicelli Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bun doc mung"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/B%C3%BAn_m%E1%BB%8Dc_s%C6%B0%E1%BB%9Dn.jpg", emoji: "🍲" },
  { name: "Miến gà", nameEn: "Chicken Glass Noodle Soup", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["mien ga"], wiki: "Miến gà", emoji: "🍜" },
  { name: "Miến lươn", nameEn: "Eel Glass Noodle Soup", meal: ["breakfast", "lunch"], minPrice: 40000, maxPrice: 65000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["mien luon"], wiki: null, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mien_luon_Hang_Dieu.JPG?width=800", emoji: "🍜" },
  { name: "Cháo gà", nameEn: "Chicken Rice Porridge", meal: ["breakfast", "latenight"], minPrice: 25000, maxPrice: 45000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["chao ga"], wiki: "Cháo gà", emoji: "🥣" },
  { name: "Cháo cá", nameEn: "Fish Rice Porridge", meal: ["breakfast", "latenight"], minPrice: 25000, maxPrice: 45000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["chao ca"], wiki: null, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A1o_C%C3%A1_L%C3%B3c,_Ti%E1%BB%81n_Giang.jpg?width=800", emoji: "🥣" },
  { name: "Bò kho", nameEn: "Vietnamese Beef Stew", meal: ["breakfast", "lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["bo kho"], wiki: "Bò kho", emoji: "🍲" },
  { name: "Súp gà", nameEn: "Chicken Soup", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "nuoc", spicy: false, tags: ["Việt Nam"], keywords: ["sup ga"], wiki: null, emoji: "🍲" },

  // ===== LẨU =====
  { name: "Lẩu Thái", nameEn: "Thai Hot Pot", meal: ["dinner"], minPrice: 200000, maxPrice: 350000, category: "lau", spicy: true, tags: ["Thái Lan", "Ăn chung"], keywords: ["lau thai", "tom yum"], wiki: "Tom yum", emoji: "🍲" },
  { name: "Lẩu mắm", nameEn: "Fermented Fish Hot Pot", meal: ["dinner"], minPrice: 200000, maxPrice: 350000, category: "lau", spicy: true, tags: ["Việt Nam", "Ăn chung"], keywords: ["lau mam"], wiki: null, emoji: "🍲" },
  { name: "Lẩu riêu cua", nameEn: "Crab & Tomato Hot Pot", meal: ["dinner"], minPrice: 200000, maxPrice: 320000, category: "lau", spicy: false, tags: ["Việt Nam", "Ăn chung"], keywords: ["lau rieu cua"], wiki: null, emoji: "🍲" },
  { name: "Lẩu gà lá é", nameEn: "Chicken Hot Pot with Wild Herbs", meal: ["dinner"], minPrice: 220000, maxPrice: 350000, category: "lau", spicy: true, tags: ["Việt Nam", "Đà Lạt", "Ăn chung"], keywords: ["lau ga la e"], wiki: null, emoji: "🍲" },
  { name: "Lẩu bò", nameEn: "Beef Hot Pot", meal: ["dinner"], minPrice: 250000, maxPrice: 400000, category: "lau", spicy: false, tags: ["Việt Nam", "Ăn chung"], keywords: ["lau bo"], wiki: null, emoji: "🍲" },
  { name: "Lẩu ếch măng cay", nameEn: "Spicy Frog Hot Pot", meal: ["dinner"], minPrice: 220000, maxPrice: 350000, category: "lau", spicy: true, tags: ["Việt Nam", "Ăn chung"], keywords: ["lau ech mang cay"], wiki: null, emoji: "🍲" },
  { name: "Lẩu hải sản", nameEn: "Seafood Hot Pot", meal: ["dinner"], minPrice: 300000, maxPrice: 500000, category: "lau", spicy: false, tags: ["Việt Nam", "Ăn chung"], keywords: ["lau hai san"], wiki: null, emoji: "🍲" },

  // ===== CƠM =====
  { name: "Cơm tấm", nameEn: "Broken Rice", meal: ["breakfast", "lunch", "dinner"], minPrice: 30000, maxPrice: 55000, category: "com", spicy: false, tags: ["Việt Nam", "Sài Gòn"], keywords: ["com tam"], wiki: "Cơm tấm", emoji: "🍛" },
  { name: "Cơm gà", nameEn: "Chicken Rice", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["com ga"], wiki: "Cơm gà", emoji: "🍛" },
  { name: "Cơm chay", nameEn: "Vegetarian Rice", meal: ["lunch", "dinner"], minPrice: 25000, maxPrice: 45000, category: "com", spicy: false, tags: ["Việt Nam", "Chay"], keywords: ["com chay", "chay"], wiki: "Cơm chay", emoji: "🥗" },
  { name: "Cơm rang", nameEn: "Fried Rice", meal: ["lunch", "dinner", "latenight"], minPrice: 25000, maxPrice: 45000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["com rang", "com chien"], wiki: "Cơm rang", emoji: "🍚" },
  { name: "Cơm niêu", nameEn: "Clay Pot Rice", meal: ["lunch", "dinner"], minPrice: 50000, maxPrice: 90000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["com nieu"], wiki: "Cơm niêu", emoji: "🍚" },
  { name: "Bò né", nameEn: "Sizzling Beef & Egg", meal: ["breakfast"], minPrice: 40000, maxPrice: 70000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["bo ne"], wiki: "Bò né", emoji: "🍳" },
  { name: "Xôi", nameEn: "Sticky Rice", meal: ["breakfast"], minPrice: 15000, maxPrice: 30000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["xoi"], wiki: "Xôi", emoji: "🍚" },
  { name: "Cơm hến", nameEn: "Baby Clam Rice", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "com", spicy: true, tags: ["Việt Nam", "Huế"], keywords: ["com hen"], wiki: "Cơm hến", emoji: "🍚" },
  { name: "Cơm âm phủ", nameEn: "Hue-style Mixed Rice", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "com", spicy: false, tags: ["Việt Nam", "Huế"], keywords: ["com am phu"], wiki: "Cơm âm phủ", emoji: "🍚" },
  { name: "Cơm lam", nameEn: "Bamboo Tube Rice", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "com", spicy: false, tags: ["Việt Nam", "Tây Nguyên"], keywords: ["com lam"], wiki: "Cơm lam", emoji: "🍚" },
  { name: "Cơm gà xối mỡ", nameEn: "Crispy Oil-Poached Chicken Rice", meal: ["lunch", "dinner"], minPrice: 30000, maxPrice: 55000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["com ga xoi mo"], wiki: null, image: "https://live.staticflickr.com/7228/7345532502_5a4c92c742.jpg", emoji: "🍛" },
  { name: "Cơm bò lúc lắc", nameEn: "Shaking Beef Rice", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 80000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["bo luc lac"], wiki: "Bò lúc lắc", emoji: "🍛" },
  { name: "Cơm sườn", nameEn: "Grilled Pork Chop Rice", meal: ["breakfast", "lunch", "dinner"], minPrice: 30000, maxPrice: 50000, category: "com", spicy: false, tags: ["Việt Nam"], keywords: ["com suon"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/C%C6%A1m_t%E1%BA%A5m_SG_%28c%C6%A1m_s%C6%B0%E1%BB%9Dn%29_ng27th9n2020_%282%29.jpg", emoji: "🍛" },

  // ===== BÁNH =====
  { name: "Bánh mì", nameEn: "Vietnamese Baguette Sandwich", meal: ["breakfast", "latenight"], minPrice: 15000, maxPrice: 30000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh mi"], wiki: "Bánh mì", emoji: "🥖" },
  { name: "Bánh cuốn", nameEn: "Steamed Rice Rolls", meal: ["breakfast"], minPrice: 25000, maxPrice: 45000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh cuon"], wiki: "Bánh cuốn", emoji: "🥟" },
  { name: "Bánh xèo", nameEn: "Sizzling Crepe", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh xeo"], wiki: "Bánh xèo", emoji: "🥞" },
  { name: "Bánh bèo", nameEn: "Steamed Rice Cakes", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "banh", spicy: false, tags: ["Việt Nam", "Huế"], keywords: ["banh beo"], wiki: "Bánh bèo", emoji: "🥟" },
  { name: "Bánh khọt", nameEn: "Mini Savory Pancakes", meal: ["lunch", "dinner"], minPrice: 30000, maxPrice: 50000, category: "banh", spicy: false, tags: ["Việt Nam", "Vũng Tàu"], keywords: ["banh khot"], wiki: "Bánh khọt", emoji: "🥞" },
  { name: "Bánh giò", nameEn: "Pyramid Rice Dumpling", meal: ["breakfast"], minPrice: 12000, maxPrice: 20000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh gio"], wiki: "Bánh giò", emoji: "🥟" },
  { name: "Bánh bao", nameEn: "Steamed Bun", meal: ["breakfast"], minPrice: 12000, maxPrice: 25000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh bao"], wiki: "Bánh bao", emoji: "🥟" },
  { name: "Bánh đúc", nameEn: "Savory Rice Cake", meal: ["breakfast"], minPrice: 15000, maxPrice: 30000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh duc"], wiki: "Bánh đúc", emoji: "🥟" },
  { name: "Bánh nậm", nameEn: "Flat Steamed Rice Cake", meal: ["breakfast"], minPrice: 20000, maxPrice: 35000, category: "banh", spicy: false, tags: ["Việt Nam", "Huế"], keywords: ["banh nam"], wiki: "Bánh nậm", emoji: "🥟" },
  { name: "Bánh ướt", nameEn: "Soft Steamed Rice Sheets", meal: ["breakfast"], minPrice: 20000, maxPrice: 35000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh uot"], wiki: "Bánh ướt", emoji: "🥟" },
  { name: "Bánh tét", nameEn: "Cylindrical Sticky Rice Cake", meal: ["breakfast", "lunch"], minPrice: 15000, maxPrice: 30000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh tet"], wiki: "Bánh tét", emoji: "🥟" },
  { name: "Bánh chưng", nameEn: "Square Sticky Rice Cake", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh chung"], wiki: "Bánh chưng", emoji: "🥟" },
  { name: "Bánh tôm", nameEn: "Shrimp Fritters", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "banh", spicy: false, tags: ["Việt Nam", "Hà Nội"], keywords: ["banh tom"], wiki: "Bánh tôm", emoji: "🍤" },
  { name: "Bánh căn", nameEn: "Mini Rice Pancakes", meal: ["breakfast", "dinner"], minPrice: 20000, maxPrice: 40000, category: "banh", spicy: false, tags: ["Việt Nam", "Phan Thiết"], keywords: ["banh can"], wiki: "Bánh căn", emoji: "🥞" },
  { name: "Bánh hỏi", nameEn: "Woven Rice Vermicelli", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "banh", spicy: false, tags: ["Việt Nam"], keywords: ["banh hoi"], wiki: "Bánh hỏi", emoji: "🥟" },
  { name: "Bánh gối", nameEn: "Fried Pillow Dumpling", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "banh", spicy: false, tags: ["Việt Nam", "Hà Nội"], keywords: ["banh goi"], wiki: "Bánh gối", emoji: "🥟" },

  // ===== THỊT/BBQ (nướng) =====
  { name: "Nem nướng", nameEn: "Grilled Pork Skewers", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 80000, category: "nuong", spicy: false, tags: ["Việt Nam", "Nha Trang"], keywords: ["nem nuong"], wiki: "Nem nướng", emoji: "🍢" },
  { name: "Đồ nướng", nameEn: "Grilled BBQ", meal: ["dinner", "latenight"], minPrice: 50000, maxPrice: 90000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["nuong", "bbq"], wiki: "Thịt nướng", emoji: "🍖" },
  { name: "Chả cá", nameEn: "Turmeric Fish with Dill", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 100000, category: "nuong", spicy: false, tags: ["Việt Nam", "Hà Nội"], keywords: ["cha ca"], wiki: "Chả cá Lã Vọng", emoji: "🐟" },
  { name: "Vịt quay / Heo quay", nameEn: "Roast Duck / Roast Pork", meal: ["lunch", "dinner"], minPrice: 50000, maxPrice: 90000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["vit quay", "heo quay"], wiki: "Heo quay", emoji: "🍗" },
  { name: "Thịt xiên nướng", nameEn: "Grilled Meat Skewers", meal: ["dinner", "latenight"], minPrice: 15000, maxPrice: 30000, category: "nuong", spicy: false, tags: ["Việt Nam", "Ăn vặt"], keywords: ["thit xien nuong", "xien nuong"], wiki: null, image: "https://live.staticflickr.com/7330/9822651966_68b1e0cdaa_b.jpg", emoji: "🍢" },
  { name: "Cá nướng", nameEn: "Grilled Fish", meal: ["dinner"], minPrice: 60000, maxPrice: 100000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["ca nuong"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/C%C3%A1_l%C3%B3c_n%C6%B0%E1%BB%9Bng_trui.JPG", emoji: "🐟" },
  { name: "Tôm nướng", nameEn: "Grilled Shrimp", meal: ["dinner"], minPrice: 70000, maxPrice: 120000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["tom nuong"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/L%E1%BB%85_h%E1%BB%99i_%E1%BA%A9m_th%E1%BB%B1c_C%E1%BB%ADa_Vi%E1%BB%87t_th4n2023_m%C3%B3n_t%C3%B4m_n%C6%B0%E1%BB%9Bng_C%E1%BB%ADa_Vi%E1%BB%87t_%282%29.jpg", emoji: "🍤" },
  { name: "Mực nướng", nameEn: "Grilled Squid", meal: ["dinner", "latenight"], minPrice: 60000, maxPrice: 110000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["muc nuong"], wiki: null, image: "https://live.staticflickr.com/5056/5439864746_301d25e0d1_b.jpg", emoji: "🦑" },
  { name: "Sườn nướng", nameEn: "Grilled Pork Ribs", meal: ["lunch", "dinner"], minPrice: 50000, maxPrice: 90000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["suon nuong"], wiki: null, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Si%C3%AAu_th%E1%BB%8B_ng2th6n2020_(s%C6%B0%E1%BB%9Dn_n%C6%B0%E1%BB%9Bng_m%E1%BA%ADt_ong)_(3).jpg?width=800", emoji: "🍖" },
  { name: "Chim cút nướng", nameEn: "Grilled Quail", meal: ["latenight"], minPrice: 40000, maxPrice: 70000, category: "nuong", spicy: false, tags: ["Việt Nam", "Ăn vặt"], keywords: ["chim cut nuong"], wiki: null, image: "https://live.staticflickr.com/7822/32118333107_0f3e3b72a5_b.jpg", emoji: "🍗" },
  { name: "Bò nướng lá lốt", nameEn: "Grilled Beef in Betel Leaf", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 75000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["bo nuong la lot"], wiki: "Bò nướng lá lốt", emoji: "🍖" },
  { name: "Ba chỉ nướng", nameEn: "Grilled Pork Belly", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 95000, category: "nuong", spicy: false, tags: ["Việt Nam"], keywords: ["ba chi nuong"], wiki: null, emoji: "🥓" },
  { name: "Sườn nướng BBQ kiểu Mỹ", nameEn: "American BBQ Ribs", meal: ["dinner"], minPrice: 120000, maxPrice: 220000, category: "nuong", spicy: false, tags: ["Mỹ"], keywords: ["bbq ribs", "suon my"], wiki: null, emoji: "🍖" },
  { name: "Dê nướng", nameEn: "Grilled Goat", meal: ["dinner"], minPrice: 150000, maxPrice: 280000, category: "nuong", spicy: false, tags: ["Việt Nam", "Ninh Bình"], keywords: ["de nuong"], wiki: null, emoji: "🐐" },

  // ===== GÀ =====
  { name: "Gà rán", nameEn: "Fried Chicken", meal: ["lunch", "dinner", "latenight"], minPrice: 45000, maxPrice: 90000, category: "ga", spicy: false, tags: ["Fast food"], keywords: ["ga ran", "kfc", "fried chicken"], wiki: "Gà rán", emoji: "🍗" },
  { name: "Gà nướng mật ong", nameEn: "Honey Grilled Chicken", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 100000, category: "ga", spicy: false, tags: ["Việt Nam"], keywords: ["ga nuong mat ong"], wiki: null, emoji: "🍗" },
  { name: "Cánh gà chiên nước mắm", nameEn: "Fish Sauce Chicken Wings", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "ga", spicy: false, tags: ["Việt Nam"], keywords: ["canh ga chien nuoc mam"], wiki: null, emoji: "🍗" },
  { name: "Gà quay", nameEn: "Roast Chicken", meal: ["lunch", "dinner"], minPrice: 90000, maxPrice: 160000, category: "ga", spicy: false, tags: ["Việt Nam"], keywords: ["ga quay"], wiki: null, emoji: "🍗" },
  { name: "Ức gà áp chảo", nameEn: "Pan-seared Chicken Breast", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "ga", spicy: false, tags: ["Healthy"], keywords: ["uc ga ap chao"], wiki: null, emoji: "🍗" },
  { name: "Gà nướng sả", nameEn: "Lemongrass Grilled Chicken", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 90000, category: "ga", spicy: false, tags: ["Việt Nam"], keywords: ["ga nuong sa"], wiki: null, emoji: "🍗" },
  { name: "Súp gà nấm", nameEn: "Chicken Mushroom Soup", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "ga", spicy: false, tags: ["Healthy"], keywords: ["sup ga nam"], wiki: null, emoji: "🍲" },

  // ===== HẢI SẢN =====
  { name: "Hải sản", nameEn: "Seafood", meal: ["dinner"], minPrice: 150000, maxPrice: 300000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["hai san", "seafood"], wiki: "Hải sản", emoji: "🦐" },
  { name: "Ốc", nameEn: "Snails", meal: ["dinner", "latenight"], minPrice: 50000, maxPrice: 90000, category: "hai-san", spicy: true, tags: ["Việt Nam", "Ăn vặt"], keywords: ["oc"], wiki: "Ốc", emoji: "🐌" },
  { name: "Nghêu hấp", nameEn: "Steamed Clams", meal: ["dinner"], minPrice: 60000, maxPrice: 100000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["ngheu hap"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/M%C3%B3n_%C4%83n_C%E1%BB%ADa_Vi%E1%BB%87t%2C_T%E1%BA%BFt_2022_%28ngh%C3%AAu_h%E1%BA%A5p_s%E1%BA%A3%2C_d%C4%A9a_ngh%C3%AAu%29_%282a%29.jpg", emoji: "🦪" },
  { name: "Sò huyết", nameEn: "Blood Cockles", meal: ["dinner"], minPrice: 70000, maxPrice: 120000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["so huyet"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/0/07/S%C3%B2_huy%E1%BA%BFt_rang_me.jpg", emoji: "🦪" },
  { name: "Ghẹ rang muối", nameEn: "Salt & Pepper Blue Crab", meal: ["dinner"], minPrice: 150000, maxPrice: 280000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["ghe rang muoi"], wiki: null, emoji: "🦀" },
  { name: "Tôm hùm", nameEn: "Lobster", meal: ["dinner"], minPrice: 300000, maxPrice: 600000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["tom hum", "lobster"], wiki: "Tôm hùm", emoji: "🦞" },
  { name: "Cua rang me", nameEn: "Tamarind Crab", meal: ["dinner"], minPrice: 200000, maxPrice: 400000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["cua rang me"], wiki: null, emoji: "🦀" },
  { name: "Tôm hấp nước dừa", nameEn: "Coconut Steamed Shrimp", meal: ["dinner"], minPrice: 100000, maxPrice: 180000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["tom hap nuoc dua"], wiki: null, emoji: "🍤" },
  { name: "Bạch tuộc nướng", nameEn: "Grilled Octopus", meal: ["dinner", "latenight"], minPrice: 60000, maxPrice: 110000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["bach tuoc nuong"], wiki: null, emoji: "🐙" },
  { name: "Hàu nướng mỡ hành", nameEn: "Grilled Oysters with Scallion Oil", meal: ["dinner", "latenight"], minPrice: 80000, maxPrice: 150000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["hau nuong mo hanh"], wiki: null, emoji: "🦪" },
  { name: "Cháo hải sản", nameEn: "Seafood Congee", meal: ["breakfast", "latenight"], minPrice: 35000, maxPrice: 60000, category: "hai-san", spicy: false, tags: ["Việt Nam"], keywords: ["chao hai san"], wiki: null, emoji: "🥣" },

  // ===== ĂN VẶT =====
  { name: "Gỏi cuốn", nameEn: "Fresh Spring Rolls", meal: ["lunch", "dinner"], minPrice: 25000, maxPrice: 45000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["goi cuon"], wiki: "Gỏi cuốn", emoji: "🥗" },
  { name: "Chả giò", nameEn: "Fried Spring Rolls", meal: ["lunch", "dinner", "latenight"], minPrice: 25000, maxPrice: 45000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["cha gio", "nem ran"], wiki: "Chả giò", emoji: "🥟" },
  { name: "Nem chua rán", nameEn: "Fried Fermented Pork Rolls", meal: ["latenight"], minPrice: 15000, maxPrice: 30000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["nem chua ran"], wiki: "Nem chua rán", emoji: "🍢" },
  { name: "Xúc xích / Lạp xưởng nướng", nameEn: "Grilled Sausage", meal: ["latenight"], minPrice: 15000, maxPrice: 30000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["xuc xich", "lap xuong"], wiki: "Xúc xích", emoji: "🌭" },
  { name: "Bánh tráng trộn", nameEn: "Mixed Rice Paper Salad", meal: ["latenight"], minPrice: 15000, maxPrice: 30000, category: "an-vat", spicy: true, tags: ["Việt Nam", "Sài Gòn"], keywords: ["banh trang tron"], wiki: "Bánh tráng trộn", emoji: "🌯" },
  { name: "Phở cuốn", nameEn: "Pho Roll", meal: ["lunch", "dinner"], minPrice: 30000, maxPrice: 55000, category: "an-vat", spicy: false, tags: ["Việt Nam", "Hà Nội"], keywords: ["pho cuon"], wiki: "Phở cuốn", emoji: "🌯" },
  { name: "Bò bía", nameEn: "Jicama Fresh Rolls", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["bo bia"], wiki: "Bò bía", emoji: "🌯" },
  { name: "Hột vịt lộn", nameEn: "Balut (Fertilized Duck Egg)", meal: ["latenight"], minPrice: 8000, maxPrice: 15000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["hot vit lon", "trung vit lon"], wiki: "Hột vịt lộn", emoji: "🥚" },
  { name: "Bắp xào", nameEn: "Stir-fried Corn", meal: ["latenight"], minPrice: 15000, maxPrice: 25000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["bap xao", "ngo xao"], wiki: null, image: "https://live.staticflickr.com/8374/8539021418_708abd0bba_b.jpg", emoji: "🌽" },
  { name: "Cá viên chiên", nameEn: "Fried Fish Balls", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "an-vat", spicy: false, tags: ["Ăn vặt"], keywords: ["ca vien chien"], wiki: null, image: "https://live.staticflickr.com/197/502873280_20403546e7_b.jpg", emoji: "🍢" },
  { name: "Trứng cút lộn xào me", nameEn: "Quail Balut in Tamarind Sauce", meal: ["latenight"], minPrice: 15000, maxPrice: 25000, category: "an-vat", spicy: false, tags: ["Việt Nam"], keywords: ["trung cut", "hot vit lon"], wiki: null, emoji: "🥚" },

  // ===== CHIÊN/RÁN =====
  { name: "Khoai tây chiên", nameEn: "French Fries", meal: ["latenight"], minPrice: 15000, maxPrice: 35000, category: "chien", spicy: false, tags: ["Fast food"], keywords: ["khoai tay chien", "fries"], wiki: "Khoai tây chiên", emoji: "🍟" },
  { name: "Khoai tây lắc phô mai", nameEn: "Cheese Shake Fries", meal: ["latenight"], minPrice: 25000, maxPrice: 45000, category: "chien", spicy: false, tags: ["Fast food"], keywords: ["khoai tay lac pho mai"], wiki: null, emoji: "🧀" },
  { name: "Nugget gà", nameEn: "Chicken Nuggets", meal: ["latenight"], minPrice: 25000, maxPrice: 45000, category: "chien", spicy: false, tags: ["Fast food"], keywords: ["nugget ga", "chicken nugget"], wiki: null, emoji: "🍗" },
  { name: "Phô mai que", nameEn: "Mozzarella Sticks", meal: ["latenight"], minPrice: 25000, maxPrice: 45000, category: "chien", spicy: false, tags: ["Fast food"], keywords: ["pho mai que", "mozzarella"], wiki: null, emoji: "🧀" },

  // ===== FAST FOOD =====
  { name: "Hot dog", nameEn: "Hot Dog", meal: ["lunch", "dinner", "latenight"], minPrice: 25000, maxPrice: 45000, category: "fast-food", spicy: false, tags: ["Mỹ", "Fast food"], keywords: ["hot dog"], wiki: "Hot dog", emoji: "🌭" },
  { name: "Bánh mì que pate", nameEn: "Mini Pate Baguette", meal: ["breakfast", "latenight"], minPrice: 8000, maxPrice: 15000, category: "fast-food", spicy: false, tags: ["Việt Nam", "Hải Phòng"], keywords: ["banh mi que"], wiki: null, emoji: "🥖" },
  { name: "Xúc xích Đức", nameEn: "German Sausage", meal: ["lunch", "dinner", "latenight"], minPrice: 30000, maxPrice: 55000, category: "fast-food", spicy: false, tags: ["Đức", "Fast food"], keywords: ["xuc xich duc", "bratwurst"], wiki: null, emoji: "🌭" },
  { name: "Sandwich", nameEn: "Sandwich", meal: ["breakfast", "lunch"], minPrice: 25000, maxPrice: 45000, category: "fast-food", spicy: false, tags: ["Fast food"], keywords: ["sandwich"], wiki: "Sandwich", emoji: "🥪" },
  { name: "Bánh mì kẹp xúc xích", nameEn: "Corn Dog", meal: ["latenight"], minPrice: 20000, maxPrice: 35000, category: "fast-food", spicy: false, tags: ["Fast food"], keywords: ["corn dog"], wiki: "Corn dog", emoji: "🌭" },

  // ===== PIZZA =====
  { name: "Pizza", nameEn: "Pizza", meal: ["lunch", "dinner"], minPrice: 90000, maxPrice: 180000, category: "pizza", spicy: false, tags: ["Ý"], keywords: ["pizza"], wiki: "Pizza", emoji: "🍕" },
  { name: "Pizza hải sản", nameEn: "Seafood Pizza", meal: ["lunch", "dinner"], minPrice: 130000, maxPrice: 250000, category: "pizza", spicy: false, tags: ["Ý"], keywords: ["pizza hai san"], wiki: null, emoji: "🍕" },
  { name: "Pizza phô mai", nameEn: "Cheese Pizza", meal: ["lunch", "dinner"], minPrice: 100000, maxPrice: 190000, category: "pizza", spicy: false, tags: ["Ý"], keywords: ["pizza pho mai"], wiki: null, emoji: "🍕" },
  { name: "Pizza pepperoni", nameEn: "Pepperoni Pizza", meal: ["lunch", "dinner"], minPrice: 110000, maxPrice: 210000, category: "pizza", spicy: false, tags: ["Ý"], keywords: ["pizza pepperoni"], wiki: null, emoji: "🍕" },

  // ===== BURGER =====
  { name: "Burger", nameEn: "Burger", meal: ["lunch", "dinner", "latenight"], minPrice: 35000, maxPrice: 65000, category: "burger", spicy: false, tags: ["Mỹ", "Fast food"], keywords: ["burger"], wiki: "Hamburger", emoji: "🍔" },
  { name: "Burger bò phô mai", nameEn: "Cheeseburger", meal: ["lunch", "dinner", "latenight"], minPrice: 40000, maxPrice: 75000, category: "burger", spicy: false, tags: ["Mỹ", "Fast food"], keywords: ["cheeseburger", "burger pho mai"], wiki: "Cheeseburger", emoji: "🍔" },
  { name: "Burger gà giòn", nameEn: "Crispy Chicken Burger", meal: ["lunch", "dinner", "latenight"], minPrice: 35000, maxPrice: 65000, category: "burger", spicy: false, tags: ["Fast food"], keywords: ["burger ga"], wiki: null, emoji: "🍔" },
  { name: "Burger tôm", nameEn: "Shrimp Burger", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "burger", spicy: false, tags: ["Fast food"], keywords: ["burger tom"], wiki: null, emoji: "🍔" },
  { name: "Burger chay", nameEn: "Veggie Burger", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "burger", spicy: false, tags: ["Chay", "Healthy"], keywords: ["burger chay", "veggie burger"], wiki: null, emoji: "🍔" },

  // ===== NHẬT =====
  { name: "Sushi", nameEn: "Sushi", meal: ["lunch", "dinner"], minPrice: 120000, maxPrice: 250000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["sushi", "nhat ban", "japanese"], wiki: "Sushi", emoji: "🍣" },
  { name: "Ramen", nameEn: "Ramen", meal: ["lunch", "dinner"], minPrice: 65000, maxPrice: 110000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["ramen"], wiki: "Ramen", emoji: "🍜" },
  { name: "Udon", nameEn: "Udon", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 95000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["udon"], wiki: "Udon", emoji: "🍜" },
  { name: "Mì soba lạnh", nameEn: "Cold Soba Noodles", meal: ["lunch"], minPrice: 55000, maxPrice: 90000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["soba"], wiki: "Soba", emoji: "🍜" },
  { name: "Cơm cà ri Nhật", nameEn: "Japanese Curry Rice", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 90000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["curry rice", "com cari nhat"], wiki: "Cà ri Nhật Bản", emoji: "🍛" },
  { name: "Tempura", nameEn: "Tempura", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 110000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["tempura"], wiki: "Tempura", emoji: "🍤" },
  { name: "Gà karaage", nameEn: "Karaage Fried Chicken", meal: ["lunch", "dinner"], minPrice: 50000, maxPrice: 85000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["karaage"], wiki: "Karaage", emoji: "🍗" },
  { name: "Onigiri", nameEn: "Onigiri Rice Ball", meal: ["breakfast", "lunch"], minPrice: 15000, maxPrice: 25000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["onigiri"], wiki: "Onigiri", emoji: "🍙" },
  { name: "Gyoza", nameEn: "Gyoza Dumplings", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 65000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["gyoza"], wiki: "Gyōza", emoji: "🥟" },
  { name: "Cơm hộp bento", nameEn: "Bento Box", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 110000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["bento"], wiki: "Bento", emoji: "🍱" },
  { name: "Cơm lươn nướng", nameEn: "Grilled Eel Rice (Unagi Don)", meal: ["lunch", "dinner"], minPrice: 90000, maxPrice: 160000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["unagi don", "com luon nuong"], wiki: "Unagi", emoji: "🍱" },
  { name: "Takoyaki", nameEn: "Takoyaki Octopus Balls", meal: ["latenight"], minPrice: 35000, maxPrice: 60000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["takoyaki"], wiki: "Takoyaki", emoji: "🐙" },
  { name: "Okonomiyaki", nameEn: "Okonomiyaki Savory Pancake", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 100000, category: "nhat", spicy: false, tags: ["Nhật Bản"], keywords: ["okonomiyaki"], wiki: "Okonomiyaki", emoji: "🥞" },

  // ===== HÀN =====
  { name: "Tokbokki", nameEn: "Tteokbokki", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 80000, category: "han", spicy: true, tags: ["Hàn Quốc"], keywords: ["tokbokki", "topokki"], wiki: "Tokbokki", emoji: "🍢" },
  { name: "Kimbap", nameEn: "Kimbap", meal: ["lunch", "dinner"], minPrice: 25000, maxPrice: 45000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["kimbap"], wiki: "Kimbap", emoji: "🍙" },
  { name: "Mì tương đen", nameEn: "Jjajangmyeon (Black Bean Noodles)", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 90000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["jjajangmyeon", "mi tuong den"], wiki: null, emoji: "🍜" },
  { name: "Bibimbap", nameEn: "Bibimbap (Korean Mixed Rice)", meal: ["lunch", "dinner"], minPrice: 60000, maxPrice: 100000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["bibimbap", "com tron han quoc"], wiki: "Bibimbap", emoji: "🍚" },
  { name: "Canh kim chi", nameEn: "Kimchi Jjigae", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 90000, category: "han", spicy: true, tags: ["Hàn Quốc"], keywords: ["kimchi jjigae", "canh kim chi"], wiki: "Kimchi jjigae", emoji: "🍲" },
  { name: "Thịt ba chỉ nướng Hàn Quốc", nameEn: "Samgyeopsal (Korean BBQ Pork Belly)", meal: ["dinner"], minPrice: 150000, maxPrice: 280000, category: "han", spicy: false, tags: ["Hàn Quốc", "Ăn chung"], keywords: ["samgyeopsal"], wiki: "Samgyeopsal", emoji: "🥓" },
  { name: "Miến trộn Hàn Quốc", nameEn: "Japchae (Glass Noodle Stir-fry)", meal: ["lunch", "dinner"], minPrice: 50000, maxPrice: 85000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["japchae"], wiki: "Japchae", emoji: "🍜" },
  { name: "Gà rán Hàn Quốc", nameEn: "Korean Fried Chicken", meal: ["dinner", "latenight"], minPrice: 90000, maxPrice: 160000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["korean fried chicken", "ga ran han quoc"], wiki: null, emoji: "🍗" },
  { name: "Canh rong biển", nameEn: "Korean Seaweed Soup", meal: ["breakfast", "lunch"], minPrice: 35000, maxPrice: 60000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["mieokguk", "canh rong bien"], wiki: null, emoji: "🍲" },
  { name: "Chả cá Hàn Quốc", nameEn: "Eomuk (Korean Fish Cake)", meal: ["latenight"], minPrice: 15000, maxPrice: 30000, category: "han", spicy: false, tags: ["Hàn Quốc"], keywords: ["eomuk"], wiki: null, emoji: "🍢" },

  // ===== TRUNG/ĐÀI =====
  { name: "Dimsum", nameEn: "Dim Sum", meal: ["breakfast", "lunch"], minPrice: 60000, maxPrice: 110000, category: "trung-dai", spicy: false, tags: ["Trung Quốc"], keywords: ["dimsum", "diem tam"], wiki: "Dim sum", emoji: "🥟" },
  { name: "Sủi cảo", nameEn: "Wonton / Xiaolongbao", meal: ["breakfast", "lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "trung-dai", spicy: false, tags: ["Trung Quốc"], keywords: ["sui cao", "xiaolongbao"], wiki: "Tiểu long bao", emoji: "🥟" },
  { name: "Mì vằn thắn", nameEn: "Wonton Noodle Soup", meal: ["breakfast", "lunch"], minPrice: 40000, maxPrice: 65000, category: "trung-dai", spicy: false, tags: ["Trung Quốc", "Hồng Kông"], keywords: ["mi van than", "wonton noodle"], wiki: "Mì hoành thánh", emoji: "🍜" },
  { name: "Vịt quay Bắc Kinh", nameEn: "Peking Duck", meal: ["dinner"], minPrice: 250000, maxPrice: 450000, category: "trung-dai", spicy: false, tags: ["Trung Quốc", "Ăn chung"], keywords: ["peking duck", "vit quay bac kinh"], wiki: "Vịt quay Bắc Kinh", emoji: "🦆" },
  { name: "Cơm chiên Dương Châu", nameEn: "Yangzhou Fried Rice", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 75000, category: "trung-dai", spicy: false, tags: ["Trung Quốc"], keywords: ["com chien duong chau", "yangzhou fried rice"], wiki: "Cơm chiên Dương Châu", emoji: "🍚" },
  { name: "Há cảo", nameEn: "Har Gow (Shrimp Dumpling)", meal: ["breakfast", "lunch"], minPrice: 35000, maxPrice: 60000, category: "trung-dai", spicy: false, tags: ["Trung Quốc"], keywords: ["ha cao", "har gow"], wiki: "Há cảo", emoji: "🥟" },
  { name: "Cháo Hồng Kông", nameEn: "Century Egg Congee", meal: ["breakfast", "latenight"], minPrice: 30000, maxPrice: 50000, category: "trung-dai", spicy: false, tags: ["Trung Quốc", "Hồng Kông"], keywords: ["chao hong kong", "century egg congee"], wiki: null, emoji: "🥣" },

  // ===== HEALTHY =====
  { name: "Salad rau trộn dầu giấm", nameEn: "Garden Salad", meal: ["lunch", "dinner"], minPrice: 35000, maxPrice: 60000, category: "healthy", spicy: false, tags: ["Healthy", "Chay"], keywords: ["salad", "rau tron"], wiki: "Salad", emoji: "🥗" },
  { name: "Cơm gạo lứt ức gà", nameEn: "Brown Rice Chicken Bowl", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 70000, category: "healthy", spicy: false, tags: ["Healthy"], keywords: ["gao lut uc ga", "com gao lut"], wiki: null, emoji: "🍚" },
  { name: "Poke bowl cá hồi", nameEn: "Salmon Poke Bowl", meal: ["lunch", "dinner"], minPrice: 80000, maxPrice: 140000, category: "healthy", spicy: false, tags: ["Healthy", "Hawaii"], keywords: ["poke bowl", "ca hoi"], wiki: "Poke (dish)", emoji: "🥗" },
  { name: "Súp rau củ", nameEn: "Vegetable Soup", meal: ["lunch", "dinner"], minPrice: 25000, maxPrice: 45000, category: "healthy", spicy: false, tags: ["Healthy", "Chay"], keywords: ["sup rau cu"], wiki: null, emoji: "🍲" },
  { name: "Bánh mì nguyên cám kẹp", nameEn: "Whole Wheat Sandwich", meal: ["breakfast", "lunch"], minPrice: 30000, maxPrice: 50000, category: "healthy", spicy: false, tags: ["Healthy"], keywords: ["banh mi nguyen cam"], wiki: null, emoji: "🥪" },
  { name: "Sữa chua granola", nameEn: "Yogurt Granola Bowl", meal: ["breakfast"], minPrice: 30000, maxPrice: 50000, category: "healthy", spicy: false, tags: ["Healthy"], keywords: ["yogurt granola", "sua chua granola"], wiki: null, emoji: "🥣" },
  { name: "Đậu hũ sốt cà", nameEn: "Tofu in Tomato Sauce", meal: ["lunch", "dinner"], minPrice: 25000, maxPrice: 40000, category: "healthy", spicy: false, tags: ["Healthy", "Chay"], keywords: ["dau hu sot ca"], wiki: null, emoji: "🍅" },
  { name: "Cá hồi áp chảo", nameEn: "Pan-seared Salmon", meal: ["lunch", "dinner"], minPrice: 100000, maxPrice: 180000, category: "healthy", spicy: false, tags: ["Healthy"], keywords: ["ca hoi ap chao", "salmon"], wiki: null, emoji: "🐟" },
  { name: "Yến mạch trái cây", nameEn: "Fruit Oatmeal", meal: ["breakfast"], minPrice: 25000, maxPrice: 45000, category: "healthy", spicy: false, tags: ["Healthy"], keywords: ["yen mach", "oatmeal"], wiki: "Yến mạch", emoji: "🥣" },

  // ===== TRÁNG MIỆNG (DESSERT) =====
  { name: "Chè", nameEn: "Vietnamese Sweet Soup", meal: ["latenight"], minPrice: 12000, maxPrice: 25000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["che"], wiki: "Chè (ẩm thực)", emoji: "🍧" },
  { name: "Sữa chua", nameEn: "Yogurt", meal: ["latenight"], minPrice: 8000, maxPrice: 15000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["sua chua", "yaourt"], wiki: "Sữa chua", emoji: "🍦" },
  { name: "Bánh flan", nameEn: "Caramel Custard", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["banh flan", "creme caramel"], wiki: "Bánh flan", emoji: "🍮" },
  { name: "Kem", nameEn: "Ice Cream", meal: ["latenight"], minPrice: 10000, maxPrice: 25000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["kem", "ice cream"], wiki: null, image: "https://live.staticflickr.com/4434/36511673714_1566b87d4e.jpg", emoji: "🍦" },
  { name: "Bánh su sê", nameEn: "Tapioca Wedding Cake", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["banh su se", "banh phu the"], wiki: "Bánh phu thê", emoji: "🍡" },
  { name: "Chè Thái", nameEn: "Thai-style Mixed Dessert", meal: ["latenight"], minPrice: 20000, maxPrice: 35000, category: "trang-mieng", spicy: false, tags: ["Thái Lan"], keywords: ["che thai"], wiki: null, image: "https://live.staticflickr.com/4590/39380132132_59bd5c1038.jpg", emoji: "🍧" },
  { name: "Chè khúc bạch", nameEn: "Almond Jelly Dessert", meal: ["latenight"], minPrice: 20000, maxPrice: 35000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["che khuc bach"], wiki: "Chè khúc bạch", emoji: "🍧" },
  { name: "Rau câu", nameEn: "Jelly Dessert", meal: ["latenight"], minPrice: 8000, maxPrice: 15000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["rau cau", "thach"], wiki: null, image: "https://live.staticflickr.com/462/19159916140_892e0fc0c9_b.jpg", emoji: "🍮" },
  { name: "Tàu hũ nước đường", nameEn: "Sweet Tofu Pudding", meal: ["latenight"], minPrice: 10000, maxPrice: 18000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["tau hu nuoc duong", "dau hu nuoc duong"], wiki: null, image: "https://live.staticflickr.com/4430/37196200632_7017e4082d_b.jpg", emoji: "🍮" },
  { name: "Bánh chuối nướng", nameEn: "Baked Banana Cake", meal: ["latenight"], minPrice: 12000, maxPrice: 22000, category: "trang-mieng", spicy: false, tags: ["Việt Nam"], keywords: ["banh chuoi nuong"], wiki: null, image: "https://live.staticflickr.com/4878/45647702202_ed577b13a4_b.jpg", emoji: "🍮" },

  // ===== ĐỒ UỐNG =====
  { name: "Sinh tố", nameEn: "Fruit Smoothie", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["sinh to", "smoothie"], wiki: null, image: "https://live.staticflickr.com/7046/6845327756_d8a77a49d4.jpg", emoji: "🥤" },
  { name: "Trà sữa", nameEn: "Milk Tea", meal: ["latenight"], minPrice: 25000, maxPrice: 45000, category: "do-uong", spicy: false, tags: ["Đài Loan"], keywords: ["tra sua", "milk tea"], wiki: "Trà sữa", emoji: "🧋" },
  { name: "Trà chanh", nameEn: "Iced Lemon Tea", meal: ["latenight"], minPrice: 10000, maxPrice: 20000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["tra chanh"], wiki: null, image: "https://live.staticflickr.com/4290/34606710944_dc57026556_b.jpg", emoji: "🍋" },
  { name: "Cà phê", nameEn: "Vietnamese Coffee", meal: ["breakfast"], minPrice: 15000, maxPrice: 30000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["ca phe", "coffee"], wiki: "Cà phê", emoji: "☕" },
  { name: "Nước mía", nameEn: "Sugarcane Juice", meal: ["breakfast", "lunch", "latenight"], minPrice: 10000, maxPrice: 18000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["nuoc mia"], wiki: "Nước mía", emoji: "🥤" },
  { name: "Nước dừa", nameEn: "Coconut Water", meal: ["breakfast", "lunch", "latenight"], minPrice: 15000, maxPrice: 25000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["nuoc dua"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dua-xiem-troc-ben-tre.jpg", emoji: "🥥" },
  { name: "Nước ép trái cây", nameEn: "Fresh Fruit Juice", meal: ["breakfast", "lunch"], minPrice: 20000, maxPrice: 35000, category: "do-uong", spicy: false, tags: ["Việt Nam", "Healthy"], keywords: ["nuoc ep"], wiki: null, image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/N%C6%B0%E1%BB%9Bc_%C3%A9p_d%C6%B0a_h%E1%BA%A5u_t%E1%BA%A1i_PizzaCompany_Nguy%E1%BB%85n_S%C6%A1n_ng%C3%A0y_31_th%C3%A1ng_3_n%C4%83m_2019_%282%29.jpg", emoji: "🧃" },
  { name: "Trà đào", nameEn: "Peach Tea", meal: ["latenight"], minPrice: 20000, maxPrice: 35000, category: "do-uong", spicy: false, tags: ["Việt Nam"], keywords: ["tra dao"], wiki: null, image: "https://live.staticflickr.com/3745/20002894698_0fd02c63fa_b.jpg", emoji: "🍑" },

  // ===== QUỐC TẾ KHÁC =====
  { name: "Mì Ý", nameEn: "Spaghetti", meal: ["lunch", "dinner"], minPrice: 55000, maxPrice: 100000, category: "quoc-te", spicy: false, tags: ["Ý"], keywords: ["pasta", "spaghetti", "y"], wiki: "Mì Ý", emoji: "🍝" },
  { name: "Cà ri", nameEn: "Curry", meal: ["lunch", "dinner"], minPrice: 45000, maxPrice: 80000, category: "quoc-te", spicy: false, tags: ["Ấn Độ", "Thái Lan"], keywords: ["ca ri", "curry"], wiki: "Cà ri", emoji: "🍛" },
  { name: "Taco", nameEn: "Taco", meal: ["lunch", "dinner"], minPrice: 40000, maxPrice: 70000, category: "quoc-te", spicy: false, tags: ["Mexico"], keywords: ["taco"], wiki: "Taco", emoji: "🌮" },
];

const FOOD_NO_ANNOTATE = new Set(["Pizza", "Sushi", "Burger", "Tokbokki", "Kimbap", "Taco", "Dimsum"]);

function displayFoodName(food) {
  if (state.lang !== "en") return food.name;
  if (FOOD_NO_ANNOTATE.has(food.name)) return food.nameEn;
  return `${food.nameEn} (${food.name})`;
}

function displayFoodNameByCanonical(canonicalName) {
  const food = FOODS.find((f) => f.name === canonicalName);
  return food ? displayFoodName(food) : canonicalName;
}

const CATEGORY_LABELS = {
  vi: {
    nuoc: "🍜 Phở/Bún/Mì",
    com: "🍚 Cơm",
    banh: "🥟 Bánh",
    nuong: "🍖 Thịt/BBQ",
    ga: "🍗 Gà",
    lau: "🍲 Lẩu",
    "hai-san": "🦐 Hải sản",
    "an-vat": "🌯 Ăn vặt",
    chien: "🍗 Chiên/Rán",
    "fast-food": "🍟 Fast food",
    pizza: "🍕 Pizza",
    burger: "🍔 Burger",
    nhat: "🍣 Nhật",
    han: "🇰🇷 Hàn",
    "trung-dai": "🥟 Trung/Đài",
    healthy: "🥗 Healthy",
    "trang-mieng": "🍧 Dessert",
    "do-uong": "🧋 Đồ uống",
    "quoc-te": "🌍 Quốc tế khác"
  },
  en: {
    nuoc: "🍜 Noodles & Pho",
    com: "🍚 Rice",
    banh: "🥟 Bánh (cakes/rolls)",
    nuong: "🍖 Grilled/BBQ",
    ga: "🍗 Chicken",
    lau: "🍲 Hot pot",
    "hai-san": "🦐 Seafood",
    "an-vat": "🌯 Street snacks",
    chien: "🍗 Fried",
    "fast-food": "🍟 Fast food",
    pizza: "🍕 Pizza",
    burger: "🍔 Burger",
    nhat: "🍣 Japanese",
    han: "🇰🇷 Korean",
    "trung-dai": "🥟 Chinese/Taiwanese",
    healthy: "🥗 Healthy",
    "trang-mieng": "🍧 Dessert",
    "do-uong": "🧋 Drinks",
    "quoc-te": "🌍 Other international"
  }
};

const MEAL_LABELS = {
  vi: { breakfast: "Sáng", lunch: "Trưa", dinner: "Tối", latenight: "Khuya" },
  en: { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", latenight: "Late night" }
};
const MEAL_ICONS = { breakfast: "☀️", lunch: "🌤️", dinner: "🌙", latenight: "🌃" };
/* Ngân sách: so khoảng [minPrice,maxPrice] của món với khoảng của bucket, món khớp
   nếu 2 khoảng CHỒNG LÊN NHAU (không cần khớp tuyệt đối) — vd món 35k-45k vẫn khớp
   cả bucket "≤40k" lẫn "40k-70k". Thay cho hệ 3 tier (re/vua/sang) cũ, thô hơn nhiều. */
const BUDGET_BUCKETS = {
  any: { min: 0, max: Infinity },
  le40: { min: 0, max: 40000 },
  b40_70: { min: 40000, max: 70000 },
  b70_100: { min: 70000, max: 100000 },
  gt100: { min: 100000, max: Infinity }
};
function matchesBudget(food, bucketKey) {
  if (bucketKey === "any") return true;
  const b = BUDGET_BUCKETS[bucketKey];
  if (!b) return true;
  return food.minPrice <= b.max && food.maxPrice >= b.min;
}
function formatVND(n) {
  return n.toLocaleString("vi-VN");
}
function formatPriceRange(food) {
  if (food.minPrice === food.maxPrice) return `${formatVND(food.minPrice)}đ`;
  return `${formatVND(food.minPrice)} – ${formatVND(food.maxPrice)}đ`;
}
const PRICE_LABELS = {
  vi: { any: "Bất kỳ", le40: "≤40k", b40_70: "40k–70k", b70_100: "70k–100k", gt100: ">100k" },
  en: { any: "Any", le40: "≤40k", b40_70: "40k–70k", b70_100: "70k–100k", gt100: ">100k" }
};
const RADIUS_LABELS = { 500: "500 m", 1000: "1 km", 2000: "2 km", 5000: "5 km" };

/* ---------- i18n ---------- */

const LANG_KEY = "hnag_lang_v1";

const STRINGS = {
  vi: {
    appTitle: "Hôm nay ăn gì?",
    subtitle: "Gợi ý món ăn quanh bạn",
    locationHeading: "Vị trí",
    changeBtn: "Đổi",
    useLocationBtn: "📍 Dùng vị trí hiện tại",
    pickRegionBtn: "🗺️ Chọn khu vực",
    preferencesHeading: "Sở thích",
    optionalHint: "(tuỳ chọn)",
    mealLabel: "Bữa ăn",
    mealAuto: "Tự động",
    mealBreakfast: "Sáng",
    mealLunch: "Trưa",
    mealDinner: "Tối",
    mealLatenight: "Khuya",
    budgetLabel: "Ngân sách",
    priceAny: "Bất kỳ",
    priceLe40: "≤40k",
    priceB4070: "40k–70k",
    priceB70100: "70k–100k",
    priceGt100: ">100k",
    sortLabel: "Sắp xếp",
    sortRelevant: "⭐ Phù hợp nhất",
    sortPriceAsc: "💰 Giá thấp → cao",
    sortPriceDesc: "💰 Giá cao → thấp",
    browseListBtn: "📋 Xem danh sách món",
    hideListBtn: "📋 Ẩn danh sách món",
    randomFavBtn: "🎲 Random từ món yêu thích",
    noFavYet: "Chưa có món yêu thích nào — bấm 🤍 trên thẻ món để thêm.",
    eatAgainBtn: "Ăn lại món này",
    referencePriceNote: "Giá tham khảo, có thể khác theo từng quán",
    aboutPrefix: "khoảng",
    categoryLabel: "Loại món",
    categoryHint: "(chọn nhiều được)",
    spicyOnly: "🌶️ Chỉ món cay",
    spicyTag: "🌶️ Cay",
    favoritesLabel: "❤️ Món yêu thích",
    pickHint: "Bấm nút bên dưới để bắt đầu",
    rerollBtn: "🎲 Gợi ý món khác",
    historyHeading: "Lịch sử món ăn",
    resultsHeading: "Quán gần bạn",
    viewList: "Danh sách",
    viewMap: "Bản đồ",
    showAllBtn: "Xem tất cả quán ăn gần đây (chưa lọc theo món) →",
    ratingNote: '⭐ Xếp hạng & đánh giá đầy đủ có thể xem trên Google Maps khi bấm "Chỉ đường".',
    footerNote: "Dữ liệu địa điểm từ OpenStreetMap · ảnh từ Wikipedia · danh sách hành chính từ provinces.open-api.vn — miễn phí, không cần API key. Tên tỉnh/quận/phường vẫn giữ nguyên tiếng Việt (nguồn dữ liệu chưa có bản tiếng Anh).",
    chooseAreaHeading: "Chọn khu vực",
    provincePlaceholder: "Tỉnh/Thành phố…",
    districtPlaceholder: "Quận/Huyện…",
    wardPlaceholder: "Phường/Xã…",
    provinceLoadError: "Không tải được danh sách",
    orEnterAddress: "hoặc nhập địa chỉ cụ thể",
    addressPlaceholder: "VD: 123 Nguyễn Huệ, Quận 1",
    applyRegionBtn: "Áp dụng vị trí",
    likeThis: "Thích món này",
    dontShowAgain: "Không gợi ý món này nữa",
    suggestBtn: "🎲 Chọn món cho tôi",
    confirmBtn: "✅ Chọn món này",
    thinking: "Đang nghĩ...",
    geoNotSupported: "Trình duyệt không hỗ trợ định vị.",
    gettingLocation: "Đang lấy vị trí...",
    geoFailed: 'Không lấy được vị trí. Hãy thử "Chọn khu vực" thay thế.',
    currentLocationFallback: "Vị trí hiện tại",
    resolvingArea: "Đang xác định vị trí khu vực...",
    areaLookupFailedRetry: "Không tra được vị trí khu vực, thử lại sau.",
    locationFirstHint: 'Hãy chọn vị trí ở thẻ "Vị trí" phía trên trước.',
    findingNearby: "Đang tìm quán gần bạn...",
    nearbyLoadError: "Không tải được dữ liệu quán ăn (server OpenStreetMap có thể đang bận). Thử lại sau ít phút.",
    directions: "Chỉ đường",
    viewOnGoogleMaps: "Xem Google Maps",
    matchBadge: "Có thể có món này",
    open247: "Mở 24/7",
    closedNow: "Đã đóng cửa",
    today: "Hôm nay",
    yesterday: "Hôm qua",
    restoreAll: "Khôi phục tất cả",
    unnamedPlace: "Quán chưa đặt tên",
    yourLocation: "Vị trí của bạn",
    close: "Đóng"
  },
  en: {
    appTitle: "What to Eat Today?",
    subtitle: "Food suggestions near you",
    locationHeading: "Location",
    changeBtn: "Change",
    useLocationBtn: "📍 Use current location",
    pickRegionBtn: "🗺️ Choose area",
    preferencesHeading: "Preferences",
    optionalHint: "(optional)",
    mealLabel: "Meal",
    mealAuto: "Auto",
    mealBreakfast: "Breakfast",
    mealLunch: "Lunch",
    mealDinner: "Dinner",
    mealLatenight: "Late night",
    budgetLabel: "Budget",
    priceAny: "Any",
    priceLe40: "≤40k",
    priceB4070: "40k–70k",
    priceB70100: "70k–100k",
    priceGt100: ">100k",
    sortLabel: "Sort",
    sortRelevant: "⭐ Best match",
    sortPriceAsc: "💰 Price low → high",
    sortPriceDesc: "💰 Price high → low",
    browseListBtn: "📋 Browse dish list",
    hideListBtn: "📋 Hide dish list",
    randomFavBtn: "🎲 Random from favorites",
    noFavYet: "No favorites yet — tap 🤍 on a dish card to add one.",
    eatAgainBtn: "Eat this again",
    referencePriceNote: "Reference price, may vary by restaurant",
    aboutPrefix: "about",
    categoryLabel: "Category",
    categoryHint: "(pick multiple)",
    spicyOnly: "🌶️ Spicy only",
    spicyTag: "🌶️ Spicy",
    favoritesLabel: "❤️ Your favorites",
    pickHint: "Tap the button below to get started",
    rerollBtn: "🎲 Suggest another",
    historyHeading: "Food history",
    resultsHeading: "Places near you",
    viewList: "List",
    viewMap: "Map",
    showAllBtn: "Show all nearby places (unfiltered) →",
    ratingNote: '⭐ Full ratings & reviews are available on Google Maps via "Directions".',
    footerNote: "Location data from OpenStreetMap · photos from Wikipedia · administrative list from provinces.open-api.vn — all free, no API key needed. Province/district/ward names stay in Vietnamese (the data source has no English version).",
    chooseAreaHeading: "Choose area",
    provincePlaceholder: "Province/City…",
    districtPlaceholder: "District…",
    wardPlaceholder: "Ward…",
    provinceLoadError: "Couldn't load the list",
    orEnterAddress: "or enter a specific address",
    addressPlaceholder: "e.g. 123 Nguyen Hue St, District 1",
    applyRegionBtn: "Apply location",
    likeThis: "Like this",
    dontShowAgain: "Don't suggest this again",
    suggestBtn: "🎲 Pick something for me",
    confirmBtn: "✅ Choose this",
    thinking: "Thinking...",
    geoNotSupported: "Your browser doesn't support geolocation.",
    gettingLocation: "Getting your location...",
    geoFailed: 'Couldn\'t get your location. Try "Choose area" instead.',
    currentLocationFallback: "Current location",
    resolvingArea: "Resolving area location...",
    areaLookupFailedRetry: "Couldn't resolve that area, try again later.",
    locationFirstHint: 'Please set your location in the "Location" card above first.',
    findingNearby: "Finding places near you...",
    nearbyLoadError: "Couldn't load nearby places (OpenStreetMap's server may be busy). Try again in a bit.",
    directions: "Directions",
    viewOnGoogleMaps: "View on Google Maps",
    matchBadge: "May serve this dish",
    open247: "Open 24/7",
    closedNow: "Closed now",
    today: "Today",
    yesterday: "Yesterday",
    restoreAll: "Restore all",
    unnamedPlace: "Unnamed place",
    yourLocation: "Your location",
    close: "Close"
  }
};

const STRINGS_FN = {
  vi: {
    daysAgo: (n) => `${n} ngày trước`,
    filterCategoryEmpty: () => "không còn món nào thuộc Loại món đã chọn (có thể do bạn đã ẩn hết) nên đã bỏ bộ lọc này",
    filterSpicyEmpty: () => 'không có món cay trong nhóm đã chọn nên đã bỏ "Chỉ món cay"',
    filterMealEmpty: (mealLabel) => `không có món hợp bữa "${mealLabel}" trong nhóm đã chọn nên đã bỏ bộ lọc bữa ăn`,
    filterPriceRelaxMeal: (priceLabel) => `không có món ở mức "${priceLabel}" hợp bữa đã chọn nên đã bỏ bộ lọc bữa ăn để giữ đúng mức giá`,
    filterPriceEmpty: (priceLabel) => `không có món ở mức "${priceLabel}" trong nhóm đã chọn nên đã bỏ bộ lọc ngân sách`,
    pickNotePrefix: (note) => `ℹ️ ${note[0].toUpperCase()}${note.slice(1)}.`,
    blacklistCount: (n) => `Đã ẩn ${n} món · `,
    resultsTitleFor: (name) => `Quán bán ${name} gần bạn`,
    findNearbyBtn: (name) => `🔍 Xem quán ${name} gần bạn`,
    foundMatched: (n, name, radiusLabel) => `Tìm thấy ${n} quán có thể bán "${name}" trong bán kính ${radiusLabel}.`,
    noneMatched: (name, radiusLabel) => `Không tìm thấy quán "${name}" phù hợp trong bán kính ${radiusLabel}. Thử tăng bán kính ở thẻ "Vị trí", hoặc đổi món khác.`,
    openUntil: (hhmm) => `Đang mở · đóng lúc ${hhmm}`,
    locationSummary: (label, radiusLabel) => `📍 ${label} · ${radiusLabel}`,
    notFoundArea: (query) => `Không tìm thấy toạ độ cho "${query}". Thử khu vực khác hoặc nhập địa chỉ cụ thể.`,
    dishCount: (n) => (n === 0 ? "Không có món nào khớp bộ lọc hiện tại." : `${n} món khớp bộ lọc hiện tại.`)
  },
  en: {
    daysAgo: (n) => `${n} days ago`,
    filterCategoryEmpty: () => "nothing left in the category you picked (maybe you've hidden them all), so that filter was dropped",
    filterSpicyEmpty: () => 'no spicy dish in this group, so "Spicy only" was dropped',
    filterMealEmpty: (mealLabel) => `no dish fits "${mealLabel}" in this group, so the meal filter was dropped`,
    filterPriceRelaxMeal: (priceLabel) => `no dish at "${priceLabel}" fits the chosen meal, so the meal filter was dropped to keep the right price`,
    filterPriceEmpty: (priceLabel) => `no dish at "${priceLabel}" in this group, so the budget filter was dropped`,
    pickNotePrefix: (note) => `ℹ️ ${note[0].toUpperCase()}${note.slice(1)}.`,
    blacklistCount: (n) => `${n} dish${n === 1 ? "" : "es"} hidden · `,
    resultsTitleFor: (name) => `Places serving ${name} near you`,
    findNearbyBtn: (name) => `🔍 Find ${name} near you`,
    foundMatched: (n, name, radiusLabel) => `Found ${n} place${n === 1 ? "" : "s"} that may serve "${name}" within ${radiusLabel}.`,
    noneMatched: (name, radiusLabel) => `No place serving "${name}" found within ${radiusLabel}. Try a wider radius in "Location", or pick another dish.`,
    openUntil: (hhmm) => `Open now · closes ${hhmm}`,
    locationSummary: (label, radiusLabel) => `📍 ${label} · ${radiusLabel}`,
    notFoundArea: (query) => `Couldn't find coordinates for "${query}". Try another area or enter a specific address.`,
    dishCount: (n) => (n === 0 ? "No dish matches the current filters." : `${n} dish${n === 1 ? "" : "es"} match the current filters.`)
  }
};

const PLACES_CACHE_KEY = "hnag_cache_v1";
const PLACES_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const IMG_CACHE_KEY = "hnag_img_cache_v1";
const IMG_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const FAVORITES_KEY = "hnag_favorites_v1";
const BLACKLIST_KEY = "hnag_blacklist_v1";
const HISTORY_KEY = "hnag_history_v1";
const SESSION_KEY = "hnag_session_v1";

const state = {
  lat: null,
  lon: null,
  locationLabel: null,
  radius: 1000,
  meal: "auto",
  price: "any",
  categories: new Set(),
  spicyOnly: false,
  sort: "relevant",
  recentShown: [],
  currentFood: null,
  confirmed: false,
  province: null,
  district: null,
  hasFallback: false,
  matchedPlaces: [],
  otherPlaces: [],
  fallbackShown: false,
  lang: loadJSON(LANG_KEY, "vi")
};

function t(key) {
  const val = STRINGS[state.lang][key];
  if (val !== undefined) return val;
  // Thiếu key dịch — fallback về tiếng Việt (hoặc chính key) thay vì render trống trơn.
  return STRINGS.vi[key] !== undefined ? STRINGS.vi[key] : key;
}

function tf(key, ...args) {
  return STRINGS_FN[state.lang][key](...args);
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.title = t("appTitle");

  document.querySelectorAll("[data-i18n]").forEach((elm) => {
    elm.textContent = t(elm.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((elm) => {
    elm.placeholder = t(elm.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((elm) => {
    elm.title = t(elm.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((elm) => {
    elm.setAttribute("aria-label", t(elm.dataset.i18nAria));
  });
  el.langToggle.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === state.lang));

  renderCategoryChips();
  renderFavoritesChips();
  renderBlacklistNote();
  renderHistory();
  updateBottomBar();
  updateLocationSummary();
  refreshFoodCardText();
  el.toggleListBtn.textContent = el.dishListPanel.hidden ? t("browseListBtn") : t("hideListBtn");
  if (!el.dishListPanel.hidden) renderDishList();
}

const el = {
  langToggle: document.getElementById("langToggle"),
  addressInput: document.getElementById("addressInput"),
  useLocationBtn: document.getElementById("useLocationBtn"),
  pickRegionModeBtn: document.getElementById("pickRegionModeBtn"),
  regionSheetBackdrop: document.getElementById("regionSheetBackdrop"),
  regionSheet: document.getElementById("regionSheet"),
  closeRegionSheetBtn: document.getElementById("closeRegionSheetBtn"),
  addressSuggestions: document.getElementById("addressSuggestions"),
  addressStatus: document.getElementById("addressStatus"),
  provinceSelect: document.getElementById("provinceSelect"),
  districtSelect: document.getElementById("districtSelect"),
  wardSelect: document.getElementById("wardSelect"),
  applyRegionBtn: document.getElementById("applyRegionBtn"),
  locationPicker: document.getElementById("locationPicker"),
  locationSummary: document.getElementById("locationSummary"),
  locationSummaryText: document.getElementById("locationSummaryText"),
  changeLocationBtn: document.getElementById("changeLocationBtn"),
  radiusChips: document.getElementById("radiusChips"),
  mealChips: document.getElementById("mealChips"),
  priceChips: document.getElementById("priceChips"),
  categoryChips: document.getElementById("categoryChips"),
  spicyChip: document.getElementById("spicyChip"),
  favoritesRow: document.getElementById("favoritesRow"),
  favoritesChips: document.getElementById("favoritesChips"),
  randomFavBtn: document.getElementById("randomFavBtn"),
  toggleListBtn: document.getElementById("toggleListBtn"),
  dishListPanel: document.getElementById("dishListPanel"),
  sortChips: document.getElementById("sortChips"),
  dishListStatus: document.getElementById("dishListStatus"),
  dishList: document.getElementById("dishList"),
  blacklistNote: document.getElementById("blacklistNote"),
  pickCenter: document.getElementById("pickCenter"),
  bottomBarBtn: document.getElementById("bottomBarBtn"),
  foodResult: document.getElementById("foodResult"),
  foodCard: document.getElementById("foodCard"),
  foodCategory: document.getElementById("foodCategory"),
  foodName: document.getElementById("foodName"),
  foodPrice: document.getElementById("foodPrice"),
  foodTags: document.getElementById("foodTags"),
  pickNote: document.getElementById("pickNote"),
  favBtn: document.getElementById("favBtn"),
  banBtn: document.getElementById("banBtn"),
  rerollBtn: document.getElementById("rerollBtn"),
  historySection: document.getElementById("historySection"),
  historyList: document.getElementById("historyList"),
  resultsSection: document.getElementById("resultsSection"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsStatus: document.getElementById("resultsStatus"),
  resultsList: document.getElementById("resultsList"),
  mapView: document.getElementById("mapView"),
  viewToggle: document.getElementById("viewToggle"),
  fallbackWrap: document.getElementById("fallbackWrap"),
  showAllBtn: document.getElementById("showAllBtn"),
  fallbackList: document.getElementById("fallbackList")
};

function normalizeVN(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d");
}

function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    /* localStorage có thể bị chặn — bỏ qua */
  }
}

/* ---------- Favorites / blacklist / history ---------- */

function renderFavoritesChips() {
  const favs = loadJSON(FAVORITES_KEY, []);
  el.favoritesRow.hidden = favs.length === 0;
  el.favoritesChips.innerHTML = favs
    .map((name) => `<button class="chip" data-name="${name}">${displayFoodNameByCanonical(name)}</button>`)
    .join("");
  el.favoritesChips.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const food = FOODS.find((f) => f.name === btn.dataset.name);
      if (food) renderFoodCard(food);
    });
  });
}

el.randomFavBtn.addEventListener("click", () => {
  const favs = loadJSON(FAVORITES_KEY, []);
  const candidates = favs.map((name) => FOODS.find((f) => f.name === name)).filter(Boolean);
  if (candidates.length === 0) return;
  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  renderFoodCard(chosen);
  el.foodResult.scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderBlacklistNote() {
  const bl = loadJSON(BLACKLIST_KEY, []);
  if (bl.length === 0) {
    el.blacklistNote.hidden = true;
    return;
  }
  el.blacklistNote.hidden = false;
  el.blacklistNote.innerHTML = `${tf("blacklistCount", bl.length)}<button class="link-btn" id="restoreBlacklistBtn">${t("restoreAll")}</button>`;
  document.getElementById("restoreBlacklistBtn").addEventListener("click", () => {
    saveJSON(BLACKLIST_KEY, []);
    renderBlacklistNote();
  });
}

function dayLabel(ts) {
  const d = new Date(ts);
  const now = new Date();
  const startOf = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
  const diffDays = Math.round((startOf(now) - startOf(d)) / (24 * 60 * 60 * 1000));
  if (diffDays === 0) return t("today");
  if (diffDays === 1) return t("yesterday");
  if (diffDays > 1) return tf("daysAgo", diffDays);
  return d.toLocaleDateString(state.lang === "en" ? "en-US" : "vi-VN");
}

function renderHistory() {
  const history = loadJSON(HISTORY_KEY, []);
  el.historySection.hidden = history.length === 0;
  const favs = loadJSON(FAVORITES_KEY, []);
  el.historyList.innerHTML = history
    .slice(-8)
    .reverse()
    .map((h) => {
      const food = FOODS.find((f) => f.name === h.name);
      const priceText = food ? `💰 ${formatPriceRange(food)}` : "";
      const heart = favs.includes(h.name) ? " ❤️" : "";
      return `
        <li class="history-item">
          <div class="history-info">
            <span class="history-date">${dayLabel(h.ts)}</span>
            <strong class="history-name">${displayFoodNameByCanonical(h.name)}${heart}</strong>
            <span class="history-price">${priceText}</span>
          </div>
          ${food ? `<button class="link-btn history-again-btn" data-name="${h.name}">${t("eatAgainBtn")}</button>` : ""}
        </li>
      `;
    })
    .join("");
  el.historyList.querySelectorAll(".history-again-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const food = FOODS.find((f) => f.name === btn.dataset.name);
      if (food) {
        renderFoodCard(food);
        el.foodResult.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function logHistory(name) {
  const history = loadJSON(HISTORY_KEY, []);
  history.push({ name, ts: Date.now() });
  saveJSON(HISTORY_KEY, history.slice(-30));
  renderHistory();
}

/* ---------- Category / chip wiring ---------- */

function renderCategoryChips() {
  el.categoryChips.innerHTML = Object.entries(CATEGORY_LABELS[state.lang])
    .map(([key, label]) => `<button class="chip${state.categories.has(key) ? " is-active" : ""}" data-value="${key}">${label}</button>`)
    .join("");
  el.categoryChips.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
      if (btn.classList.contains("is-active")) state.categories.add(btn.dataset.value);
      else state.categories.delete(btn.dataset.value);
      updateFilterFeasibility();
      saveSession();
    });
  });
}
renderCategoryChips();

/* Pool sau khi áp Loại món + Cay (2 bộ lọc "chủ động" — xem pickFood) — dùng để biết
   trước lựa chọn Bữa ăn/Ngân sách nào là bất khả thi, thay vì để chọn xong mới báo. */
function getHardPool() {
  const blacklist = loadJSON(BLACKLIST_KEY, []);
  let pool = FOODS.filter((f) => !blacklist.includes(f.name));
  if (state.categories.size > 0) {
    const withCat = pool.filter((f) => state.categories.has(f.category));
    if (withCat.length > 0) pool = withCat;
  }
  if (state.spicyOnly) {
    const withSpicy = pool.filter((f) => f.spicy);
    if (withSpicy.length > 0) pool = withSpicy;
  }
  return pool;
}

/* Làm mờ + khoá trước các lựa chọn Bữa ăn/Ngân sách không có món nào khớp với Loại
   món/Cay hiện tại — vd chọn "Nướng/BBQ" thì "Trên 100k" nên bị khoá luôn (không có
   món nướng nào giá đó) thay vì cho chọn xong mới báo "đã bỏ bộ lọc". Nếu lựa chọn
   đang active bị vô hiệu sau khi đổi Loại món/Cay, tự trả về mặc định "Bất kỳ/Tự động". */
function updateFilterFeasibility() {
  const hardPool = getHardPool();

  el.mealChips.querySelectorAll(".chip").forEach((btn) => {
    const value = btn.dataset.value;
    const feasible = value === "auto" || hardPool.some((f) => f.meal.includes(value));
    btn.disabled = !feasible;
    btn.classList.toggle("chip-disabled", !feasible);
  });
  if (state.meal !== "auto" && !hardPool.some((f) => f.meal.includes(state.meal))) {
    state.meal = "auto";
    setActiveChip(el.mealChips, "auto");
  }

  el.priceChips.querySelectorAll(".chip").forEach((btn) => {
    const value = btn.dataset.value;
    const feasible = hardPool.some((f) => matchesBudget(f, value));
    btn.disabled = !feasible;
    btn.classList.toggle("chip-disabled", !feasible);
  });
  if (state.price !== "any" && !hardPool.some((f) => matchesBudget(f, state.price))) {
    state.price = "any";
    setActiveChip(el.priceChips, "any");
  }

  if (!el.dishListPanel.hidden) renderDishList();
}

/* Danh sách món duyệt được (mục 4-5 yêu cầu nâng cấp): lọc theo đúng bộ lọc hiện tại
   (Loại món + Cay là hard, Bữa ăn/Ngân sách áp thẳng không cần nới vì đây là xem
   danh sách chứ không phải random 1 kết quả duy nhất), sắp xếp theo lựa chọn. */
function getDishListPool() {
  let pool = getHardPool();
  if (state.meal !== "auto") pool = pool.filter((f) => f.meal.includes(state.meal));
  if (state.price !== "any") pool = pool.filter((f) => matchesBudget(f, state.price));
  return pool;
}

function renderDishList() {
  let pool = getDishListPool();

  if (state.sort === "price-asc") {
    pool = [...pool].sort((a, b) => (a.minPrice + a.maxPrice) - (b.minPrice + b.maxPrice));
  } else if (state.sort === "price-desc") {
    pool = [...pool].sort((a, b) => (b.minPrice + b.maxPrice) - (a.minPrice + a.maxPrice));
  }

  el.dishListStatus.textContent = tf("dishCount", pool.length);
  el.dishList.innerHTML = pool
    .map(
      (f) => `
        <li>
          <button class="dish-list-item" data-name="${f.name}">
            <span class="dish-list-emoji">${f.emoji}</span>
            <span class="dish-list-info">
              <span class="dish-list-name">${displayFoodName(f)}</span>
              <span class="dish-list-meta">${CATEGORY_LABELS[state.lang][f.category] || f.category}</span>
            </span>
            <span class="dish-list-price">${formatPriceRange(f)}</span>
          </button>
        </li>
      `
    )
    .join("");

  el.dishList.querySelectorAll(".dish-list-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const food = FOODS.find((f) => f.name === btn.dataset.name);
      if (food) {
        renderFoodCard(food);
        el.foodResult.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

el.toggleListBtn.addEventListener("click", () => {
  const willShow = el.dishListPanel.hidden;
  el.dishListPanel.hidden = !willShow;
  el.toggleListBtn.textContent = willShow ? t("hideListBtn") : t("browseListBtn");
  if (willShow) renderDishList();
});

wireSingleChipGroup(el.sortChips, (value) => {
  state.sort = value;
  renderDishList();
});

function wireSingleChipGroup(container, onChange) {
  container.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".chip").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      container.dataset.value = btn.dataset.value;
      onChange(btn.dataset.value);
    });
  });
}

function setActiveChip(container, value) {
  container.querySelectorAll(".chip").forEach((b) => b.classList.toggle("is-active", b.dataset.value === value));
  container.dataset.value = value;
}

wireSingleChipGroup(el.radiusChips, (value) => {
  state.radius = parseInt(value, 10);
  updateLocationSummary();
  saveSession();
});

wireSingleChipGroup(el.mealChips, (value) => {
  state.meal = value;
  saveSession();
});

wireSingleChipGroup(el.priceChips, (value) => {
  state.price = value;
  saveSession();
});

el.spicyChip.addEventListener("click", () => {
  state.spicyOnly = !state.spicyOnly;
  el.spicyChip.classList.toggle("is-active", state.spicyOnly);
  updateFilterFeasibility();
  saveSession();
});

/* ---------- Food picking ---------- */

function getEffectiveMealTime() {
  if (state.meal !== "auto") return state.meal;
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 10) return "breakfast";
  if (hour >= 10 && hour < 14) return "lunch";
  if (hour >= 17 && hour < 22) return "dinner";
  return "latenight";
}

function pickFood() {
  const meal = getEffectiveMealTime();
  const blacklist = loadJSON(BLACKLIST_KEY, []);
  const notes = [];

  // Loại món + Cay là lựa chọn chủ động (chọn tay, không có mặc định "bất kỳ" ngầm) nên
  // luôn tôn trọng trước — không âm thầm bỏ qua để nhồi vào món khác nhóm.
  let hardPool = FOODS.filter((f) => !blacklist.includes(f.name));

  if (state.categories.size > 0) {
    const withCat = hardPool.filter((f) => state.categories.has(f.category));
    if (withCat.length > 0) {
      hardPool = withCat;
    } else {
      notes.push(tf("filterCategoryEmpty"));
    }
  }

  if (state.spicyOnly) {
    const withSpicy = hardPool.filter((f) => f.spicy);
    if (withSpicy.length > 0) {
      hardPool = withSpicy;
    } else {
      notes.push(tf("filterSpicyEmpty"));
    }
  }

  // Bữa ăn + Ngân sách là bộ lọc "mềm" hơn — được nới trước nếu xung đột với Loại món/Cay.
  let pool = hardPool.filter((f) => f.meal.includes(meal));
  if (pool.length === 0) {
    pool = hardPool;
    notes.push(tf("filterMealEmpty", MEAL_LABELS[state.lang][meal]));
  }

  if (state.price !== "any") {
    const withPrice = pool.filter((f) => matchesBudget(f, state.price));
    if (withPrice.length > 0) {
      pool = withPrice;
    } else {
      const priceOnHardPool = hardPool.filter((f) => matchesBudget(f, state.price));
      if (priceOnHardPool.length > 0) {
        pool = priceOnHardPool;
        notes.push(tf("filterPriceRelaxMeal", PRICE_LABELS[state.lang][state.price]));
      } else {
        notes.push(tf("filterPriceEmpty", PRICE_LABELS[state.lang][state.price]));
      }
    }
  }

  if (pool.length === 0) pool = hardPool.length > 0 ? hardPool : FOODS.filter((f) => !blacklist.includes(f.name));
  if (pool.length === 0) pool = FOODS;

  let candidates = pool.filter((f) => !state.recentShown.includes(f.name));
  if (candidates.length === 0) candidates = pool;

  const history = loadJSON(HISTORY_KEY, []);
  const cutoff = Date.now() - 2 * 24 * 60 * 60 * 1000;
  const recentlyEaten = new Set(history.filter((h) => h.ts >= cutoff).map((h) => h.name));
  const fresh = candidates.filter((f) => !recentlyEaten.has(f.name));
  const finalPool = fresh.length > 0 ? fresh : candidates;

  const chosen = finalPool[Math.floor(Math.random() * finalPool.length)];
  state.recentShown.push(chosen.name);
  if (state.recentShown.length > 5) state.recentShown.shift();
  return { food: chosen, note: notes.length ? notes.join("; ") : null };
}

/* ---------- Food image ---------- */

function readImgCache(title) {
  const raw = loadJSON(IMG_CACHE_KEY, {});
  const entry = raw[title];
  if (entry && Date.now() - entry.timestamp < IMG_CACHE_TTL_MS) return entry.url;
  return undefined;
}

function writeImgCache(title, url) {
  const raw = loadJSON(IMG_CACHE_KEY, {});
  raw[title] = { timestamp: Date.now(), url };
  saveJSON(IMG_CACHE_KEY, raw);
}

async function fetchFoodImage(food) {
  if (food.image) return food.image;
  if (!food.wiki) return null;
  const cached = readImgCache(food.wiki);
  if (cached !== undefined) return cached;
  try {
    const url = `https://vi.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(food.wiki)}&prop=pageimages&format=json&pithumbsize=500&redirects=1&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];
    const imgUrl = page?.thumbnail?.source || null;
    writeImgCache(food.wiki, imgUrl);
    return imgUrl;
  } catch (err) {
    return null;
  }
}

/* ---------- Food card rendering ---------- */

function isFavorite(name) {
  return loadJSON(FAVORITES_KEY, []).includes(name);
}

/* Dùng chung cho renderFoodCard (chọn món MỚI) và refreshFoodCardText (chỉ đổi ngôn
   ngữ, giữ nguyên trạng thái đã xác nhận) — tránh viết trùng 2 nơi dễ lệch nhau.
   Hiện TẤT CẢ các bữa món này hợp (không chỉ bữa hiện tại) để không bao giờ gắn
   nhãn sai như bug "món sáng nhưng hiện Tối" đã từng gặp. */
function renderFoodCardContent(food) {
  el.foodCategory.textContent = `${CATEGORY_LABELS[state.lang][food.category] || food.category}${food.tags && food.tags[0] ? " · " + food.tags[0] : ""}`;
  el.foodName.textContent = displayFoodName(food);
  el.foodPrice.textContent = `💰 ${formatPriceRange(food)}`;
  el.foodTags.innerHTML =
    food.meal.map((m) => `<span class="tag">${MEAL_ICONS[m]} ${MEAL_LABELS[state.lang][m]}</span>`).join("") +
    (food.spicy ? `<span class="tag">${t("spicyTag")}</span>` : "");
  el.favBtn.textContent = isFavorite(food.name) ? "❤️" : "🤍";
  el.favBtn.classList.toggle("is-active", isFavorite(food.name));
}

/* Cập nhật lại chữ trên card món đang hiện (khi đổi ngôn ngữ) mà KHÔNG reset trạng thái
   đã xác nhận/đã pick ảnh — khác với renderFoodCard vốn dùng cho việc CHỌN một món mới. */
function refreshFoodCardText() {
  const food = state.currentFood;
  if (!food) return;
  renderFoodCardContent(food);
}

function renderFoodCard(food, note) {
  state.currentFood = food;
  state.confirmed = false;

  el.pickCenter.hidden = true;
  el.foodResult.hidden = false;

  renderFoodCardContent(food);
  el.pickNote.hidden = !note;
  el.pickNote.textContent = note ? tf("pickNotePrefix", note) : "";

  const wrap = el.foodCard.querySelector(".food-image-wrap");
  wrap.innerHTML = food.emoji;
  fetchFoodImage(food).then((url) => {
    if (state.currentFood !== food || !url) return;
    wrap.innerHTML = `<img src="${url}" alt="${displayFoodName(food)}" loading="lazy" />`;
  });

  updateBottomBar();
}

function showThinkingThenPick() {
  el.pickCenter.hidden = true;
  el.foodResult.hidden = false;
  el.foodCard.querySelector(".food-image-wrap").innerHTML =
    `<span class="thinking"><span class="spinner"></span>${t("thinking")}</span>`;
  el.foodCategory.textContent = "";
  el.foodName.textContent = "";
  el.foodPrice.textContent = "";
  el.foodTags.innerHTML = "";
  el.pickNote.hidden = true;
  state.currentFood = null;
  el.bottomBarBtn.disabled = true;
  setTimeout(() => {
    const { food, note } = pickFood();
    renderFoodCard(food, note);
    el.bottomBarBtn.disabled = false;
  }, 650);
}

el.rerollBtn.addEventListener("click", showThinkingThenPick);

function confirmFood() {
  const food = state.currentFood;
  if (!food) return;
  logHistory(food.name);
  state.confirmed = true;
  updateBottomBar();
}

function updateBottomBar() {
  if (!state.currentFood) {
    el.bottomBarBtn.textContent = t("suggestBtn");
    el.bottomBarBtn.onclick = showThinkingThenPick;
  } else if (!state.confirmed) {
    el.bottomBarBtn.textContent = t("confirmBtn");
    el.bottomBarBtn.onclick = confirmFood;
  } else {
    el.bottomBarBtn.textContent = tf("findNearbyBtn", displayFoodName(state.currentFood));
    el.bottomBarBtn.onclick = findNearby;
  }
}

updateBottomBar();

el.favBtn.addEventListener("click", () => {
  const food = state.currentFood;
  if (!food) return;
  let favs = loadJSON(FAVORITES_KEY, []);
  if (favs.includes(food.name)) favs = favs.filter((n) => n !== food.name);
  else favs.push(food.name);
  saveJSON(FAVORITES_KEY, favs);
  el.favBtn.textContent = favs.includes(food.name) ? "❤️" : "🤍";
  el.favBtn.classList.toggle("is-active", favs.includes(food.name));
  renderFavoritesChips();
  renderHistory();
});

el.banBtn.addEventListener("click", () => {
  const food = state.currentFood;
  if (!food) return;
  const bl = loadJSON(BLACKLIST_KEY, []);
  if (!bl.includes(food.name)) bl.push(food.name);
  saveJSON(BLACKLIST_KEY, bl);
  renderBlacklistNote();
  showThinkingThenPick();
});


/* ---------- Location: current position ---------- */

function shortAddress(displayName) {
  return displayName.split(",").slice(0, 2).join(",").trim();
}

function updateLocationSummary() {
  if (state.locationLabel === null) return;
  el.locationSummaryText.textContent = tf("locationSummary", state.locationLabel, RADIUS_LABELS[state.radius]);
}

/* Lưu lại vị trí + bộ lọc đang chọn để không mất khi tải lại trang (F5) — trước đây
   toàn bộ phiên làm việc hiện tại (khác với Yêu thích/Ẩn món/Lịch sử) bị mất sạch. */
function saveSession() {
  saveJSON(SESSION_KEY, {
    lat: state.lat,
    lon: state.lon,
    locationLabel: state.locationLabel,
    radius: state.radius,
    meal: state.meal,
    price: state.price,
    categories: [...state.categories],
    spicyOnly: state.spicyOnly
  });
}

function restoreSession() {
  const saved = loadJSON(SESSION_KEY, null);
  if (!saved) return;

  state.lat = typeof saved.lat === "number" ? saved.lat : null;
  state.lon = typeof saved.lon === "number" ? saved.lon : null;
  state.locationLabel = saved.locationLabel ?? null;
  state.radius = RADIUS_LABELS[saved.radius] ? saved.radius : 1000;
  state.meal = saved.meal || "auto";
  state.price = saved.price || "any";
  state.categories = new Set(Array.isArray(saved.categories) ? saved.categories : []);
  state.spicyOnly = !!saved.spicyOnly;

  setActiveChip(el.radiusChips, String(state.radius));
  setActiveChip(el.mealChips, state.meal);
  setActiveChip(el.priceChips, state.price);
  el.spicyChip.classList.toggle("is-active", state.spicyOnly);
  updateFilterFeasibility();

  if (state.locationLabel !== null && state.lat !== null && state.lon !== null) {
    el.locationSummary.hidden = false;
    el.locationPicker.hidden = true;
    updateLocationSummary();
  }
}

function finalizeLocation(label) {
  state.locationLabel = label;
  updateLocationSummary();
  el.locationSummary.hidden = false;
  el.locationPicker.hidden = true;
  closeRegionSheet();
  saveSession();
}

el.changeLocationBtn.addEventListener("click", () => {
  el.locationSummary.hidden = true;
  el.locationPicker.hidden = false;
});

el.useLocationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    el.addressStatus.textContent = t("geoNotSupported");
    return;
  }
  el.useLocationBtn.classList.add("is-active");
  el.addressStatus.textContent = t("gettingLocation");
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      state.lat = pos.coords.latitude;
      state.lon = pos.coords.longitude;
      try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${state.lat}&lon=${state.lon}`;
        const res = await fetch(url);
        const data = await res.json();
        finalizeLocation(data.display_name ? shortAddress(data.display_name) : t("currentLocationFallback"));
      } catch (err) {
        finalizeLocation(t("currentLocationFallback"));
      }
    },
    () => {
      el.useLocationBtn.classList.remove("is-active");
      el.addressStatus.textContent = t("geoFailed");
    },
    { timeout: 8000 }
  );
});

/* ---------- Location: pick region ---------- */

function openRegionSheet() {
  el.regionSheetBackdrop.hidden = false;
}

function closeRegionSheet() {
  el.regionSheetBackdrop.hidden = true;
}

el.pickRegionModeBtn.addEventListener("click", openRegionSheet);
el.closeRegionSheetBtn.addEventListener("click", closeRegionSheet);
el.regionSheetBackdrop.addEventListener("click", (e) => {
  if (e.target === el.regionSheetBackdrop) closeRegionSheet();
});

const fetchAddressSuggestions = debounce(async (query) => {
  if (query.length < 3) {
    el.addressSuggestions.hidden = true;
    el.addressSuggestions.innerHTML = "";
    return;
  }
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&limit=5&countrycodes=vn&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.length) {
      el.addressSuggestions.hidden = true;
      return;
    }
    el.addressSuggestions.innerHTML = data
      .map((item, i) => `<li data-index="${i}">${item.display_name}</li>`)
      .join("");
    el.addressSuggestions.hidden = false;
    el.addressSuggestions.querySelectorAll("li").forEach((li, i) => {
      li.addEventListener("click", () => {
        const item = data[i];
        state.lat = parseFloat(item.lat);
        state.lon = parseFloat(item.lon);
        el.addressSuggestions.hidden = true;
        el.addressInput.value = "";
        finalizeLocation(shortAddress(item.display_name));
      });
    });
  } catch (err) {
    el.addressSuggestions.hidden = true;
  }
}, 400);

el.addressInput.addEventListener("input", (e) => {
  fetchAddressSuggestions(e.target.value.trim());
});

document.addEventListener("click", (e) => {
  if (!el.addressSuggestions.contains(e.target) && e.target !== el.addressInput) {
    el.addressSuggestions.hidden = true;
  }
});

const PROVINCES_API = "https://provinces.open-api.vn/api/v1";

function fillSelect(select, items, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>` + items.map((it) => `<option value="${it.code}">${it.name}</option>`).join("");
}

async function loadProvinces() {
  try {
    const res = await fetch(`${PROVINCES_API}/p/`);
    const data = await res.json();
    fillSelect(el.provinceSelect, data, t("provincePlaceholder"));
  } catch (err) {
    el.provinceSelect.innerHTML = `<option value="">${t("provinceLoadError")}</option>`;
  }
}
loadProvinces();

el.provinceSelect.addEventListener("change", async () => {
  el.districtSelect.innerHTML = `<option value="">${t("districtPlaceholder")}</option>`;
  el.wardSelect.innerHTML = `<option value="">${t("wardPlaceholder")}</option>`;
  el.districtSelect.disabled = true;
  el.wardSelect.disabled = true;
  el.applyRegionBtn.disabled = true;
  state.province = null;
  state.district = null;

  const code = el.provinceSelect.value;
  if (!code) return;
  state.province = el.provinceSelect.selectedOptions[0].textContent;
  el.applyRegionBtn.disabled = false;

  try {
    const res = await fetch(`${PROVINCES_API}/p/${code}?depth=2`);
    const data = await res.json();
    fillSelect(el.districtSelect, data.districts || [], t("districtPlaceholder"));
    el.districtSelect.disabled = false;
  } catch (err) {
    /* vẫn cho phép dùng cấp Tỉnh/Thành phố nếu tải Quận/Huyện lỗi */
  }
});

el.districtSelect.addEventListener("change", async () => {
  el.wardSelect.innerHTML = `<option value="">${t("wardPlaceholder")}</option>`;
  el.wardSelect.disabled = true;
  state.district = null;

  const code = el.districtSelect.value;
  if (!code) return;
  state.district = el.districtSelect.selectedOptions[0].textContent;

  try {
    const res = await fetch(`${PROVINCES_API}/d/${code}?depth=2`);
    const data = await res.json();
    fillSelect(el.wardSelect, data.wards || [], t("wardPlaceholder"));
    el.wardSelect.disabled = false;
  } catch (err) {
    /* vẫn cho phép dùng cấp Quận/Huyện nếu tải Phường/Xã lỗi */
  }
});

el.applyRegionBtn.addEventListener("click", async () => {
  const ward = el.wardSelect.value ? el.wardSelect.selectedOptions[0].textContent : "";
  const parts = [ward, state.district, state.province, "Việt Nam"].filter(Boolean);
  if (parts.length <= 1) return;
  const query = parts.join(", ");
  const label = [ward, state.district, state.province].filter(Boolean).slice(0, 2).join(", ");

  el.addressStatus.textContent = t("resolvingArea");
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=vn&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.length) {
      el.addressStatus.textContent = tf("notFoundArea", query);
      return;
    }
    state.lat = parseFloat(data[0].lat);
    state.lon = parseFloat(data[0].lon);
    el.addressStatus.textContent = "";
    finalizeLocation(label);
  } catch (err) {
    el.addressStatus.textContent = t("areaLookupFailedRetry");
  }
});

/* ---------- Nearby search ---------- */

function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`;
}

function amenityEmoji(amenity) {
  return { restaurant: "🍽️", fast_food: "🍔", cafe: "☕", food_court: "🍱" }[amenity] || "🍴";
}

const DAY_MAP = { Mo: 1, Tu: 2, We: 3, Th: 4, Fr: 5, Sa: 6, Su: 0 };

function parseOpeningHours(tag) {
  if (!tag) return null;
  if (/24\/7/i.test(tag)) return { status: "open", label: t("open247") };

  const now = new Date();
  const todayIdx = now.getDay();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const segments = tag.split(";").map((s) => s.trim()).filter(Boolean);
  let sawToday = false;

  for (const seg of segments) {
    const m = seg.match(/^([A-Za-z,\-]+)?\s*([\d:,\-]+)$/);
    if (!m) continue;
    const dayPart = m[1];
    const timePart = m[2];

    let days = new Set([0, 1, 2, 3, 4, 5, 6]);
    if (dayPart) {
      days = new Set();
      dayPart.split(",").forEach((chunk) => {
        const range = chunk.match(/^([A-Za-z]{2})-([A-Za-z]{2})$/);
        if (range && DAY_MAP[range[1]] !== undefined && DAY_MAP[range[2]] !== undefined) {
          let d = DAY_MAP[range[1]];
          const end = DAY_MAP[range[2]];
          for (let i = 0; i < 7; i++) {
            days.add(d);
            if (d === end) break;
            d = (d + 1) % 7;
          }
        } else if (DAY_MAP[chunk] !== undefined) {
          days.add(DAY_MAP[chunk]);
        }
      });
      if (days.size === 0) continue;
    }
    if (!days.has(todayIdx)) continue;
    sawToday = true;

    for (const r of timePart.split(",")) {
      const rm = r.match(/^(\d{2}):(\d{2})-(\d{2}):(\d{2})$/);
      if (!rm) continue;
      const startM = parseInt(rm[1], 10) * 60 + parseInt(rm[2], 10);
      let endM = parseInt(rm[3], 10) * 60 + parseInt(rm[4], 10);
      if (endM <= startM) endM += 24 * 60;
      if (nowMinutes >= startM && nowMinutes <= endM) {
        return { status: "open", label: tf("openUntil", `${rm[3]}:${rm[4]}`) };
      }
    }
  }
  if (sawToday) return { status: "closed", label: t("closedNow") };
  return null;
}

function readPlacesCache(key) {
  const raw = loadJSON(PLACES_CACHE_KEY, {});
  const entry = raw[key];
  if (entry && Date.now() - entry.timestamp < PLACES_CACHE_TTL_MS) return entry.elements;
  return null;
}

function writePlacesCache(key, elements) {
  const raw = loadJSON(PLACES_CACHE_KEY, {});
  raw[key] = { timestamp: Date.now(), elements };
  saveJSON(PLACES_CACHE_KEY, raw);
}

async function fetchNearbyPlaces(lat, lon, radius) {
  const cacheKey = `${lat.toFixed(3)}_${lon.toFixed(3)}_${radius}`;
  const cached = readPlacesCache(cacheKey);
  if (cached) return cached;

  const query = `[out:json][timeout:25];(node["amenity"~"restaurant|fast_food|cafe|food_court"](around:${radius},${lat},${lon});way["amenity"~"restaurant|fast_food|cafe|food_court"](around:${radius},${lat},${lon}););out center 100;`;
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: `data=${encodeURIComponent(query)}`
  });
  if (!res.ok) throw new Error("Overpass request failed");
  const data = await res.json();
  const elements = data.elements || [];
  writePlacesCache(cacheKey, elements);
  return elements;
}

function renderPlaceList(listEl, places) {
  const food = state.currentFood;
  listEl.innerHTML = places
    .map((p) => {
      const mapsDir = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}`;
      const mapsView = `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`;
      const openPart = p.open ? `<span class="${p.open.status === "open" ? "status-open" : ""}">${p.open.label}</span> · ` : "";
      // Giá hiện ở đây là giá THAM KHẢO của món (từ dữ liệu FOODS), KHÔNG phải giá
      // thật của riêng quán này — OSM không có dữ liệu giá theo từng quán, ghi rõ
      // "khoảng" để không gây hiểu lầm là giá chính xác tại quán đó.
      const pricePart = p.matched && food ? ` · 💰 ${t("aboutPrefix")} ${formatPriceRange(food)}` : "";
      return `
        <li class="result-item">
          <span class="result-emoji">${p.icon}</span>
          <div class="result-body">
            <p class="result-name">${p.name}${p.matched ? `<span class="badge-match">${t("matchBadge")}</span>` : ""}</p>
            <p class="result-meta">${openPart}${formatDistance(p.distance)}${p.address ? " · " + p.address : ""}${pricePart}</p>
            <div class="result-links">
              <a class="result-link" href="${mapsDir}" target="_blank" rel="noopener">${t("directions")}</a>
              <a class="result-link" href="${mapsView}" target="_blank" rel="noopener">${t("viewOnGoogleMaps")}</a>
            </div>
          </div>
        </li>
      `;
    })
    .join("");
}

let leafletMap = null;
let markersLayer = null;

function ensureMap() {
  if (leafletMap) return leafletMap;
  leafletMap = L.map(el.mapView);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(leafletMap);
  markersLayer = L.layerGroup().addTo(leafletMap);
  return leafletMap;
}

function renderMap(places) {
  const map = ensureMap();
  markersLayer.clearLayers();
  const userIcon = L.divIcon({ className: "", html: "📍", iconSize: [22, 22] });
  L.marker([state.lat, state.lon], { icon: userIcon }).addTo(markersLayer).bindPopup(t("yourLocation"));
  const bounds = [[state.lat, state.lon]];
  places.forEach((p) => {
    L.marker([p.lat, p.lon]).addTo(markersLayer).bindPopup(`<b>${p.name}</b><br>${formatDistance(p.distance)}`);
    bounds.push([p.lat, p.lon]);
  });
  map.fitBounds(bounds, { padding: [24, 24] });
  setTimeout(() => map.invalidateSize(), 50);
}

/* Gộp danh sách quán đang thực sự hiển thị (khớp món + phần mở rộng nếu đã bấm "Xem
   tất cả") — dùng chung cho cả Danh sách lẫn Bản đồ để 2 chế độ luôn đồng bộ, tránh
   lệch như trước (mở rộng ở Danh sách nhưng Bản đồ không cập nhật). */
function getVisiblePlaces() {
  return state.fallbackShown ? [...state.matchedPlaces, ...state.otherPlaces] : state.matchedPlaces;
}

el.viewToggle.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    el.viewToggle.querySelectorAll(".view-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    if (btn.dataset.view === "map") {
      el.resultsList.hidden = true;
      el.fallbackWrap.hidden = true;
      el.mapView.hidden = false;
      renderMap(getVisiblePlaces());
    } else {
      el.mapView.hidden = true;
      el.resultsList.hidden = false;
      el.fallbackWrap.hidden = !state.hasFallback || state.fallbackShown;
    }
  });
});

el.showAllBtn.addEventListener("click", () => {
  state.fallbackShown = true;
  el.fallbackList.hidden = false;
  el.fallbackWrap.hidden = true;
});

async function findNearby() {
  const food = state.currentFood;
  el.resultsSection.hidden = false;
  el.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  el.resultsList.innerHTML = "";
  el.fallbackList.innerHTML = "";
  el.fallbackList.hidden = true;
  el.fallbackWrap.hidden = true;
  el.mapView.hidden = true;
  el.resultsList.hidden = false;
  el.viewToggle.querySelectorAll(".view-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.view === "list"));
  state.hasFallback = false;
  state.fallbackShown = false;
  state.matchedPlaces = [];
  state.otherPlaces = [];

  if (state.lat === null || state.lon === null) {
    el.resultsStatus.textContent = t("locationFirstHint");
    return;
  }

  el.resultsTitle.textContent = tf("resultsTitleFor", displayFoodName(food));
  el.resultsStatus.innerHTML = `<span class="spinner"></span> ${t("findingNearby")}`;

  try {
    const elements = await fetchNearbyPlaces(state.lat, state.lon, state.radius);

    const places = elements
      .map((elItem) => {
        const lat = elItem.lat ?? elItem.center?.lat;
        const lon = elItem.lon ?? elItem.center?.lon;
        if (lat == null || lon == null) return null;
        const tags = elItem.tags || {};
        const name = tags.name || t("unnamedPlace");
        const distance = haversineMeters(state.lat, state.lon, lat, lon);
        const haystack = normalizeVN(`${name} ${tags.cuisine || ""}`);
        const matched = food.keywords.some((kw) => haystack.includes(normalizeVN(kw)));
        return {
          name,
          lat,
          lon,
          distance,
          matched,
          address: tags["addr:street"] || "",
          icon: amenityEmoji(tags.amenity),
          open: parseOpeningHours(tags.opening_hours)
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 60);

    const matchedPlaces = places.filter((p) => p.matched);
    const otherPlaces = places.filter((p) => !p.matched);

    if (matchedPlaces.length > 0) {
      const shown = matchedPlaces.slice(0, 25);
      state.matchedPlaces = shown;
      el.resultsStatus.textContent =
        shown.length === 1
          ? ""
          : tf("foundMatched", shown.length, displayFoodName(food), RADIUS_LABELS[state.radius]);
      renderPlaceList(el.resultsList, shown);
      if (otherPlaces.length > 0) {
        state.hasFallback = true;
        state.otherPlaces = otherPlaces.slice(0, 25);
        el.fallbackWrap.hidden = false;
        renderPlaceList(el.fallbackList, state.otherPlaces);
      }
    } else {
      el.resultsStatus.textContent = tf("noneMatched", displayFoodName(food), RADIUS_LABELS[state.radius]);
      if (otherPlaces.length > 0) {
        state.hasFallback = true;
        state.otherPlaces = otherPlaces.slice(0, 25);
        el.fallbackWrap.hidden = false;
        renderPlaceList(el.fallbackList, state.otherPlaces);
      }
    }
  } catch (err) {
    el.resultsStatus.textContent = t("nearbyLoadError");
  }
}

el.langToggle.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang === state.lang) return;
    state.lang = btn.dataset.lang;
    saveJSON(LANG_KEY, state.lang);
    applyLanguage();
  });
});

restoreSession();
updateFilterFeasibility();
applyLanguage();
