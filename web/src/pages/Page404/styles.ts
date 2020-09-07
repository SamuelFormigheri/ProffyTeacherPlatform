import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    main {
        margin: 2rem 3.2rem;
        width: 90%;
        padding: 0 10rem;
    }
    main a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        width: 26rem;
        text-decoration: none;
        transition: 280ms;
        &:hover{
            opacity: 0.4;
        }
    }
`;