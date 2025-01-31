import { styled } from "styled-components";

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;

    input {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.gray.darkest};
        
        width: 100%;
        height: 40px;
        // When setting width: 100%, adding
        // padding will make the input larger than the parent container.
        // adding box-sizing will make the padding be included in the width.
        padding: 0px 15px;
        box-sizing: border-box;
        
        border: none;
        border-radius: 20px;
        outline: none;


        filter: drop-shadow(0px, 4px, 10px, rgba(2, 3, 240, 0.4));
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.gray.dark};
        }
    }
   
`;