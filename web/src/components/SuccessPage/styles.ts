import styled from 'styled-components';

import successImg from '../../assets/images/success-background.svg';

export const Container = styled.div`
    color: var(--color-text-in-primary);
    background: var(--color-primary);
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: url(${successImg});
    height: 100vh;
    width: 100vw;
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
        font-size: 4.8rem;
        line-height: 4.6rem;
        margin-top:0.8rem;
    }
    h5{
        text-align: center;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 4.6rem;
        margin-top:0.8rem;
    }

    button{
        width: 100%;
        height: 5.6rem;
        background: var(--color-secondary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display:flex;
        align-items:center;
        justify-content: center;
        text-decoration: none;
        transition: 280ms;
        margin-top: 3.2rem; 
        &:hover{
            background-color: var(--color-secondary-dark);
            font: 700 1.8rem Archivo;
        }
    }
    a{
        text-decoration: none;
    }
`;

