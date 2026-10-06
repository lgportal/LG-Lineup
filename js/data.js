/**
 * LG Refrigerator Lineup Data - Danh mục Dòng Tủ Lạnh LG
 * Trích xuất chính xác 100% từ tài liệu "Giới thiệu tủ lạnh by stb2 max"
 */

const CATEGORIES = [
  {
    id: "french_door_vn5_2026",
    title: "Tủ lạnh FRENCH DOOR _ VN5 2026",
    column: 1,
    order: 1,
    tag: "French Door"
  },
  {
    id: "french_door_vn6_vn7",
    title: "Tủ lạnh FRENCH DOOR _ VN6, VN7",
    column: 2,
    order: 2,
    tag: "French Door"
  },
  {
    id: "french_door_classic",
    title: "Tủ lạnh FRENCH DOOR",
    column: 1,
    order: 3,
    tag: "French Door"
  },
  {
    id: "side_by_side",
    title: "Tủ lạnh SIDE-BY-SIDE",
    column: 2,
    order: 4,
    tag: "Side-by-Side"
  },
  {
    id: "bottom_freezer",
    title: "Tủ lạnh NGĂN ĐÁ DƯỚI",
    column: 1,
    order: 5,
    tag: "Ngăn đá dưới"
  },
  {
    id: "top_freezer_row1",
    title: "Tủ lạnh NGĂN ĐÁ TRÊN (Dung tích lớn)",
    column: 2,
    order: 6,
    tag: "Ngăn đá trên"
  },
  {
    id: "top_freezer_row2",
    title: "Tủ lạnh NGĂN ĐÁ TRÊN (Dung tích vừa & nhỏ)",
    column: 2,
    order: 7,
    tag: "Ngăn đá trên"
  },
  {
    id: "freezer",
    title: "Tủ đông",
    column: 1,
    order: 8,
    tag: "Tủ đông"
  }
];

