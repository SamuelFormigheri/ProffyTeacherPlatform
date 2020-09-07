import styled from 'styled-components';

export const Container = styled.img`
    position: absolute;
    height: 3rem;
    top: 0;
    right: 0;
    align-self: flex-end;
    transition: 280ms;
    opacity: 0.8;

    &:hover{
        opacity: 0.4;
        transform: scale(1.2) translateY(0.2rem) translateX(-12%);
    }
`;

