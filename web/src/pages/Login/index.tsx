import React, { useState, FormEvent, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';


import HeartIcon from '../../assets/images/icons/purple-heart.svg';
import Input from '../../components/Input';
import LoginPageCover from '../../components/LoginPageCover';
import {useToast} from '../../hooks/ToastContext';

import {useAuth} from '../../hooks/AuthContext';
import {Container, Fieldset, Footer, Form, DetailsLogin} from './styles';

const Login: React.FC = () => {

  //#region FUNCTIONS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const rememberMe = useRef({value: false});

  const {addToast} = useToast();
  const {signIn} = useAuth();

  const handleSubmitLogin = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    try{
      await signIn({email: email, password: password, rememberMe: rememberMe.current.value});
      addToast({
        id: "Success Message",
        title: "Login Suceeded.",
        description: "Be welcome to Proffy.",
        type: "success"
      });
    }
    catch(err){
      addToast({
        id: "Error Message",
        title: "Error Attempting to Login.",
        description: "Please check your info's and try again.",
        type: "danger"
      });
    }
    
  },[email, password, signIn, addToast]);

  const handleClickRememberMe = useCallback(()=>{
    rememberMe.current.value = !rememberMe.current.value;
  },[]);
  //#endregion
  
  return (
      <Container>
        <LoginPageCover />
          <Form onSubmit={handleSubmitLogin}>
            <Fieldset>
              <legend>Login</legend>
              <Input name="email" label="E-mail" type="email" placeholder="Type your E-mail..." onChange={(e) => setEmail(e.target.value)}/>
              <Input name="password" label="Password" type="password" placeholder="Type your password..." onChange={(e) => setPassword(e.target.value)}/>
              <DetailsLogin>
                <div><input type="checkbox" onClick={handleClickRememberMe}/><label className="checkbox-text"> Remember me</label></div>
                <Link to="/forgot-password"><label className="forgot-password-text">Forgot my password</label></Link>
              </DetailsLogin>
              <button type="submit">Enter</button>
            <Footer>
              <label>No account? <br></br> <Link to="/register">Register</Link></label>
              <label> <img src={HeartIcon} alt="Heart Icon"/> is Free</label>
            </Footer>
            </Fieldset>
          </Form>
      </Container>
  );
}

export default Login;