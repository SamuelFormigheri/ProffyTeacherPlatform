import React, { SelectHTMLAttributes } from 'react';

//#region Pages

//#endregion

//#region Assets

//#endregion

import './styles.css';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
      value: string;
      label: string;
    }>;
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>
          <option value="" disabled hidden>Choose one option</option>
          {options.map((option, index) => {
            return <option key={index + option.value} value={option.value}>{option.label}</option>
          })}
        </select>
    </div>
  );
}

export default Select;