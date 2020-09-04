import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

//#region Pages
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
//#endregion

//#region Assets
import warningIcon from '../../assets/images/icons/warning.svg';
//#endregion
import {useAuth} from '../../hooks/AuthContext';
import api from '../../services/api';
import './styles.css';

const ProfileForm: React.FC = () => {

  //#region Functions
  const history = useHistory();
  const {user} = useAuth();
  const [fk_login_id, setFk_login_id] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [avatarBackgroundImage, setAvatarBackgroundImage] = useState('');

  function validateFields(){
    if(avatar.length > 10 && bio.length > 10 && whatsapp.length > 10){
      return true;
    }else{
      return false;
    }
  }


  function handleEditProfile(e: FormEvent){
    e.preventDefault();
    if(validateFields()){
      api.post('update-profile',{
        avatar: avatar,
        bio: bio,
        whatsapp: whatsapp,
        fk_login_id: fk_login_id
      }).then(()=>{
        history.push('/');
      }).catch(()=>{
        alert('Erro no cadastro');
      })
    }
  }

  useEffect( () => {
      setName(user.first_name + ' ' + user.last_name);
      setFk_login_id(user.id.toString());

      api.post('profile',{
        fk_login_id: user.id
      }).then((resp)=> {
        const {data} = resp;
        if(data[0].avatar != null){
          setAvatar(data[0].avatar);
          setAvatarBackgroundImage(data[0].avatar);
        }
        if(data[0].whatsapp != null)
          setWhatsapp(data[0].whatsapp);
        if(data[0].bio != null)
          setBio(data[0].bio);
      });      
  },[user]);
  //#endregion

  return (
    <div id="page-profile-form" className="container">
        <PageHeader 
          title={name}
          description="Profile details"
          image={avatarBackgroundImage}/>
        <main>
          <form onSubmit={handleEditProfile}>
          <fieldset>
            <legend>Your Personal Data</legend>
            <Input name="name" label="Name" placeholder="Type your Full Name..." value={name} disabled/>
            <Input name="avatar" label="Avatar" placeholder="Type the url of your Avatar Image..." value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
            <Input name="whatsapp" label="WhatsApp" placeholder="Type the number of your phone to further contact..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
            <Textarea name="bio" label="Biography" value={bio} onChange={(e) => setBio(e.target.value)}/>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Warning Icon"/>
              Important! <br />
              Fill in all the details
            </p>
            <button type="submit">
              Save Changes
            </button>
          </footer>
          </form>
        </main>
    </div>
  );
}

export default ProfileForm;