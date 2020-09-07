import React, { useEffect } from 'react';
import {FiAlertCircle, FiXCircle, FiInfo, FiCheckCircle} from 'react-icons/fi';

import { useToast } from '../../../hooks/ToastContext';
import { Container } from './styles';

interface IToastMessage{
    id: string;
    type?: string;
    title: string;
    description?: string;
  }
  
interface IToastContainer{
  message: IToastMessage;
  style: object;
}

const Toast: React.FC<IToastContainer> = ({message, style}) => {
  const { removeToast } = useToast();

  useEffect(()=>{
    const timer = setTimeout(() => {
        removeToast(message.id);
    }, 3000);

    return () => {
        clearTimeout(timer);
    };

  }, [removeToast, message]);

  return (
      <Container type={message.type} hasdescription={message.description !== "" ? "true" : "false"} style={style}>
           {message.type && message.type === "danger" ? <FiAlertCircle size={24} /> :
            message.type && message.type === "success" ? <FiCheckCircle size={24} /> : 
            <FiInfo size={24} />}
           <div>
               <strong>{message.title}</strong>
               {message.description && <p>{message.description}</p>}
           </div>
           <button onClick={() =>{ removeToast(message.id) }}>
               <FiXCircle size={18} />
           </button>
      </Container>
  );
}

export default Toast;