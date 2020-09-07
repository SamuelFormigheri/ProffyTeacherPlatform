import styled from 'styled-components';

import signInBackgroundImg from '../../assets/images/success-background.svg';

export const Container = styled.div`
    color: var(--color-text-in-primary);
    background: var(--color-primary);
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
    background-image: url(${signInBackgroundImg});
`;

export const LogoContainer = styled.div`
  text-align:center;
  margin-bottom: 3.2rem;

    img{
      height: 10rem;
    }

    h2{
      text-align: center;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top:0.8rem;
    }

`;
