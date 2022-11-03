import styled from 'styled-components';

import { NavBarItemProps } from './navbar.types';

const NavbarContainer = styled.ul`
  width: 5rem;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  list-style: none;
`;

const NavbarItem = styled.li<NavBarItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey.light};
  background-color: ${({ $active = false, theme }) =>
    $active ? theme.palette.primary.main : 'inherit'};
  cursor: pointer;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ theme }) => theme.palette.common.white};
  }
`;

export default { NavbarContainer, NavbarItem };
