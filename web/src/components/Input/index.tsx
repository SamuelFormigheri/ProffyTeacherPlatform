import React, { InputHTMLAttributes } from 'react';

//#region Pages

//#endregion

//#region Assets

//#endregion

import './styles.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<IInputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;