import React from 'react';
import './assets/styles/global.css';

//#region Pages
import GlobalProvider from './hooks/Global';
import Routes from './routes/routes';
//#endregion

function App() {
  return (  
    <> 
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </>
  );
}

export default App;
