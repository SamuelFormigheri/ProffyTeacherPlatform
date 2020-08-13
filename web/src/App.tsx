import React from 'react';
import './assets/styles/global.css';

//#region Pages
import Routes from './routes';
//#endregion

import ThemeSwitcher from '../src/components/ThemeSwitcher';

function App() {
  return (  
    <> 
      <ThemeSwitcher />
      <Routes />
    </>
  );
}

export default App;
