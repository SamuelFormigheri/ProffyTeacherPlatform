import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//#region Pages
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ProfileForm from '../pages/ProfileForm';
//#endregion

//#region Custom Routes
import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';
//#endregion

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Landing}/>
                <PrivateRoute path="/study" exact component={TeacherList}/>
                <PrivateRoute path="/give-classes" exact component={TeacherForm}/>
                <PrivateRoute path="/profile-details" exact component={ProfileForm}/>
                <LoginRoute path="/login" exact component={Login}/>
                <LoginRoute path="/register" exact component={Register}/>
                <LoginRoute path="/forgot-password" exact component={ForgotPassword}/>
                <Route component={Page404}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;