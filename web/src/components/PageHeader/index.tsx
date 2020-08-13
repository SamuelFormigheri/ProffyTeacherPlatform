import React from 'react';
import { Link } from 'react-router-dom';

//#region Pages

//#endregion

//#region Assets
import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';
import UserIcon from '../../assets/images/icons/user.svg';
//#endregion

import './styles.css';

interface IPageHeaderProps {
    title: string;
    description?: string;
    image?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
            <img src={BackIcon} alt="Back Icon"></img>
            </Link>
            <img src={LogoImg} alt="Logo"></img>
        </div>

        <div className="header-content">
            {props.image && <img id="user-icon" src={props.image ? props.image : UserIcon} alt="Profile"></img>}
            <strong>{props.title}</strong>
              {props.description && <p>{props.description}</p>}
            {props.children}
        </div>
    </header>
  );
}

export default PageHeader;