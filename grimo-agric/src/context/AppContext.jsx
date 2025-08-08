import React, { createContext, useContext, useReducer } from "react";
import container from "../assets/images/Container.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import showCaseImage from "../assets/images/corn.png";
import hand from "../assets/icons/hand.png";
import org from "../assets/icons/org.png";
import sand from "../assets/icons/sand.png";
import veg from "../assets/icons/veg.png";
import six from "../assets/images/6.png";
import seven from "../assets/images/7.png";
import eight from "../assets/images/8.png";
import nine from "../assets/images/9.png";

// Initial state
const initialState = {
  user: null,
  currentPage: "home",
  isMenuOpen: false,
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,

  // Sample products for the product page
  products: [
    {
      id: 1,
      name: "Corn",
      price: 45.0,
      originalPrice: 50.0,
      image: showCaseImage,
      rating: 5,
      category: "VEGETABLES",
      description: "Fresh organic corn harvested from local farms",
      inStock: true,
      stockQuantity: 50,
    },
    {
      id: 2,
      name: "Tomato",
      price: 16.0,
      originalPrice: 20.0,
      image: container,
      rating: 4,
      category: "VEGETABLES",
      description: "Juicy red tomatoes perfect for cooking",
      inStock: true,
      stockQuantity: 30,
    },
    {
      id: 3,
      name: "Cabbage",
      price: 18.0,
      originalPrice: 22.0,
      image: second,
      rating: 5,
      category: "VEGETABLES",
      description: "Fresh green cabbage rich in vitamins",
      inStock: true,
      stockQuantity: 25,
    },
    {
      id: 4,
      name: "Kiwi",
      price: 2.0,
      originalPrice: 3.0,
      image: third,
      rating: 4,
      category: "FRUITS",
      description: "Sweet and tangy kiwi fruits",
      inStock: true,
      stockQuantity: 40,
    },
    {
      id: 5,
      name: "Organic Fertilizer",
      price: 35.0,
      originalPrice: 40.0,
      image: six,
      rating: 5,
      category: "FERTILIZER",
      description: "100% organic fertilizer for healthy plant growth",
      inStock: true,
      stockQuantity: 15,
    },
    {
      id: 6,
      name: "Farm Tools Set",
      price: 85.0,
      originalPrice: 100.0,
      image: seven,
      rating: 4,
      category: "TOOLS",
      description: "Complete set of essential farming tools",
      inStock: true,
      stockQuantity: 10,
    },
    {
      id: 7,
      name: "Organic Apples",
      price: 25.0,
      originalPrice: 30.0,
      image: eight,
      rating: 5,
      category: "FRUITS",
      description: "Fresh organic apples straight from the orchard",
      inStock: false,
      stockQuantity: 0,
    },
    {
      id: 8,
      name: "Vegetable Basket",
      price: 55.0,
      originalPrice: 65.0,
      image: nine,
      rating: 4,
      category: "VEGETABLES",
      description: "Mixed vegetable basket with seasonal produce",
      inStock: true,
      stockQuantity: 20,
    },
  ],

  services: [
    {
      id: 1,
      title: "Harvest Concepts",
      category: "FERTILIZER",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: container,
    },
    {
      id: 2,
      title: "Farming Products",
      category: "FRUITS",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: second,
    },
    {
      id: 3,
      title: "Soil Fertilization",
      category: "FERTILIZER",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: third,
    },
    {
      id: 4,
      title: "Organic Farming",
      category: "ORGANIC",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: third,
    },
    {
      id: 5,
      title: "Crop Protection",
      category: "PROTECTION",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: container,
    },
    {
      id: 6,
      title: "Agricultural Technology",
      category: "TECHNOLOGY",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: second,
    },
  ],
  features: [
    {
      id: 1,
      title: "Agriculture Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
      icon: hand,
      iconAlt: "Agriculture Products Icon",
      position: "top-left",
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
      icon: sand,
      iconAlt: "Fresh Vegetables Icon",
      position: "top-right",
    },
    {
      id: 3,
      title: "Quality Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
      icon: veg,
      iconAlt: "Quality Products Icon",
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Pure & Organic",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
      icon: org,
      iconAlt: "Pure & Organic Icon",
      position: "bottom-right",
    },
  ],
  showcaseContent: {
    badge: {
      icon: "/api/placeholder/16/16",
      iconAlt: "Plant Icon",
      text: "Grow Naturally",
    },
    title: "Choose What's Perfect For Your Field",
    centerImage: {
      src: showCaseImage,
      alt: "Fresh corn illustration",
    },
    gallery: [
      {
        id: 1,
        src: six,
        alt: "Woman and child gardening together",
        size: "large",
      },
      {
        id: 2,
        src: seven,
        alt: "Farmer with fresh produce in wooden crate",
        size: "tall",
      },
      {
        id: 3,
        src: eight,
        alt: "Hand reaching for red apple on tree",
        size: "square",
      },
      {
        id: 4,
        src: nine,
        alt: "Person harvesting vegetables in basket",
        size: "wide",
      },
    ],
  },
};

