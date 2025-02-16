import { styled } from "styled-components";

interface ButtonProps {
  $isDangerous?: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 4px 0px;
  height: 52px;
  border-radius: 4px;
  padding: 0px 14px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme, $isDangerous }) =>
    $isDangerous  ? theme.colors.danger.default : theme.colors.primary.main};

  outline: none;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.colors.gray.dark};
  }
`;

export default Button;
