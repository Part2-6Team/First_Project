import { useState } from 'react';
import { styled } from 'styled-components';
import arrowTop from '../assets/arrow_top.svg';
import arrowDown from '../assets/arrow_right.svg';
import { useDropdown } from '../hooks/useDropDown';

function OptionList({ options, onChangeInner, onChangeSelected, onBlur }) {
  const handleClickOption = (event) => {
    onChangeInner(event.target.innerText);
    onChangeSelected(event.target.innerText);
    onBlur(false);
  };

  return (
    <OptionWrapper>
      {options.map((option) => (
        <li
          role="presentation"
          className="option"
          key={option.value}
          onClick={handleClickOption}
          onKeyDown={handleClickOption}
        >
          {option.label}
        </li>
      ))}
    </OptionWrapper>
  );
}

function DropDown({ options, handleChange }) {
  const [innerSelected, setInnerSelected] = useState(options[0].label);
  const { isDropdownView, toggleDropdown } = useDropdown();

  return (
    <div>
      <DropdownLabel type="button" onClick={toggleDropdown}>
        <div className="label">{innerSelected}</div>
        <img
          className="icon"
          src={isDropdownView ? arrowTop : arrowDown}
          alt="화살표 이미지"
        />
      </DropdownLabel>
      {isDropdownView ? (
        <OptionList
          options={options}
          onChangeInner={setInnerSelected}
          onChangeSelected={handleChange}
          onBlur={toggleDropdown}
        />
      ) : null}
    </div>
  );
}

const OptionWrapper = styled.div`
  width: 320px;
  list-style: none;
  color: var(--Gray-900);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid var(--Gray-300);

  .option {
    padding: 12px 16px;
    height: 50px;
  }

  .option:hover {
    background: var(--Gray-100);
  }
`;

const DropdownLabel = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid var(--Gray-300);
  background: var(--White);

  .label {
    color: var(--Gray-500);
    font-family: Pretendard;
    font-size: 16px;
  }

  &:focus,
  &:active {
    border: 2px solid var(--Gray-500);
  }

  &:hover {
    border: 2px solid var(--Gray-400);
  }

  &:disabled {
    border: 2px solid var(--Gray-400);
    background: var(--Gray-100);
  }
`;

export default DropDown;
