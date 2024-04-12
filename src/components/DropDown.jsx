import { useState } from 'react';
import { styled } from 'styled-components';
import arrowTop from '../assets/arrow_top.svg';
import arrowDown from '../assets/arrow_right.svg';

function OptionList({ display }) {
  return (
    <div>
      {display.map((item) => {
        return (
          <li className="options" key={item.id}>
            {item.value}
          </li>
        );
      })}
    </div>
  );
}

function DropDown({ display }) {
  const [isDropdownView, setDropdownView] = useState(false);

  const handlerOnClickDropDown = () => {
    setDropdownView(!isDropdownView);
  };

  return (
    <div>
      <label onClick={handlerOnClickDropDown}>
        <button type="button">{display[0].value}</button>
        <img className="icon" src={arrowDown} alt="화살표" />
      </label>
      {isDropdownView ? <OptionList display={display} /> : null}
    </div>
  );
}

export default DropDown;
