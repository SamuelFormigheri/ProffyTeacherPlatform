import React, { SelectHTMLAttributes, useState, useCallback, useRef  } from 'react';

import {Container} from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
      value: string;
      label: string;
    }>;
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLSelectElement>(null);
  const [isFilled, setIsFilled] = useState(Boolean(inputRef.current?.value));

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true);
  },[]);
  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);
    setIsFilled(Boolean(inputRef.current?.value));
  },[]);
  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
        <label htmlFor={name}>{label}</label>
        <select ref={inputRef} value="" id={name} {...rest} onFocus={()=>{handleInputFocus()}} onBlur={()=>{handleInputBlur()}}>
          <option value="" disabled hidden>Choose one option</option>
          {options.map((option, index) => {
            return <option key={index + option.value} value={option.value}>{option.label}</option>
          })}
        </select>
    </Container>
  );
}

export default Select;