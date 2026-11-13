
export const CATEGORIES = ["coffee", "latte", "tea", "ade"];

// ============================================================
// 메뉴판
// ============================================================
export const MENU = [
  {
    id: "americano",
    category: "coffee",
    price: 3000,
    icon: "☕",
    photo: "americano.jpg",
    names: { ko: "아메리카노", en: "Americano", zh: "美式咖啡", ja: "アメリカーノ", vi: "Americano" },
    whip: false,
    iceOnly: false,
  },
  {
    id: "iced-americano",
    category: "coffee",
    price: 3000,
    icon: "🧊",
    photo: "iced-americano.jpg",
    names: { ko: "아이스 아메리카노", en: "Iced Americano", zh: "冰美式咖啡", ja: "アイスアメリカーノ", vi: "Americano Đá" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "cafe-latte",
    category: "latte",
    price: 3500,
    icon: "🥛",
    photo: "cafe-latte.jpg",
    names: { ko: "카페라떼", en: "Cafe Latte", zh: "拿铁", ja: "カフェラテ", vi: "Cafe Latte" },
    whip: true,
    iceOnly: false,
  },
  {
    id: "iced-cafe-latte",
    category: "latte",
    price: 3500,
    icon: "🥛",
    photo: "iced-cafe-latte.jpg",
    names: { ko: "아이스 카페라떼", en: "Iced Cafe Latte", zh: "冰拿铁", ja: "アイスカフェラテ", vi: "Cafe Latte Đá" },
    whip: true,
    iceOnly: true,
  },
  {
    id: "hot-cafe-latte",
    category: "latte",
    price: 3500,
    icon: "☕",
    photo: "hot-cafe-latte.jpg",
    names: { ko: "핫 카페라떼", en: "Hot Cafe Latte", zh: "热拿铁", ja: "ホットカフェラテ", vi: "Cafe Latte Nóng" },
    whip: true,
    iceOnly: false,
  },
  {
    id: "strawberry-latte",
    category: "latte",
    price: 4500,
    icon: "🍓",
    photo: "strawberry-latte.jpg",
    names: { ko: "딸기라떼", en: "Strawberry Latte", zh: "草莓拿铁", ja: "ストロベリーラテ", vi: "Latte Dâu" },
    whip: true,
    iceOnly: false,
  },
  {
    id: "choco-latte",
    category: "latte",
    price: 4500,
    icon: "🍫",
    photo: "choco-latte.jpg",
    names: { ko: "초코라떼", en: "Choco Latte", zh: "巧克力拿铁", ja: "チョコラテ", vi: "Latte Socola" },
    whip: true,
    iceOnly: false,
  },
  {
    id: "iced-choco-latte",
    category: "latte",
    price: 4500,
    icon: "🧊",
    photo: "iced-choco-latte.jpg",
    names: { ko: "아이스 초코라떼", en: "Iced Choco Latte", zh: "冰巧克力拿铁", ja: "アイスチョコラテ", vi: "Latte Socola Đá" },
    whip: true,
    iceOnly: true,
  },
  {
    id: "cappuccino",
    category: "latte",
    price: 4000,
    icon: "☕",
    photo: "cappuccino.jpg",
    names: { ko: "아이스 카푸치노", en: "Iced Cappuccino", zh: "冰卡布奇诺", ja: "アイスカプチーノ", vi: "Cappuccino Đá" },
    whip: true,
    iceOnly: true,
  },
  {
    id: "green-tea",
    category: "tea",
    price: 3500,
    icon: "🍵",
    photo: "green-tea.jpg",
    names: { ko: "녹차", en: "Green Tea", zh: "绿茶", ja: "緑茶", vi: "Trà Xanh" },
    whip: false,
    iceOnly: false,
  },
  {
    id: "yuja-tea",
    category: "tea",
    price: 4000,
    icon: "🍊",
    photo: "yuja-tea.jpg",
    names: { ko: "유자차", en: "Yuja Tea", zh: "柚子茶", ja: "ゆず茶", vi: "Trà Yuja" },
    whip: false,
    iceOnly: false,
  },
  {
    id: "iced-tea",
    category: "tea",
    price: 3500,
    icon: "🧊",
    photo: "iced-tea.jpg",
    names: { ko: "아이스티", en: "Iced Tea", zh: "冰茶", ja: "アイスティー", vi: "Trà Đá" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "lemonade",
    category: "ade",
    price: 4000,
    icon: "🍋",
    photo: "lemonade.jpg",
    names: { ko: "레모네이드", en: "Lemonade", zh: "柠檬水", ja: "レモネード", vi: "Nước Chanh" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "grapefruit-ade",
    category: "ade",
    price: 4500,
    icon: "🍊",
    photo: "grapefruit-ade.jpg",
    names: { ko: "자몽 에이드", en: "Grapefruit Ade", zh: "西柚气泡饮", ja: "グレープフルーツエード", vi: "Soda Bưởi" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "green-grape-ade",
    category: "ade",
    price: 4500,
    icon: "🍇",
    photo: "green-grape-ade.jpg",
    names: { ko: "청포도 에이드", en: "Green Grape Ade", zh: "青葡萄气泡饮", ja: "マスカットエード", vi: "Soda Nho Xanh" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "ice-cream",
    category: "latte",
    price: 2500,
    icon: "🍦",
    photo: "ice-cream.jpg",
    names: { ko: "아이스크림", en: "Ice Cream", zh: "冰淇淋", ja: "アイスクリーム", vi: "Kem" },
    whip: false,
    iceOnly: true,
  },
];

// ============================================================
// 아래부터는 자동 생성 영역입니다. 수정하지 않아도 됩니다.
// ============================================================

// 메뉴 이름 자동 생성
export const MENU_NAMES = Object.fromEntries(
  MENU.map((item) => [item.id, item.names])
);

// 휘핑크림 선택 가능 메뉴
export const WHIP_AVAILABLE_IDS = MENU
  .filter((item) => item.whip)
  .map((item) => item.id);

// 아이스 전용 메뉴
export const FIXED_ICE_IDS = MENU
  .filter((item) => item.iceOnly)
  .map((item) => item.id);

// ============================================================
// 메뉴 번역 적용
// ============================================================

export const applyMenuNames = (translations) => {
  if (!translations) return translations;

  const result = {};

  Object.keys(translations).forEach((lang) => {
    const menu = { ...(translations[lang].menu || {}) };

    Object.keys(MENU_NAMES).forEach((id) => {
      const name = MENU_NAMES[id][lang] || MENU_NAMES[id].ko;
      if (name) menu[id] = name;
    });

    result[lang] = { ...translations[lang], menu };
  });

  return result;
};

// ============================================================
// 추가 옵션 가격
// ============================================================

export const ADDON_PRICE = {
  sizeLarge: 500,
  whip: 500,
  toppingPearl: 500,
};

// ============================================================
// 기본 옵션
// ============================================================

export const DEFAULT_OPTIONS = {
  size: "regular",
  whip: "none",
  topping: "none",
  hotIce: "hot",
};

// ============================================================
// QR 코드 이미지 주소
// ============================================================

export const getQrImageUrl = (value) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(value)}`;

// ============================================================
// 메뉴 사진 주소
// ============================================================

export const getMenuImageUrl = (item) =>
  `${process.env.PUBLIC_URL || ""}/menu-images/${item.photo || `${item.id}.jpg`}`;

// ============================================================
// 메뉴 최종 가격 계산
// ============================================================

export const computeUnitPrice = (item, options) =>
  item.price +
  (options.size === "large" ? ADDON_PRICE.sizeLarge : 0) +
  (options.whip === "add" ? ADDON_PRICE.whip : 0) +
  (options.topping === "pearl" ? ADDON_PRICE.toppingPearl : 0);

// ============================================================
// 주문 옵션 요약
// ============================================================

export const buildOptionSummary = (t, options, item) => {
  const parts = [];

  if (!FIXED_ICE_IDS.includes(item.id)) {
    parts.push(options.hotIce === "hot" ? t.hotOption : t.iceOption);
  }

  if (options.size === "large") {
    parts.push(t.sizeLarge.replace(/\s*\(.*\)/, ""));
  }

  if (options.whip === "add") {
    parts.push(t.whipAdd.replace(/\s*\(.*\)/, ""));
  }

  if (options.topping === "pearl") {
    parts.push(t.toppingPearl.replace(/\s*\(.*\)/, ""));
  }

  return parts.join(" · ");
};

// ============================================================
// 문자열 변수 치환
// ============================================================

export const format = (template, vars) =>
  (template || "").replace(
    /\{(\w+)\}/g,
    (_, k) => (vars[k] !== undefined ? vars[k] : "")
  );
