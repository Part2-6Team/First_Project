import { useState } from 'react';

function useDropdown() {
  const [isDropdownView, setDropdownView] = useState(false);

  const toggleDropdown = () => {
    setDropdownView(!isDropdownView);
  };

  return {
    isDropdownView,
    toggleDropdown,
  };
}

export default useDropdown;
