import styled from "styled-components";
import {Link} from "react-router-dom";

import { StyledLinkProps } from './Menu.component';

export const NavbarContainer = styled.nav<{ isMenuOpened: boolean }>`
  background: #15171c;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  position: fixed;
  flex-direction: column;
  top: 45px;
  z-index: 10;
  bottom: 0;
  left:  ${props => props.isMenuOpened ? '0' : '-250px'};
  width: 250px;
  transition-property: left;
  transition-duration: 0.6s;
`

export const StyledLink = styled(Link)<StyledLinkProps>`
  background-color: ${props => props.isActive && 'red'};
  padding: 10px 12px;
`

export const MenuButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #15171c;
  width: 48px;
  border: none;
  color: #fff;
  font-size: 36px;
  margin-left: auto;
`;
