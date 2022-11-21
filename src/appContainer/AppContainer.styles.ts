import styled from 'styled-components';

export const AppContainerStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  > section {
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

export const MenuButtonStyled = styled.button<{ isMenuOpened: boolean }>`
  display: flex;
  justify-content: flex-start;
  padding: 6px;
  align-items: center;
  height: 48px;
  background: #15171c;
  border: none;
  color: #fff;
  font-size: 36px;
  transition-property: width;
  transition-duration: 0.6s;
  width: ${props => props.isMenuOpened ? '250px' : '48px'};
  z-index: 10;
  transition-delay: 0.01s;

  &:hover,
  &:active{
    width: 250px;
    transition-property: width;
    transition-duration: 0.6s;
  }
`;

export const CloseMenuButtonStyled = styled.button`
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
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;
`;
