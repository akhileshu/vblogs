import { useEffect } from "react";

const useHandleHashNavigation = () => {
  useEffect(() => {
    const navigateToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    navigateToHash();
  }, []);
};

export default useHandleHashNavigation;
