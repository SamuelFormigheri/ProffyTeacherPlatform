import styled from 'styled-components';

export const Container = styled.header`
    max-width: 700px;
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:3rem;

    a{
        text-decoration: none;
    }

    @media (min-width: 1100px){
        &{
            max-width: 1100px;
            width: 90vw;
        }
    }
`;

export const ProfileDetails = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    transition: 280ms;

    &:hover{
        opacity: 0.5;
    }

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    span{
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-text-complement);
        margin-left: 1.5rem;
    }
`;

export const ExitButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 20%;
    background-color: var(--color-primary); 
    cursor: pointer;
    transition: 280ms;

    &:hover{
        opacity: 0.5;
    }
    img{
        width: 3rem;
        height: 3rem;
    }
`;