import React, { useState, FormEvent, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

//#region Pages
import LoginPageCover from '../../components/LoginPageCover';
import Input from '../../components/Input';
//#endregion

//#region Assets
import HeartIcon from '../../assets/images/icons/purple-heart.svg';
//#endregion
import {useAuth} from '../../hooks/AuthContext';
import './styles.css';

const Login: React.FC = () => {

  //#region Functions
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const rememberMe = useRef({value: false});

  const {signIn} = useAuth();

  function handleSubmitLogin(e: FormEvent){
    e.preventDefault();
    signIn({email: email, password: password, rememberMe: rememberMe.current.value});
  }

  const handleClickRememberMe = useCallback(()=>{
    rememberMe.current.value = !rememberMe.current.value;
  },[]);
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
                <div><input type="checkbox" onClick={handleClickRememberMe}/><label className="checkbox-text"> Remember me</label></div>
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