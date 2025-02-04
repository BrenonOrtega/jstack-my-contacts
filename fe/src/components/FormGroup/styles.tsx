import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  small {
    color: ${({ theme }) => theme.colors.danger.strong};
    font-weight: 600;
  }

  input {
  }
  & + & {
    margin-top: 16px;
  }
`;
