import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

//#region INTERFACES
interface IUser{
    id:number;
    first_name: string;
    last_name: string;
    email: string;
}

interface ICredentialsData{
    token: string;
    user: IUser;
}

interface ICredentials {
    email: string;
    password: string; 
    rememberMe?: boolean;  
}

interface IAuthContext {
    user: IUser;
    signIn(credentials:ICredentials): Promise<void | Error>;
    signOut(): void;
}

//#endregion

const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthProvider: React.FC = ({children}) => {

//#region FUNCTIONS  
    const getCredentialsFromLocalStorage = useCallback(()=>{
        const token = localStorage.getItem('@Proffy:token');
        const user = localStorage.getItem('@Proffy:user');
        if(token && user)
              return { token, user:JSON.parse(user)}
      
          return {} as ICredentialsData;
    },[])
    
    const [credentialsData, setCredentialsData] = useState<ICredentialsData>(getCredentialsFromLocalStorage);
    
    
    const signIn = useCallback(async({email, password, rememberMe = true})=>{
        const user = await api.post('login',{ email: email, password: password });
        //Alterar para gerar a token via backend
        const token = "bduioqwbeiobryie@!#@!$#wourhowahriubdbiwaegriwaebfuibaew@!#@!$#fbygYSGUSAUS@!#@!$#YGVVFVEWVgsughasui@#";
        
        if(rememberMe){
            localStorage.setItem('@Proffy:token', token);
            localStorage.setItem('@Proffy:user', JSON.stringify(user.data));
        }else{
            sessionStorage.setItem('@Proffy:token', token);
            sessionStorage.setItem('@Proffy:user', JSON.stringify(user.data));
        }
        setCredentialsData({token: token, user: user.data});

    },[]);
    
    const signOut = useCallback(()=>{
        localStorage.removeItem('@Proffy:token');
        localStorage.removeItem('@Proffy:user');
        sessionStorage.removeItem('@Proffy:token');
        sessionStorage.removeItem('@Proffy:user');
    
        setCredentialsData({} as ICredentialsData);
    },[]);
//#endregion

return (<AuthContext.Provider value={{user: credentialsData.user, signIn, signOut}}>{children}</AuthContext.Provider>);
}

export function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    if (!context){
        throw new Error('useAuth must be used within an Auth Provider');
    }

    return context;
}