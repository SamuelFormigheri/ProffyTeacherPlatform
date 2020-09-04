import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//#region Assets
import ExitIcon from '../../assets/images/icons/exit.svg';
import UserIcon from '../../assets/images/icons/user.svg';
//#endregion

import {useAuth} from '../../hooks/AuthContext';
import api from '../../services/api';
import './styles.css';

const ProfileHeader: React.FC = () => {
    
//#region Functions
const [userImg, setUserImg] = useState('');
const [userFirstName, setUserFirstName] = useState('');
const [userLastName, setUserLastName] = useState('');

const {user, signOut} = useAuth();

function handleLogout(){
  signOut();
}

useEffect(() => {
  setUserFirstName(user.first_name);
  setUserLastName(user.last_name);

  api.post('profile',{
    fk_login_id: user.id
  }).then((resp)=> {
    const {data} = resp;
    setUserImg(data[0].avatar);
  }); 
},[user]);
//#endregion

  return (
    <header id="header-profile">
      <Link to="/profile-details">
        <div id="header-profile-details">
          <img src={userImg ? userImg : UserIcon} alt="Profile"></img>
          <span>{userFirstName} {userLastName}</span>
        </div>
      </Link>
      <div id="exit-button" onClick={handleLogout}>
        <img src={ExitIcon} alt="Exit Icon"></img>
      </div>
    </header>
  );
}

export default ProfileHeader;