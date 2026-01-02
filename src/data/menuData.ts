export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "Begin your culinary journey",
    items: [
      {
        id: "double-green-shrimp",
        name: "Double Green Shrimp",
        price: 16.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/07/double-green-shrimph-400x400.jpg",
        isSpicy: true,
      },
      {
        id: "chicken-lollipop",
        name: "Chicken Lollipop",
        price: 15.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/03/lolipop-400x400.jpg",
        isPopular: true,
      },
      {
        id: "tawa-chicken",
        name: "Tawa Chicken",
        price: 16.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/02/thava-chicken-400x400.jpg",
      },
      {
        id: "kadak-chicken",
        name: "Kadak Chicken",
        price: 16.99,
        description: "Boneless thigh chicken marinated in special spices",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/02/kadak-chicken-400x400.jpg",
        isSpicy: true,
      },
      {
        id: "karvepaku-chicken",
        name: "Karvepaku Chicken",
        price: 15.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/01/KARVEPAKU-CHICKEN-400x400.jpg",
      },
      {
        id: "crispy-chicken-fry",
        name: "Crispy Chicken Fry",
        price: 15.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/01/chicken-fry-400x400.jpg",
        isPopular: true,
      },
      {
        id: "thava-fish",
        name: "Thava Fish",
        price: 18.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2022/04/tandoori-fish-400x375.jpeg",
      },
      {
        id: "shrimp-pakora",
        name: "Shrimp Pakora",
        price: 16.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2022/04/chingri_shrimp_pakora-1-400x400.jpg",
      },
      {
        id: "fish-tikka",
        name: "Fish Tikka",
        price: 15.99,
        description: "Tilapia fish marinated in fish garam masala",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/01/fish-tikka-400x400.jpg",
      },
      {
        id: "karampodi-gobi",
        name: "Karampodi Gobi",
        price: 13.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/08/gobi-karampodi-400x400.jpeg",
        isVeg: true,
        isSpicy: true,
      },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori Grill",
    subtitle: "From the clay oven",
    items: [
      {
        id: "hspl-pepper-chicken-kebabs",
        name: "HSPL Pepper Chicken Kebabs",
        price: 14.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/04/IMG-20240327-WA0003-400x400.jpg",
        isPopular: true,
      },
      {
        id: "bpot-chicken-kebab",
        name: "BPOT Chicken Kebab",
        price: 14.99,
        description: "Delicious marinated chicken grilled to perfection",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/01/bpot-kebab-400x400.jpg",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrees",
    subtitle: "Signature main courses",
    items: [
      {
        id: "pepper-chicken-curry",
        name: "Pepper Chicken Curry",
        price: 16.99,
        description: "South Indian black pepper chicken gravy",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/03/chicken-pepper-400x400.jpg",
        isSpicy: true,
        isPopular: true,
      },
      {
        id: "dal-makani",
        name: "Dal Makani",
        price: 14.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/12/dal-makani-400x400.jpg",
        isVeg: true,
      },
      {
        id: "saag-aloo",
        name: "Saag Aloo",
        price: 14.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/08/Saag-Aloo-4-1024x1536-1-400x400.jpg",
        isVeg: true,
      },
      {
        id: "haleem-goat",
        name: "Haleem Goat",
        price: 13.99,
        description: "Slow-cooked goat blended with lentils and spices",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/03/haleem-400x400.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "biryani",
    title: "Biryanis",
    subtitle: "Our signature specialty",
    items: [
      {
        id: "goat-roast-biryani",
        name: "Goat Roast Biryani",
        price: 18.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/03/IMG-20250309-WA0002-400x400.jpg",
        isPopular: true,
        isSpicy: true,
      },
      {
        id: "vijayawada-biryani",
        name: "Vijayawada Biryani",
        price: 16.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/03/IMG-20250309-WA0002-400x400.jpg",
        isSpicy: true,
      },
      {
        id: "chicken-pulao",
        name: "Chicken Pulao",
        price: 15.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/04/Chicken-Pulav-400x400.jpeg",
      },
      {
        id: "avakaya-goat-biryani",
        name: "Avakaya Goat Biryani",
        price: 18.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/09/Avakaya-Goat-Biryani-400x375.jpg",
        isSpicy: true,
        isPopular: true,
      },
      {
        id: "avakaya-chicken-biryani",
        name: "Avakaya Chicken Biryani",
        price: 16.49,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/09/avakaya-chk-400x400.jpg",
        isSpicy: true,
      },
      {
        id: "guthivankaya-biryani",
        name: "Guthivankaya Biryani",
        price: 14.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/03/IMG-20240313-WA0004-400x400.jpg",
        isVeg: true,
      },
    ],
  },
  {
    id: "rice",
    title: "Rice & Specials",
    subtitle: "Aromatic rice dishes",
    items: [
      {
        id: "bagara-rice-goat",
        name: "Bagara Rice Goat",
        price: 18.99,
        description: "Aromatic rice from Hyderabad with goat curry",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/01/bagara-rice-1-400x400.jpg",
      },
      {
        id: "bagara-rice-chicken",
        name: "Bagara Rice Chicken",
        price: 16.99,
        description: "Aromatic rice from Hyderabad with chicken curry",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/01/bagara-rice-2-400x400.jpg",
      },
      {
        id: "bagara-rice-veg",
        name: "Bagara Rice Veg",
        price: 14.99,
        description: "Aromatic rice from Hyderabad with vegetable curry",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2024/01/bagara-rice-3-400x400.jpg",
        isVeg: true,
      },
      {
        id: "non-veg-lunch-combo",
        name: "Non-Veg Lunch Combo",
        price: 14.99,
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2023/08/biryani_pot-400x400.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet endings",
    items: [
      {
        id: "apricot-delight",
        name: "Apricot Delight",
        price: 5.99,
        description: "4 layered dessert with apricot and cream",
        image: "https://biryanipoteastwindsor.com/wp-content/uploads/2025/01/apricot-delight-1-400x400.jpg",
        isVeg: true,
        isPopular: true,
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Refreshing beverages",
    items: [
      {
        id: "mango-lassi",
        name: "Mango Lassi",
        price: 4.99,
        description: "Creamy yogurt drink with fresh mango",
        image: "https://images.unsplash.com/photo-1527585743534-7113e3211270?w=400&h=400&fit=crop",
        isVeg: true,
        isPopular: true,
      },
      {
        id: "masala-chai",
        name: "Masala Chai",
        price: 3.99,
        description: "Traditional spiced Indian tea",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
        isVeg: true,
      },
      {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        price: 4.49,
        description: "Classic sweetened yogurt drink",
        image: "https://images.unsplash.com/photo-1571950006920-e449cfa74e04?w=400&h=400&fit=crop",
        isVeg: true,
      },
    ],
  },
];
