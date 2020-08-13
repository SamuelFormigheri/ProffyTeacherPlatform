import React, { TextareaHTMLAttributes } from 'react';

//#region Pages

//#endregion

//#region Assets

//#endregion

import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;