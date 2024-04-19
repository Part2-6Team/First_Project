import { useState } from 'react';

export function useDropdown() {
  const [isDropdownView, setDropdownView] = useState(false);

  const toggleDropdown = () => {
    setDropdownView(!isDropdownView);
  };

  return {
    isDropdownView,
    toggleDropdown,
  };
}
