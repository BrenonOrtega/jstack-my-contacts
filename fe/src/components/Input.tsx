import { css, styled } from "styled-components";

export const NewContactStyles = css`
  border-style: solid;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-sizing: border-box;
  padding: 4px;
  outline: none;
  height: 52px;
  width: 100%;
  max-width: 389%;
  flex-shrink: 0;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors.white};
`;

interface InputProps {
  error?: boolean;
}

export default styled.input<InputProps>`
  ${NewContactStyles}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  
  & + & {
    margin-top: 14px;
  }


  ${({ theme, error }) => error && css`
    border: 2px solid ${theme.colors.danger.default} !important;
    color: ${theme.colors.danger.default};
  `}
`;
