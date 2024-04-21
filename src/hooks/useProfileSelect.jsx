import { useState } from 'react';
import defaultProfileImage from '../assets/profile/0.png';

function useProfileSelect(handleChange) {
  const [selected, setSelected] = useState(defaultProfileImage);

  const handleClickProfileImage = (event) => {
    handleChange(event.target.value);
    setSelected(event.target.value);
  };

  return {
    selected,
    handleClickProfileImage,
  };
}

export default useProfileSelect;
