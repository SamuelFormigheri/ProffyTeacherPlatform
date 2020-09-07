import React, { InputHTMLAttributes, useState, useCallback, useRef } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<IInputProps> = ({ label, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
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
        <input ref={inputRef} type="text" id={name} {...rest} onFocus={()=>{handleInputFocus()}} onBlur={()=>{handleInputBlur()}}/>
    </Container>
  );
}

export default Input;
