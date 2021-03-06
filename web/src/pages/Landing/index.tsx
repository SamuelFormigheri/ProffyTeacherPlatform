import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//#region Pages
import ProfileHeader from '../../components/ProfileHeader';
//#endregion

//#region Assets
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
//#endregion

import api from '../../services/api';

import {Container, ContainerContent, HeroImg, LogoContainer, ButtonsContainer, TotalConnections} from './styles';


const Landing: React.FC = () => {
    
  //#region Functions
  const [totalConnections, setTotalConnections] = useState(0);
  //O segundo parâmetro define quando executará a função do primeiro parâmetro
  useEffect( () => {
      api.get('connections').then(async response => {
        const total = await response.data.total;
        setTotalConnections(total);
      });
  }, []);
  //#endregion

  return (
    <Container>
        <ContainerContent>
            <ProfileHeader />
            <LogoContainer>
                <img src={LogoImg} alt="Logo"/>
                <h2>Your Platform of Online Studies.</h2>
            </LogoContainer>

            <HeroImg src={LandingImg} alt="Landing" className="hero-image"/>

            <ButtonsContainer>
                <Link to="/study" className="study">
                    <img src={StudyIcon} alt="Study Icon"></img>
                    Study
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={GiveClassesIcon} alt="Classes Icon"></img>
                    Give Classes
                </Link>
            </ButtonsContainer>

            <TotalConnections>
                Total of {totalConnections} connections already made <img src={PurpleHeartIcon} alt="Purple Heart Icon"></img>
            </TotalConnections>
        </ContainerContent>
    </Container>
    );
}

export default Landing;