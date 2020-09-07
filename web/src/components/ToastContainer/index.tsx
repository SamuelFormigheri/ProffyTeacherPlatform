import React from 'react';
import {useTransition} from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';

interface IToastMessage{
  id: string;
  type?: string;
  title: string;
  description?: string;
}

interface IToastContainer{
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainer> = ({messages}) => {
  const messagesWithTransitions = useTransition(messages, (message) => message.id, 
    { 
      from : { right: '-120%', opacity: 0},
      enter: { right: '0%', opacity: 1},
      leave: { right: '-120%', opacity: 0}
    });

  return (
      <Container>
          {messages.length > 0 && messagesWithTransitions.map(({item, key, props}) => {
            return(
              <Toast key={key} message={item} style={props} />
            );
          })}
      </Container>
  );
}

export default ToastContainer;