import { useState, useEffect, useRef } from "react";

export const useDropdown = (isInitialOpen = false) => {
  const [isOpen, setIsOpen] = useState(isInitialOpen);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (ref.current && !ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
};
