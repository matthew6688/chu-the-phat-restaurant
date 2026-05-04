export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  note: string;
  items: MenuItem[];
}

export interface RestaurantData {
  key: string;
  name: string;
  cuisine: string;
  menuSourceLabel: string;
  menuSourceUrl: string;
  bookingUrl: string;
  hours: string[];
  heroImage: string;
  sections: MenuSection[];
}

export const restaurantData: RestaurantData = {
  "key": "chu",
  "name": "Chu The Phat",
  "cuisine": "Asian street food from Hong Kong, Korea and Taiwan in Fish Lane",
  "menuSourceLabel": "Chu The Phat official site and OpenTable menu listing",
  "menuSourceUrl": "https://chuthephat.com.au/",
  "bookingUrl": "https://bookings.nowbookit.com",
  "hours": [
    "Monday 5pm-9pm",
    "Tuesday-Thursday noon-3pm & 5pm-9pm",
    "Friday-Saturday noon-10pm",
    "Sunday noon-9pm"
  ],
  "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=85",
  "sections": [
    {
      "title": "Snacks",
      "note": "Dumplings, buns and bar snacks.",
      "items": [
        {
          "name": "Boiled Pork Dumplings",
          "description": "Tomato relish",
          "price": "4pc $12"
        },
        {
          "name": "Smoked Trout Dumplings",
          "description": "Fragrant broth",
          "price": "4pc $14"
        },
        {
          "name": "Steamed Duck Bun",
          "description": "Steamed bun from the snacks menu",
          "price": "3pc $12"
        },
        {
          "name": "Pork & Kimchi Spring Rolls",
          "description": "Anchovy mayo",
          "price": "3pc $15"
        }
      ]
    },
    {
      "title": "Starters & Vegetables",
      "note": "Fresh, spicy and shareable.",
      "items": [
        {
          "name": "Poached Chicken",
          "description": "Watercress, cucumber, chilli and sesame",
          "price": "$17"
        },
        {
          "name": "Mung Bean Pancake",
          "description": "Kim chi caramel, soy pickled onions",
          "price": "$12"
        },
        {
          "name": "Aromatic Prawn & Avocado Salad",
          "description": "Hot and sour dressing",
          "price": "$22"
        },
        {
          "name": "Steamed Green Beans",
          "description": "XO sauce",
          "price": "$12"
        }
      ]
    },
    {
      "title": "Main Fare",
      "note": "Street-food energy, larger plates.",
      "items": [
        {
          "name": "Nanna Annas Chilli Chicken",
          "description": "Main fare menu item",
          "price": "$27"
        },
        {
          "name": "Black Onyx Beef Stir Fried",
          "description": "With asparagus",
          "price": "$26"
        },
        {
          "name": "Tea Smoked Duck Legs",
          "description": "Grilled pineapple, candied garlic and ginger",
          "price": "$35"
        },
        {
          "name": "Beef 'Kalbi'",
          "description": "Shiso leaf, ssamjang, assorted kimchi",
          "price": "$38"
        }
      ]
    }
  ]
};
