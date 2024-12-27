import { useEffect } from "react";

const useHandleHashNavigation = () => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const navigateToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        timeoutId = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    navigateToHash();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
};


export default useHandleHashNavigation;
