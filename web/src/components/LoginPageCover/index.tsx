import React from 'react';

//#region Pages

//#endregion

//#region Assets
import LogoImg from '../../assets/images/logo.svg';
//#endregion

import './styles.css';
const LoginPageCover: React.FC = () => {
  return (
      <div id="login-page-cover">
         <div className="logo-container">
                <img src={LogoImg} alt="Logo"/>
                <h2>Your Platform of Online Studies.</h2>
            </div>
      </div>
  );
}

export default LoginPageCover;