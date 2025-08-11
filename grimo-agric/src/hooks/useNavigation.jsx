import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

export const useNavigation = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setCurrentPage = (page) => {
    dispatch({ type: actionTypes.SET_CURRENT_PAGE, payload: page });
  };

  const toggleMenu = () => {
    dispatch({ type: actionTypes.TOGGLE_MENU });
  };

  const closeMenu = () => {
    dispatch({ type: actionTypes.CLOSE_MENU });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMenu();
  };

  return {
    currentPage: state.currentPage,
    isMenuOpen: state.isMenuOpen,
    isScrolled,
    setCurrentPage,
    toggleMenu,
    closeMenu,
    scrollToSection,
  };
};
