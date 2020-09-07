import React from 'react';
import { Link } from 'react-router-dom';

//#region Pages

//#endregion

//#region assets
import SuccessIcon from '../../assets/images/icons/success-check-icon.svg';
//#endregion

import {Container, LogoContainer} from './styles';

interface ISuccessMessages{
  title: string;
  message: string;
  button: string;
  redirect: string;
}

const SuccessPage: React.FC<ISuccessMessages> = ({title, message, button, redirect}) => {
  return (
      <Container>
         <LogoContainer>
                <img src={SuccessIcon} alt="Logo"/>
                <h2>{title}</h2>
                <h5>{message}</h5>
                <Link to={redirect}><button>{button}</button></Link>
         </LogoContainer>
      </Container>
  );
}

export default SuccessPage;