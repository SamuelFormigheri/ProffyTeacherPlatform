import styled, {css} from 'styled-components';

interface IContainerProps{
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
    position: relative;

    select{
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background-color: var(--color-input-background);
        border: 2px solid var(--color-line-in-white);
        ${props => props.isFocused && css`
            border-color: var(--color-primary-light);   
        `}

        ${props => props.isFilled && css`
            border-color: var(--color-primary-light);   
        `}

        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
    }

    &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: "";
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }

    
    label{
        font-size: 1.4rem;
    }

`;




