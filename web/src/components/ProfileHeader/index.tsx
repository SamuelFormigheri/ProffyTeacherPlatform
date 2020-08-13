import React,{ useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

//#region Pages

//#endregion

//#region Assets
import ExitIcon from '../../assets/images/icons/exit.svg';
import UserIcon from '../../assets/images/icons/user.svg';
//#endregion

import api from '../../services/api';
import './styles.css';

const ProfileHeader: React.FC = () => {
    
//#region Functions
const history = useHistory();
const [userImg, setUserImg] = useState('');
const [userFirstName, setUserFirstName] = useState('');
const [userLastName, setUserLastName] = useState('');

function handleLogout(){
  localStorage.removeItem('proffy-token');
  history.push('/login');
}

useEffect(() => {
  var retrievedObject = localStorage.getItem('proffy-token');
  if(retrievedObject != null){
    var userCredentials = JSON.parse(retrievedObject);
    setUserFirstName(userCredentials[0].first_name);
    setUserLastName(userCredentials[0].last_name);

    api.post('profile',{
      fk_login_id: userCredentials[0].id
    }).then((resp)=> {
      const {data} = resp;
      setUserImg(data[0].avatar);
    });
  }
},[]);
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