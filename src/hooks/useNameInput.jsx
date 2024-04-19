import { useState } from 'react';

function useNameInput(handleChange) {
  const [isValid, setIsValid] = useState(true);

  const handleChangeInput = (event) => {
    handleChange(event.target.value);
  };

  const handleFocus = () => {
    setIsValid(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsValid(false);
    }
  };

  return {
    isValid,
    handleChangeInput,
    handleFocus,
    handleBlur,
  };
}

export default useNameInput;
