import styled,{keyframes} from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Form = styled.form`
    display:flex;
    align-items: center;
    height:100vh;

    animation: ${appearFromLeft} 1s;
    
    a{
        transition: 280ms;

        &:hover{
            opacity: 0.5;
        }

        img{
            margin-top: 5rem;
        }
    }
`;

export const Fieldset = styled.fieldset`
    flex: 1;
    border: 0;
    padding: 0 10rem;

    legend {
        font: 700 3.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
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
        transition: 280ms;
        margin-top: 3.2rem; 
        &:hover{
            background-color: var(--color-secondary-dark);
            font: 700 1.8rem Archivo;
        }
    }
`;