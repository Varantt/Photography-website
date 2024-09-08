import { useState, useEffect, RefObject } from "react";

import { ScrollState } from "@/models/types";

const useScroll = (ref: RefObject<HTMLElement>): ScrollState => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const isElementVisible = elementTop < window.innerHeight * 0.75; // Element is visible when it's in the bottom 75% of the viewport
        setIsVisible(isElementVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return { isVisible };
};

export default useScroll;
