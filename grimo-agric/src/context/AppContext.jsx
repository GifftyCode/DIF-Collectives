import React, { createContext, useContext, useReducer } from "react";

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
      category: "CULTIVATE",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Farming Products",
      category: "FRUITS",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Soil Fertilization",
      category: "FERTILIZER",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/api/placeholder/400/300",
    },
  ],
};

// Action types
const actionTypes = {
  SET_USER: "SET_USER",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  TOGGLE_MENU: "TOGGLE_MENU",
  CLOSE_MENU: "CLOSE_MENU",
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
