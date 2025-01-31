import { styled } from "styled-components";

const Container = styled.div`
    div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        gap: 10px;
        font-family: ${({ theme }) => theme.fonts.primary};
    }
    
    img {
        box-sizing: border-box;
        rotate: 270deg;
    }
`;

export { Container };