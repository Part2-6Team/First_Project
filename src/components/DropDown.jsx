import { useState } from 'react';
import { styled } from 'styled-components';
import arrowTop from '../assets/arrow_top.svg';
import arrowDown from '../assets/arrow_right.svg';

function OptionList({ display, setSelected }) {
  const handleClickOption = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <OptionWrapper>
      {display.map((item) => (
        <li
          role="presentation"
          className="option"
          key={item.id}
          onClick={() => {}}
          onKeyDown={(e) => handleClickOption(e)}
        >
          {item.value}
        </li>
      ))}
    </OptionWrapper>
  );
}

function DropDown({ display }) {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selected, setSelected] = useState(display[0].value);

  const handlerOnClickDropDown = () => {
    setDropdownView(!isDropdownView);
  };

  return (
    <div>
      <DropdownLabel type="button" onClick={handlerOnClickDropDown}>
        <div className="label">{selected}</div>
        {isDropdownView ? (
          <img className="icon" src={arrowTop} alt="화살표" />
        ) : (
          <img className="icon" src={arrowDown} alt="화살표" />
        )}
      </DropdownLabel>
      {isDropdownView ? (
        <OptionList display={display} setSelected={setSelected} />
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
