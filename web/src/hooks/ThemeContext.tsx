import React, { createContext,useCallback, useContext, useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

interface IThemeContext{
    theme: string;
    switchTheme(): void;
    setInitialTheme() :void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


export const ThemeProvider: React.FC = ({children}) => {

  //#region FUNCTIONS
  const getInitialTheme = useCallback(() => {
      const savedMode = localStorage.getItem('@Proffy:themeName');
      if(savedMode){
          return savedMode;
      }else{
          return "light";
      }
  },[]);
  
  const [themeName, setThemeName] = useState(getInitialTheme());
  
  const switchTheme = useCallback(() => {
      if(themeName === "light"){
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
          document.documentElement.style.setProperty('--toast-color-background',  'rgba(0,0,0,0.75)');
          setThemeName("dark");
        }
        else{
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
          document.documentElement.style.setProperty('--toast-color-background',  'rgba(255,255,255,0.75)');
          setThemeName("light");
        }
        localStorage.setItem('@Proffy:themeName',themeName);
  },[themeName]);
  
  const setInitialTheme = useCallback(()=>{
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
          document.documentElement.style.setProperty('--toast-color-background',  'rgba(255,255,255,0.75)');
          
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
          document.documentElement.style.setProperty('--toast-color-background',  'rgba(0,0,0,0.75)');
        }
        localStorage.setItem('@Proffy:themeName',themeName);
  },[themeName]);
  
  //#endregion

  return (<ThemeContext.Provider value={{theme: themeName, switchTheme, setInitialTheme}}>{children}<ThemeSwitcher /></ThemeContext.Provider>);
}

export function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    if (!context){
        throw new Error('useAuth must be used within an Auth Provider');
    }

    return context;
}