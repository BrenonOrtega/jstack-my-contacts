import { Link } from "react-router";
import styled, { css } from "styled-components";

const sharedStyles = css`
  margin: 0 auto;
  cursor: pointer;
  display: block;
  border: none;
  outline: none;
  background: inherit;
  transition: all 0.4s;
  opacity: 1;

  &:hover {
      box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.primary.light};
      opacity: 0.6;
  }
`;

export const Container = styled.button`${sharedStyles}`;

export const StyledLink = styled(Link)`
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

