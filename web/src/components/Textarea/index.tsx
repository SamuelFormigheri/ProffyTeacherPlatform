import React, { useState, useRef, useCallback, TextareaHTMLAttributes } from 'react';


//#endregion
import {Container} from './styles';
//import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
        <textarea ref={inputRef} id={name} {...rest} onFocus={()=>{handleInputFocus()}} onBlur={()=>{handleInputBlur()}}/>
    </Container>
  );
}

export default Textarea;