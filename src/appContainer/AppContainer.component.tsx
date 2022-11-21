import {ComponentPropsWithoutRef, useState} from 'react';
import * as FA from 'react-icons/ai';

import { Menu } from './Menu.component';

import {AppContainerStyled, CloseMenuButtonStyled, MenuButtonStyled} from './AppContainer.styles';

export interface AppContainerProps extends ComponentPropsWithoutRef<'div'> {}

export function AppContainer({ children, ...props }: AppContainerProps) {
  const [mouseOverButton, setMouseOverButton] = useState(false)
  const [mouseOverMenu, setMouseOverMenu] = useState(false)
  const [menuOpenedOnClick, setMenuOpenedOnClick] = useState(false)

  const isMenuOpened = mouseOverButton || mouseOverMenu || menuOpenedOnClick;

  return (
    <AppContainerStyled {...props}>
      <Menu
        setOpenMenu={setMenuOpenedOnClick}
        setMouseOverButton={setMouseOverButton}
        setMouseOverMenu={setMouseOverMenu}
        isMenuOpened={isMenuOpened}
        menuOpenedOnClick={menuOpenedOnClick}
      />
      <MenuButtonStyled
        onMouseLeave={() => setMouseOverButton(false)}
        onMouseEnter={() => setMouseOverButton(true)}
        onClick={() =>  setMenuOpenedOnClick(true)}
        isMenuOpened={isMenuOpened}
      >
        <FA.AiOutlineMenu />
      </MenuButtonStyled>
      <section>{children}</section>
    </AppContainerStyled>
  );
}
