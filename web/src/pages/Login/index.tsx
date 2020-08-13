import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

//#region Pages
import LoginPageCover from '../../components/LoginPageCover';
import Input from '../../components/Input';
//#endregion

//#region Assets
import HeartIcon from '../../assets/images/icons/purple-heart.svg';
//#endregion

import api from '../../services/api';
import './styles.css';

const Login: React.FC = () => {

  //#region Functions
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateFields(){
    if(password.length > 8 && email.length > 8){
      return true;
    }else{
      return false;
    }
  }

  function handleSubmitLogin(e: FormEvent){
    e.preventDefault();
    if(validateFields()){
      api.post('login',{
        email: email,
        password: password
      }).then((resp)=>{
        const {data} = resp;
        localStorage.setItem('proffy-token', JSON.stringify(data));
        history.push('/');
      }).catch((e)=>{
        console.log(e);
      });
    }
  }
  //#endregion
  
  return (
      <div id="login">
        <LoginPageCover />
          <form id="login-form" onSubmit={handleSubmitLogin}>
            <fieldset>
              <legend>Login</legend>
              <Input name="email" label="E-mail" type="email" placeholder="Type your E-mail..." onChange={(e) => setEmail(e.target.value)} />
              <Input name="password" label="Password" type="password" placeholder="Type your password..." onChange={(e) => setPassword(e.target.value)} />
              <div id="details-login">
                <div><input type="checkbox" /><label className="checkbox-text"> Remember me</label></div>
                <Link to="/forgot-password"><label className="forgot-password-text">Forgot my password</label></Link>
              </div>
              <button type="submit">Enter</button>
            <footer>
              <label>No account? <br></br> <Link to="/register">Register</Link></label>
              <label> <img src={HeartIcon} alt="Heart Icon"/> is Free</label>
            </footer>
            </fieldset>
          </form>
      </div>
  );
}

export default Login;