import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 3rem;
`;

export const Day = styled.div`
    display:flex;
    flex-direction: column;
    width: 12rem;
    height: 12rem;
    box-sizing: border-box;
    border: 1px solid var(--color-line-in-white);
    padding: 0.8rem;
    border-radius: 10%;
    background-color: var(--color-box-footer);  

    span{
        font: 700 1.4rem Archivo;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-text-base);
    }

    label{
        font:500 1.2rem Poppins;
        line-height: 2.0rem;
        color: var(--color-text-complement);
    }

`;
