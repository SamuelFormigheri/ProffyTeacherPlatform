import React, {useState, useEffect} from 'react';

//#region Pages

//#endregion

//#region Assets
import DarkIcon from '../../assets/images/icons/dark-mode.svg';
//#endregion

import './styles.css';

const ThemeSwitcher: React.FC = () => {
    
//#region Functions
const [themeName, setThemeName] = useState(getInitialTheme());

function getInitialTheme(){
    const savedMode = localStorage.getItem('themeName');
    if(savedMode){
        return JSON.parse(savedMode);
    }else{
        return "light";
    }
}

useEffect( () => {
    localStorage.setItem('themeName', JSON.stringify(themeName));

    //#region Theme colors definition
    if(themeName === "light"){
        document.documentElement.style.setProperty('--color-background',        '#F0F0F7');
        document.documentElement.style.setProperty('--color-primary-lighter',   '#9871F5');
        document.documentElement.style.setProperty('--color-primary-light',     '#916BEA');
        document.documentElement.style.setProperty('--color-primary',           '#8257E5');
        document.documentElement.style.setProperty('--color-primary-dark',      '#774DD6');
        document.documentElement.style.setProperty('--color-primary-darker',    '#6842C2');
        document.documentElement.style.setProperty('--color-secondary',         '#04D361');
        document.documentElement.style.setProperty('--color-secondary-dark',    '#04BF58');
        document.documentElement.style.setProperty('--color-secondary-darker',  '#036b32');
        document.documentElement.style.setProperty('--color-title-in-primary',  '#FFFFFF');
        document.documentElement.style.setProperty('--color-text-in-primary',   '#D4C2FF');
        document.documentElement.style.setProperty('--color-text-title',        '#32264D');
        document.documentElement.style.setProperty('--color-text-complement',   '#9C98A6');
        document.documentElement.style.setProperty('--color-text-base',         '#6A6180');
        document.documentElement.style.setProperty('--color-line-in-white',     '#E6E6F0');
        document.documentElement.style.setProperty('--color-input-background',  '#F8F8FC');
        document.documentElement.style.setProperty('--color-button-text',       '#FFFFFF');
        document.documentElement.style.setProperty('--color-box-base',          '#FFFFFF');
        document.documentElement.style.setProperty('--color-box-footer',        '#FAFAFC');
      }
      else{
        document.documentElement.style.setProperty('--color-background',        '#000000ee');
        document.documentElement.style.setProperty('--color-primary-lighter',   '#9971f5');
        document.documentElement.style.setProperty('--color-primary-light',     '#916BEA');
        document.documentElement.style.setProperty('--color-primary',           '#000');
        document.documentElement.style.setProperty('--color-primary-dark',      '#774DD6');
        document.documentElement.style.setProperty('--color-primary-darker',    '#6842C2');
        document.documentElement.style.setProperty('--color-secondary',         '#04D361');
        document.documentElement.style.setProperty('--color-secondary-dark',    '#04BF58');
        document.documentElement.style.setProperty('--color-secondary-darker',  '#036b32');
        document.documentElement.style.setProperty('--color-title-in-primary',  '#8257E5');
        document.documentElement.style.setProperty('--color-text-in-primary',   '#D4C2FF');
        document.documentElement.style.setProperty('--color-text-title',        '#916BEA');
        document.documentElement.style.setProperty('--color-text-complement',   '#9C98A6');
        document.documentElement.style.setProperty('--color-text-base',         '#FFFFFF');
        document.documentElement.style.setProperty('--color-line-in-white',     '#333333');
        document.documentElement.style.setProperty('--color-input-background',  '#58585C');
        document.documentElement.style.setProperty('--color-button-text',       '#FFFFFF');
        document.documentElement.style.setProperty('--color-box-base',          '#666666');
        document.documentElement.style.setProperty('--color-box-footer',        '#555555');
      }
    //#endregion

}, [themeName]);

//#endregion

  return (
    <img className="theme-switch" src={DarkIcon} alt="Test Brush" onClick={() => {themeName === "dark" ? setThemeName("light") : setThemeName("dark")}}/>
  );
}

export default ThemeSwitcher;