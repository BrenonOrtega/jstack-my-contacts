import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);

    div {
        max-width: 450px;
        width: 100%;
        height: 200px;
        padding: 24px;
        border-radius: 4px;
        border: 2px solid ${({ theme }) => theme.colors.primary.lighter};
        background: ${({ theme }) => theme.colors.white};
    }

    //required because of drop shadow in other components e.g Contact Card
    z-index: 1000;
`;

interface MainProps {
    isDangerous?: boolean;
}

export const Main = styled.h2<MainProps>`
    .is-dangerous {
        color: red;
    }
`;

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    justify-content: end;
    gap: 14px;
    .cancel {
        border:none;
        background-color: white;
        color: ${({ theme }) => theme.colors.gray.dark};
        cursor: pointer;
    }
`;