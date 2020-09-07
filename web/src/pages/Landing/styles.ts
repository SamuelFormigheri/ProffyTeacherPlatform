import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display:flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);
`;

export const ContainerContent = styled.div`
    margin-top: 8rem;
    
    @media (min-width: 1100px){
        max-width: 1100px;
        display: grid;
        margin-top: 0;
        /* fr - ocupa o espaço que sobrar - é uma fração do espaço*/
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            "logo    img     img"
            "buttons buttons total";       
    }
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin: 0 !important;

    img{
        height: 10rem;

        @media (min-width: 1100px){
            height:100%;
        }
    }
    h2{
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin: 0 !important;

        @media (min-width: 1100px){
            text-align: initial;
            margin-top:0.8rem;
        }
    }

    @media (min-width: 1100px){
        grid-area: logo;
        align-self: center;
        text-align: left;
    }
`;

export const HeroImg = styled.img`
    width:100%;

    @media (min-width: 1100px){        
        grid-area: img;
        /*Sempre alinhar a imagem no final*/
        justify-self: end;
    }
`;

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 0.8rem !important;
    a{
        width: 40%;
        height: 10.4rem;
        border-radius:0.8rem;

        font:700 2.0rem Archivo;

        display:flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);
        transition: 280ms;

        background: var(--color-primary-lighter);

        @media (min-width: 1100px){                               
            width: 30rem;
        }
        
        &:hover{
            background: var(--color-primary-light);
        }

        &:first-child{
            margin-right: 1.6rem;
            background: var(--color-secondary);
            &:hover{
                background: var(--color-secondary-dark);
            }
        }
        
        img{
            width: 4rem;

            @media (min-width: 1100px){                               
                margin-right: 2.0rem;
            }
        }
    }
    
    @media (min-width: 1100px){                
        grid-area: buttons;
        justify-content: flex-start;
        margin: 3.2rem 0;
    }
`;

export const TotalConnections = styled.span`
    font-size: 1.4rem;

    display:flex;
    align-items: center;
    justify-content: center;
    
    img{
        margin-left: 0.8rem;
    }

    @media (min-width: 1100px){                               
        grid-area: total;
        justify-self: end;
    }
`;