const PRODUCTS = [
  // ==========================================
  // CỘT 1 - NHÓM 1: Tủ lạnh FRENCH DOOR _ VN5 2026
  // ==========================================
  {
    id: "f53egr",
    model: "F53EGR",
    name: "Tủ lạnh LG French Door Multi-Door F53EGR",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f53egr.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f53egr/",
    desc: "Dòng French Door thế hệ mới 2026, thiết kế sang trọng, tiết kiệm điện Inverter",
    type: "French Door"
  },
  {
    id: "f53ega",
    model: "F53EGA",
    name: "Tủ lạnh LG French Door F53EGA",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f53ega.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f53egr/",
    desc: "Mặt kính cao cấp, công nghệ DoorCooling+ làm lạnh đa chiều",
    type: "French Door"
  },
  {
    id: "f53bga",
    model: "F53BGA",
    name: "Tủ lạnh LG French Door F53BGA",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f53bga.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f56bga/",
    desc: "Thiết kế phẳng tinh tế màu đen kim loại thời thượng",
    type: "French Door"
  },
  {
    id: "f58bga",
    model: "F58BGA",
    name: "Tủ lạnh LG French Door F58BGA",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f58bga.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f58bgd/",
    desc: "Dung tích siêu lớn, ngăn chứa rộng rãi và hệ thống kháng khuẩn Hygiene Fresh+",
    type: "French Door"
  },
  {
    id: "f56bga",
    model: "F56BGA",
    name: "Tủ lạnh LG French Door F56BGA",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f56bga.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f56bga/",
    desc: "Model 2026 mới nhất, Linear Cooling duy trì nhiệt độ tối ưu",
    type: "French Door"
  },
  {
    id: "f56bg",
    model: "F56BG",
    name: "Tủ lạnh LG French Door F56BG",
    categoryId: "french_door_vn5_2026",
    column: 1,
    image: "assets/products/f56bg.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f56bg/",
    desc: "Dòng French Door chuẩn mực, thiết kế 4 cánh tiện lợi",
    type: "French Door"
  },

  // ==========================================
  // CỘT 1 - NHÓM 2: Tủ lạnh FRENCH DOOR
  // ==========================================
  {
    id: "f51eg",
    model: "F51EG",
    name: "Tủ lạnh LG French Door F51EG",
    categoryId: "french_door_classic",
    column: 1,
    image: "assets/products/f51eg.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f51eg/",
    desc: "Model bán chạy hàng đầu, màu sắc trang nhã, công nghệ làm lạnh nhanh",
    type: "French Door"
  },
  {
    id: "f50bg",
    model: "F50BG",
    name: "Tủ lạnh LG French Door F50BG",
    categoryId: "french_door_classic",
    column: 1,
    image: "assets/products/f50bg.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f50bg/",
    desc: "Tủ lạnh 4 cánh sang trọng, ngăn lấy nước và đá ngoài tiện dụng",
    type: "French Door"
  },
  {
    id: "f40bg",
    model: "F40BG",
    name: "Tủ lạnh LG French Door F40BG",
    categoryId: "french_door_classic",
    column: 1,
    image: "assets/products/f40bg.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f40bg/",
    desc: "Kích thước gọn gàng, phù hợp không gian bếp hiện đại",
    type: "French Door"
  },

  // ==========================================
  // CỘT 1 - NHÓM 3: Tủ lạnh NGĂN ĐÁ DƯỚI
  // ==========================================
  {
    id: "lbb33bgmai",
    model: "LBB33BGMAI",
    name: "Tủ lạnh LG InstaView Ngăn Đá Dưới LBB33BGMAI",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbb33bgmai.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-instaview/lbb33bgmai/",
    desc: "Cửa kính InstaView gõ 2 lần sáng đèn độc quyền, ngăn đá dưới thời thượng",
    type: "Ngăn đá dưới"
  },
  {
    id: "lbb33blmai",
    model: "LBB33BLMAI",
    name: "Tủ lạnh LG Ngăn Đá Dưới LBB33BLMAI",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbb33blmai.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbb33blmai/",
    desc: "Ngăn đá dưới lấy đồ ngang tầm mắt, công nghệ Smart Inverter",
    type: "Ngăn đá dưới"
  },
  {
    id: "b33bga",
    model: "B33BGA",
    name: "Tủ lạnh LG Ngăn Đá Dưới B33BGA",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/b33bga.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/b33bga/",
    desc: "Dòng sản phẩm mới 2026, màu đen nhám chống bám vân tay",
    type: "Ngăn đá dưới"
  },
  {
    id: "b33bg",
    model: "B33BG",
    name: "Tủ lạnh LG Ngăn Đá Dưới B33BG",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/b33bg.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/b33bg/",
    desc: "Thiết kế hiện đại chuẩn châu Âu, ngăn đông bảo quản thực phẩm tươi ngon",
    type: "Ngăn đá dưới"
  },
  {
    id: "lbb33blga",
    model: "LBB33BLGA",
    name: "Tủ lạnh LG Ngăn Đá Dưới LBB33BLGA",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbb33blga.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbb33blga/",
    desc: "Mặt gương đen sang trọng, ngăn giữ ẩm rau củ Fresh Balancer",
    type: "Ngăn đá dưới"
  },
  {
    id: "lbd33blma",
    model: "LBD33BLMA",
    name: "Tủ lạnh LG Ngăn Đá Dưới LBD33BLMA",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbd33blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbd33blma/",
    desc: "Trang bị ngăn lấy nước ngoài tiện lợi không cần mở tủ",
    type: "Ngăn đá dưới"
  },
  {
    id: "lbd33blm",
    model: "LBD33BLM",
    name: "Tủ lạnh LG Ngăn Đá Dưới LBD33BLM",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbd33blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbd33blm/",
    desc: "Khay lấy nước bên ngoài, làm đá tự động nhanh chóng",
    type: "Ngăn đá dưới"
  },
  {
    id: "lbb33blm",
    model: "LBB33BLM",
    name: "Tủ lạnh LG Ngăn Đá Dưới LBB33BLM",
    categoryId: "bottom_freezer",
    column: 1,
    image: "assets/products/lbb33blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbb33blm/",
    desc: "Thiết kế tối giản, công nghệ Linear Inverter bền bỉ 10 năm",
    type: "Ngăn đá dưới"
  },

  // ==========================================
  // CỘT 1 - NHÓM 4: Tủ đông
  // ==========================================
  {
    id: "lof16bgm",
    model: "LOF16BGM",
    name: "Tủ đông đứng LG LOF16BGM",
    categoryId: "freezer",
    column: 1,
    image: "assets/products/lof16bgm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-dong/",
    desc: "Tủ đông đứng hiện đại, chia nhiều hộc kéo tiện lợi, tiết kiệm diện tích",
    type: "Tủ đông"
  },
  {
    id: "c30wh",
    model: "C30WH",
    name: "Tủ đông nằm LG C30WH",
    categoryId: "freezer",
    column: 1,
    image: "assets/products/c30wh.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-dong/",
    desc: "Tủ đông nằm dung tích lớn, làm lạnh sâu, giữ nhiệt cực lâu",
    type: "Tủ đông"
  },

  // ==========================================
  // CỘT 2 - NHÓM 5: Tủ lạnh FRENCH DOOR _ VN6, VN7
  // ==========================================
  {
    id: "lfd61blgai",
    model: "LFD61BLGAI",
    name: "Tủ lạnh LG InstaView French Door LFD61BLGAI",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfd61blgai.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-instaview/lfd61blgai/",
    desc: "InstaView cửa kính trong suốt, làm đá tròn Craft Ice sang trọng",
    type: "French Door"
  },
  {
    id: "lfb61blgai",
    model: "LFB61BLGAI",
    name: "Tủ lạnh LG InstaView French Door LFB61BLGAI",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfb61blgai.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-instaview/lfb61blgai/",
    desc: "Mặt gương đen cao cấp, kết nối thông minh qua ứng dụng LG ThinQ",
    type: "French Door"
  },
  {
    id: "lfd61blga",
    model: "LFD61BLGA",
    name: "Tủ lạnh LG French Door LFD61BLGA",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfd61blga.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/lfd61blga/",
    desc: "Dung tích 607L cực lớn, hệ thống làm lạnh DoorCooling+ đồng đều",
    type: "French Door"
  },
  {
    id: "f61bmd",
    model: "F61BMD",
    name: "Tủ lạnh LG French Door F61BMD",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/f61bmd.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f61bmd/",
    desc: "Thiết kế hiện đại, khay kính trợ lực chịu tải tới 150kg",
    type: "French Door"
  },
  {
    id: "lfd58blmai",
    model: "LFD58BLMAI",
    name: "Tủ lạnh LG InstaView French Door LFD58BLMAI",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfd58blmai.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/lfd58blmai/",
    desc: "Cửa InstaView mặt kính đen huyền bí, công nghệ làm lạnh khử mùi tuyệt đối",
    type: "French Door"
  },
  {
    id: "lfd58blma",
    model: "LFD58BLMA",
    name: "Tủ lạnh LG French Door LFD58BLMA",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfd58blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/lfd58blma/",
    desc: "Vỏ kim loại đen mờ cao cấp, tiết kiệm năng lượng chuẩn 5 sao",
    type: "French Door"
  },
  {
    id: "lfb58blma",
    model: "LFB58BLMA",
    name: "Tủ lạnh LG French Door LFB58BLMA",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/lfb58blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/lfb58blma/",
    desc: "Tủ lạnh 4 cánh dung tích tối ưu cho gia đình đông thành viên",
    type: "French Door"
  },
  {
    id: "f58bgd",
    model: "F58BGD",
    name: "Tủ lạnh LG French Door F58BGD",
    categoryId: "french_door_vn6_vn7",
    column: 2,
    image: "assets/products/f58bgd.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-french-door/f58bgd/",
    desc: "Ngăn đá dưới dạng ngăn kéo trượt mượt mà, thao tác nhẹ nhàng",
    type: "French Door"
  },

  // ==========================================
  // CỘT 2 - NHÓM 6: Tủ lạnh SIDE-BY-SIDE
  // ==========================================
  {
    id: "gr_x257bg",
    model: "GR-X257BG",
    name: "Tủ lạnh LG InstaView Door-in-Door GR-X257BG",
    categoryId: "side_by_side",
    column: 2,
    image: "assets/products/gr_x257bg.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-instaview/gr-x257bg/",
    desc: "Side-by-Side InstaView cao cấp, lấy nước đá tự động kháng khuẩn UVnano",
    type: "Side-by-Side"
  },
  {
    id: "gr_x257bl",
    model: "GR-X257BL",
    name: "Tủ lạnh LG InstaView Door-in-Door GR-X257BL",
    categoryId: "side_by_side",
    column: 2,
    image: "assets/products/gr_x257bl.png",
    badge: "HOT",
    badgeImg: "assets/images/image38.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-instaview/gr-x257bl/",
    desc: "Màu xám ánh bạc thời thượng, công nghệ làm đá tròn Craft Ice độc quyền",
    type: "Side-by-Side"
  },
  {
    id: "lsi63blma",
    model: "LSI63BLMA",
    name: "Tủ lạnh LG Side-by-Side LSI63BLMA",
    categoryId: "side_by_side",
    column: 2,
    image: "assets/products/lsi63blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-side-by-side/lsi63blma/",
    desc: "Side-by-Side 635L khổng lồ, ngăn chứa siêu rộng, thiết kế phẳng hiện đại",
    type: "Side-by-Side"
  },
  {
    id: "s60bg",
    model: "S60BG",
    name: "Tủ lạnh LG Side-by-Side S60BG",
    categoryId: "side_by_side",
    column: 2,
    image: "assets/products/s60bg.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-side-by-side/s60bg/",
    desc: "Model 2026 mới nhất, Linear Inverter tiết kiệm điện năng vượt trội",
    type: "Side-by-Side"
  },
  {
    id: "s56bm",
    model: "S56BM",
    name: "Tủ lạnh LG Side-by-Side S56BM",
    categoryId: "side_by_side",
    column: 2,
    image: "assets/products/s56bm.png",
    badge: "NEW 2026",
    badgeImg: "assets/images/image37.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-side-by-side/s56bm/",
    desc: "Màu kim loại phay xước chống trầy xước, hệ thống khử mùi than hoạt tính",
    type: "Side-by-Side"
  },

  // ==========================================
  // CỘT 2 - NHÓM 7: Tủ lạnh NGĂN ĐÁ TRÊN (Row 1)
  // ==========================================
  {
    id: "ltd46blma",
    model: "LTD46BLMA",
    name: "Tủ lạnh LG Ngăn Đá Trên LTD46BLMA",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltd46blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltd46blma/",
    desc: "Dung tích 465L, ngăn lấy nước ngoài Water Dispenser tiện dụng",
    type: "Ngăn đá trên"
  },
  {
    id: "ltd46svma",
    model: "LTD46SVMA",
    name: "Tủ lạnh LG Ngăn Đá Trên LTD46SVMA",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltd46svma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltd46svma/",
    desc: "Màu bạc sang trọng, DoorCooling+ làm mát từ cánh tủ",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb46blg",
    model: "LTB46BLG",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB46BLG",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltb46blg.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb46blg/",
    desc: "Mặt gương đen sang trọng bóng bẩy, dung tích lớn cho gia đình",
    type: "Ngăn đá trên"
  },
  {
    id: "ltd37blm",
    model: "LTD37BLM",
    name: "Tủ lạnh LG Ngăn Đá Trên LTD37BLM",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltd37blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltd37blm/",
    desc: "Dung tích 374L, có cần gạt lấy nước ngoài nhanh chóng",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb33blma",
    model: "LTB33BLMA",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB33BLMA",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltb33blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb33blma/",
    desc: "Ngăn đông mềm Fresh 0 Zone 0 độ C không cần rã đông",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb33blg",
    model: "LTB33BLG",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB33BLG",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/ltb33blg.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb33blg/",
    desc: "Mặt kính đen tinh tế, khay đá xoay di động tiện lợi",
    type: "Ngăn đá trên"
  },
  {
    id: "t39sv",
    model: "T39SV",
    name: "Tủ lạnh LG Ngăn Đá Trên T39SV",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/t39sv.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t39sv/",
    desc: "Màu bạc bạch kim, công nghệ Smart Inverter vận hành êm ái",
    type: "Ngăn đá trên"
  },
  {
    id: "t33sv2",
    model: "T33SV2",
    name: "Tủ lạnh LG Ngăn Đá Trên T33SV2",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/t33sv2.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t33sv2/",
    desc: "Dung tích 335L, hệ thống luồng khí lạnh đa chiều Multi Air Flow",
    type: "Ngăn đá trên"
  },
  {
    id: "t33sv",
    model: "T33SV",
    name: "Tủ lạnh LG Ngăn Đá Trên T33SV",
    categoryId: "top_freezer_row1",
    column: 2,
    image: "assets/products/t33sv.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t33sv/",
    desc: "Dòng tủ bền bỉ bán chạy hàng triệu chiếc trên toàn cầu",
    type: "Ngăn đá trên"
  },

  // ==========================================
  // CỘT 2 - NHÓM 8: Tủ lạnh NGĂN ĐÁ TRÊN (Row 2)
  // ==========================================
  {
    id: "ltd31blm",
    model: "LTD31BLM",
    name: "Tủ lạnh LG Ngăn Đá Trên LTD31BLM",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltd31blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltd31blm/",
    desc: "Dung tích 315L có ngăn lấy nước bên ngoài cực kỳ tiện dụng",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb31blma",
    model: "LTB31BLMA",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB31BLMA",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltb31blma.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb31blma/",
    desc: "Công nghệ DoorCooling+ làm mát nhanh hơn 35% so với tủ thông thường",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb31blm",
    model: "LTB31BLM",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB31BLM",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltb31blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb31blm/",
    desc: "Màu đen thanh lịch, ngăn chứa rau củ kiểm soát độ ẩm tối ưu",
    type: "Ngăn đá trên"
  },
  {
    id: "t30sv",
    model: "T30SV",
    name: "Tủ lạnh LG Ngăn Đá Trên T30SV",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/t30sv.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t30sv/",
    desc: "Màu bạc trang nhã, kích thước nhỏ gọn phù hợp phòng bếp căn hộ",
    type: "Ngăn đá trên"
  },
  {
    id: "t26bg",
    model: "T26BG",
    name: "Tủ lạnh LG Ngăn Đá Trên T26BG",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/t26bg.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t26bg/",
    desc: "Dung tích 266L, thiết kế màu đen bóng sang trọng",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb26blm",
    model: "LTB26BLM",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB26BLM",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltb26blm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb26blm/",
    desc: "Dung tích 264L, thiết kế thời thượng, tiết kiệm điện năng tối đa",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb26svm",
    model: "LTB26SVM",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB26SVM",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltb26svm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb26svm/",
    desc: "Màu bạc thời trang, khử mùi Nano Carbon kháng khuẩn hiệu quả",
    type: "Ngăn đá trên"
  },
  {
    id: "t21bg",
    model: "T21BG",
    name: "Tủ lạnh LG Ngăn Đá Trên T21BG",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/t21bg.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t21bg/",
    desc: "Dung tích 217L nhỏ gọn, phù hợp người độc thân hoặc gia đình 2-3 người",
    type: "Ngăn đá trên"
  },
  {
    id: "ltb21blmi",
    model: "LTB21BLMI",
    name: "Tủ lạnh LG Ngăn Đá Trên LTB21BLMI",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/ltb21blmi.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/ltb21blmi-aeppevn/",
    desc: "Model 209L siêu tiết kiệm điện, làm lạnh cực nhanh",
    type: "Ngăn đá trên"
  },
  {
    id: "t19bm",
    model: "T19BM",
    name: "Tủ lạnh LG Ngăn Đá Trên T19BM",
    categoryId: "top_freezer_row2",
    column: 2,
    image: "assets/products/t19bm.png",
    link: "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-tren/t19bm/",
    desc: "Dung tích 187L, kích thước nhỏ gọn tối ưu, giá thành cực tốt",
    type: "Ngăn đá trên"
  }
];
