import React, { createContext,useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

interface IToastContextData{
    addToast(message: IToastMessage): void;
    removeToast(id: string): void;
}

interface IToastMessage{
    id: string;
    type?: string;
    title: string;
    description?: string;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export const ToastProvider: React.FC = ({children}) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback((message: Omit<IToastMessage, 'id'>)=>{
    const id = v4();

    const toast = {
        id: id,
        type: message.type,
        title: message.title,
        description: message.description
    };

    setMessages((prevMessages) => [...prevMessages, toast]);
  },[]);

  const removeToast = useCallback((id: string)=>{
    setMessages(messages => messages.filter(message => message.id !== id));
  },[]);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
        {children}
        <ToastContainer messages={messages}/>
    </ToastContext.Provider>
  );
}

export function useToast(): IToastContextData{
    const context = useContext(ToastContext);

    if(!context){
        throw new Error("useToast must be used within a ToastProvider");
    }

    return context;
}