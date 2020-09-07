import React from 'react';
import { Link } from 'react-router-dom';


//#region Assets
import BackIcon from '../../assets/images/icons/back.svg';
import LogoImg from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/icons/user.svg';
//#endregion

import {Container, TopBarContainer, HeaderContent} from './styles';

interface IPageHeaderProps {
    title: string;
    description?: string;
    image?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <Container>
        <TopBarContainer>
            <Link to="/">
            <img src={BackIcon} alt="Back Icon"></img>
            </Link>
            <img src={LogoImg} alt="Logo"></img>
        </TopBarContainer>

        <HeaderContent>
            {props.image && <img id="user-icon" src={props.image ? props.image : UserIcon} alt="Profile"></img>}
            <strong>{props.title}</strong>
              {props.description && <p>{props.description}</p>}
            {props.children}
        </HeaderContent>
    </Container>
  );
}

export default PageHeader;