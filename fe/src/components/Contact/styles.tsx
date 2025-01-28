import { styled } from "styled-components";

export const Container = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px;
    border-color: ${({ theme }) => theme.colors.gray.default};
    border-style: solid;
    border-radius: 4px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};

    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3))
`;

export const ContactHeader = styled.div`
    display: flex;
    align-items: bottom;
    gap: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.gray.black};
    font-size: 1.2rem;   
    font-weight: bold;
    
    .contact-source {
        color: ${({ theme }) => theme.colors.primary.dark};
        border: 2px solid ${({ theme }) => theme.colors.primary.dark};
        border-radius: 8px;
        padding: 2px 4px;
        font-size: 0.8rem;
        box-sizing: border-box;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    color: ${({ theme }) => theme.colors.gray.dark};
    font-weight: 400;
`;

export const Buttons = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
