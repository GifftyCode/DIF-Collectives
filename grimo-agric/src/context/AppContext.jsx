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
  testimonials: [
    {
      id: 1,
      name: "Martin Bailey",
      role: "Supervisor",
      rating: 5,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      avatar: "/api/placeholder/50/50",
    },
    {
      id: 2,
      name: "Emma Greed",
      role: "Customer",
      rating: 4,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      avatar: "/api/placeholder/50/50",
    },
    {
      id: 3,
      name: "Daniel Craig",
      role: "Co-Founder",
      rating: 5,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      avatar: "/api/placeholder/50/50",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "What technology is used in vertical farming?",
      category: "FOOD CROPS",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Which type of farming is more prevalent today?",
      category: "ORGANIC FARM",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "The Farmers Sentiment Darkens Hopes Fade",
      category: "FARMING TIPS",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: "/api/placeholder/400/300",
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
      icon: "/api/placeholder/16/16", // Replace with your Figma exported icon
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