// Action types
const actionTypes = {
  SET_USER: "SET_USER",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  TOGGLE_MENU: "TOGGLE_MENU",
  CLOSE_MENU: "CLOSE_MENU",
  SET_SERVICES: "SET_SERVICES",
  ADD_SERVICE: "ADD_SERVICE",
  UPDATE_SERVICE: "UPDATE_SERVICE",
  DELETE_SERVICE: "DELETE_SERVICE",
  SET_FEATURES: "SET_FEATURES",
  ADD_FEATURE: "ADD_FEATURE",
  UPDATE_FEATURE: "UPDATE_FEATURE",
  DELETE_FEATURE: "DELETE_FEATURE",
  SET_SHOWCASE_CONTENT: "SET_SHOWCASE_CONTENT",
  UPDATE_SHOWCASE_CONTENT: "UPDATE_SHOWCASE_CONTENT",

  // Cart actions
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  TOGGLE_CART: "TOGGLE_CART",

  // Product actions
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

// Helper function to calculate cart totals
const calculateCartTotals = (cart) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { cartCount, cartTotal };
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case actionTypes.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case actionTypes.CLOSE_MENU:
      return { ...state, isMenuOpen: false };
    case actionTypes.SET_SERVICES:
      return { ...state, services: action.payload };
    case actionTypes.ADD_SERVICE:
      return { ...state, services: [...state.services, action.payload] };
    case actionTypes.UPDATE_SERVICE:
      return {
        ...state,
        services: state.services.map((service) =>
          service.id === action.payload.id ? action.payload : service
        ),
      };
    case actionTypes.DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter(
          (service) => service.id !== action.payload
        ),
      };
    case actionTypes.SET_FEATURES:
      return { ...state, features: action.payload };
    case actionTypes.ADD_FEATURE:
      return { ...state, features: [...state.features, action.payload] };
    case actionTypes.UPDATE_FEATURE:
      return {
        ...state,
        features: state.features.map((feature) =>
          feature.id === action.payload.id ? action.payload : feature
        ),
      };
    case actionTypes.DELETE_FEATURE:
      return {
        ...state,
        features: state.features.filter(
          (feature) => feature.id !== action.payload
        ),
      };
    case actionTypes.SET_SHOWCASE_CONTENT:
      return { ...state, showcaseContent: action.payload };
    case actionTypes.UPDATE_SHOWCASE_CONTENT:
      return {
        ...state,
        showcaseContent: { ...state.showcaseContent, ...action.payload },
      };

    // Cart cases
    case actionTypes.ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      let newCart;

      if (existingItem) {
        newCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      const { cartCount, cartTotal } = calculateCartTotals(newCart);
      return { ...state, cart: newCart, cartCount, cartTotal };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      const { cartCount, cartTotal } = calculateCartTotals(newCart);
      return { ...state, cart: newCart, cartCount, cartTotal };
    }

    case actionTypes.UPDATE_CART_QUANTITY: {
      const newCart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);

      const { cartCount, cartTotal } = calculateCartTotals(newCart);
      return { ...state, cart: newCart, cartCount, cartTotal };
    }

    case actionTypes.CLEAR_CART:
      return { ...state, cart: [], cartCount: 0, cartTotal: 0 };

    case actionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };

    // Product cases
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    actionTypes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;
