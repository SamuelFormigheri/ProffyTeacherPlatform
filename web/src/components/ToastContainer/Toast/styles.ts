import styled, {css} from 'styled-components';
import {animated} from 'react-spring';

interface IToastProps{
    type?: string;
    hasdescription: string;
}

export const Container = styled(animated.div)<IToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px var(--toast-color-background);

  display:flex;

  & + div{
      margin-top: 10px;
  }

  background: var(--toast-color-background);
  color: var(--toast-info-color);

  ${props => props.type === 'success' && css`
    color: var(--toast-success-color);
  `
  }

  ${props => props.type === 'danger' && css`
    color: var(--toast-danger-color);
  `
  }

  > svg{
    margin: 4px 12px 0 0;
  }

  div{
      flex: 1;

      p{
          margin-top: 4px;
          font-size: 14px;
          opacity: 0.8;
          line-height: 20px;
      }
  }

  button{
      position: absolute;
      right: 8px;
      top: 15px;
      opacity: 0.6;
      border: 0;
      background: transparent;
      color: inherit;
  }

  ${props => props.hasdescription === "false" && css`
    align-items: center;

    svg{
        margin-top: 0;
    }
  `}
`;

