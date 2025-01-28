import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
        font-weight: bolder;
        font-size: 24px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.dark};
        border: 2px solid ${({ theme }) => theme.colors.primary.dark};
        border-radius: 8px;
        padding: 8px 16px;
        transition: all 0.3s;
        box-shadow: 0px 1px 2px rgba(2, 3, 240, 0.4);

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary.dark};
            color: ${({ theme }) => theme.colors.background};
        }
    }
`;

export const StyledLine = styled.hr`
    margin: 20px 0;
    border: none; 
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray.default}; /* Add custom styling */
    width: 100%;
`;

export const Orderer = styled.button`
    background: ${({ theme }) => theme.colors.background};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: inherit;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
   
    &:hover { 
        opacity: 0.7;
    }
    
    
    img {
        transition: all 0.3s ease-in-out;
    }
    
    .orderer-clicked {
        rotate: 180deg;
    }
`;