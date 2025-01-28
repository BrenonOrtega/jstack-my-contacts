import styled from "styled-components";

export const Container = styled.button`
    margin: 0 auto;
    cursor: pointer;
    display: block;
    border: none;
    outline: none;
    background: inherit;
    transition: all 0.4s;
    opacity: 1;

    &:hover {
        box-shadow: 0px 1px 1px 0px ${({theme}) => theme.colors.primary.light};
        opacity: 0.6;
    }
`;