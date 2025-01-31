import styled from "styled-components";

const Container = styled.form`
    margin-top: 16px;

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

    button {
        margin-top: 24px;
        width: 100%;
    }
`;

export { Container }; 