import React from 'react';
import './assets/styles/global.css';

//#region Pages
import GlobalProvider from './hooks/Global';
import Routes from './routes/routes';
//#endregion

import ThemeSwitcher from '../src/components/ThemeSwitcher';

function App() {
  return (  
    <> 
      <GlobalProvider>
        <ThemeSwitcher />
        <Routes />
      </GlobalProvider>
    </>
  );
}

export default App;
