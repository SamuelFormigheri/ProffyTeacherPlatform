import React from 'react';

//#region Assets
import LogoImg from '../../assets/images/logo.svg';
//#endregion
import {Container, LogoContainer} from './styles';

const LoginPageCover: React.FC = () => {
  return (
      <Container>
         <LogoContainer>
                <img src={LogoImg} alt="Logo"/>
                <h2>Your Platform of Online Studies.</h2>
          </LogoContainer>
      </Container>
  );
}

export default LoginPageCover;