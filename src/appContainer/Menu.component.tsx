import { useLocation } from "react-router-dom";
import * as FA from 'react-icons/ai';
import { MenuButtonStyled, NavbarContainer, StyledLink } from './Menu.styles'

interface MenuProps {
  setMouseOverButton: (visible: boolean) => void;
  setMouseOverMenu: (visible: boolean) => void;
  setOpenMenu: (visible: boolean) => void;
  isMenuOpened: boolean;
  menuOpenedOnClick: boolean;
}

export interface StyledLinkProps {
  isActive: boolean;
  to: string;
}

const menuConfiguration = [
  { label: 'First', path: '/first' },
  { label: 'Second', path: '/second' },
]

export function Menu({ setOpenMenu, setMouseOverButton, setMouseOverMenu, isMenuOpened, menuOpenedOnClick }: MenuProps) {
  const location  = useLocation();
  const isActivePath = (pathname: string) => location.pathname === pathname;

  // TODO: implement menu component according to the specification in README
  return (
    <NavbarContainer isMenuOpened={isMenuOpened} onMouseEnter={() => setMouseOverMenu(true)} onMouseLeave={() => setMouseOverMenu(false)}>
      <MenuButtonStyled onClick={() => {
        setMouseOverButton(false)
        setMouseOverMenu(false)
        setOpenMenu(false)
      }}>
        <FA.AiOutlineClose />
      </MenuButtonStyled>
      {menuConfiguration.map(({ label, path}) => (
        <StyledLink key={path} to={path} isActive={isActivePath(path)}>{label}</StyledLink>
      ))}
    </NavbarContainer>
  );
}
