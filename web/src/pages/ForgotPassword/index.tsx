import React from 'react';
import { Link } from 'react-router-dom';

//#region Pages
import LoginPageCover from '../../components/LoginPageCover';
import Input from '../../components/Input';
//#endregion

//#region Assets
import BackIcon from '../../assets/images/icons/back.svg';
//#endregion

import './styles.css';
const ForgotPassword: React.FC = () => {
  return (
      <div id="forgot-password">
          <form id="forgot-password-form">
            <fieldset>
              <legend>So you forgot your password?</legend>
              <span>Don't worry, we will fix it.</span>
              <Input name="email" label=" " type="email" placeholder="Type your E-mail..." />
              <button type="submit">Send</button>
              <Link to="/login"> <img src={BackIcon} alt="Back Icon"/></Link>
            </fieldset>
          </form>
        <LoginPageCover />
      </div>
  );
}

export default ForgotPassword;