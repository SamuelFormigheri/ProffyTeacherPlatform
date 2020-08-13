import React from 'react';
import { Link } from 'react-router-dom';

//#region Pages

//#endregion

//#region assets
import SuccessIcon from '../../assets/images/icons/success-check-icon.svg';
//#endregion

import './styles.css';

interface ISuccessMessages{
  title: string;
  message: string;
  button: string;
  redirect: string;
}

const SuccessPage: React.FC<ISuccessMessages> = ({title, message, button, redirect}) => {
  return (
      <div id="success-page-cover">
         <div className="logo-container">
                <img src={SuccessIcon} alt="Logo"/>
                <h2>{title}</h2>
                <h5>{message}</h5>
                <Link to={redirect}><button>{button}</button></Link>
         </div>
      </div>
  );
}

export default SuccessPage;