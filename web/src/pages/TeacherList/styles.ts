import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    @media (min-width: 700px){
        max-width: 100%;
    }
`;

export const Form = styled.form`
    margin-top:3.2rem;
    label{
        color: var(--color-text-in-primary);
    }

    button{
        color: transparent !important;
        background-color: transparent !important;
        border: none !important;
        img{
            position: absolute;
            height: 3rem;
            align-self: flex-end;
            transition: 280ms;
            opacity: 0.8;
            &:hover{
                opacity: 0.4;
                transform: scale(1.2);
            }
        }
    }
    @media (min-width: 700px){
        display: grid;
        grid-template-columns: 3fr 3fr 3fr 1fr;
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px){
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
    }
`;
