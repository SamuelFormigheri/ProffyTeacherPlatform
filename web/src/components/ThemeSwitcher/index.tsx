import React, {useEffect} from 'react';

//#region Assets
import DarkIcon from '../../assets/images/icons/dark-mode.svg';
//#endregion
import {useTheme} from '../../hooks/ThemeContext';

import {Container} from './styles';

const ThemeSwitcher: React.FC = () => { 
//#region Functions
const {switchTheme, setInitialTheme} = useTheme();

useEffect( () => {
  setInitialTheme();
}, [setInitialTheme]);

//#endregion

  return (<Container src={DarkIcon} alt="Switch Application Theme" onClick={() => {switchTheme()}}/>);
}

export default ThemeSwitcher;