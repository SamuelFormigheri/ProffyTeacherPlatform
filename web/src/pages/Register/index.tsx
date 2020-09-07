import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

//#region Pages
import SuccessPage from '../../components/SuccessPage';
import LoginPageCover from '../../components/LoginPageCover';
import Input from '../../components/Input';
//#endregion

//#region Assets
import BackIcon from '../../assets/images/icons/back.svg';
//#endregion

import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';
import {Container,Form,Fieldset} from './styles';

const Register: React.FC = () => {

  //#region Functions
  const [success, setSuccess] = useState(false);

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {addToast} = useToast();

  function validateFields(){
    if(password.length > 8 && email.length > 8 && first_name.length > 2 && last_name.length > 2){
      return true;
    }else{
      return false;
    }
  }

  function handleSubmitRegister(e: FormEvent){
    e.preventDefault();
    if(validateFields()){
      api.post('register',{
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      }).then(()=>{
        setSuccess(true);
      }).catch((e)=>{
        addToast({
          id: "Error Message",
          title: "Error.",
          description: e,
          type: "danger"
        });
      })
    }
  }
  //#endregion

  return (
      <Container>
          { success && <SuccessPage title="Registration Completed" message="Now you are part of the Proffy platform. Have a great experience" button="Login" redirect="/login"/> }
          { success ? "" :
            <><Form onSubmit={handleSubmitRegister}>
              <Fieldset>
                <legend>Register</legend>
                <Input name="name" label="First Name" placeholder="Type your First Name..." onChange={(e) => setFirst_name(e.target.value)}/>
                <Input name="lastname" label="Last Name" placeholder="Type your Last Name..." onChange={(e) => setLast_name(e.target.value)}/>
                <Input name="email" label="E-mail" type="email" placeholder="Type your E-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <Input name="password" label="Password" type="password" placeholder="Type your password..." onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Complete Registration</button>
                  <Link to="/login"> <img src={BackIcon} alt="Back Icon"/></Link>
              </Fieldset>
            </Form>
           <LoginPageCover /></>}       
      </Container>
  );
}

export default Register;