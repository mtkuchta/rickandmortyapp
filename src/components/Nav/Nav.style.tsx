import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 3em;
  font-family: 'Shadows Into Light';
  font-weight: bold;
  letter-spacing: 2px;
  color: black;
  margin: 0 20px;
  padding: 5px 20px;
  transition: 0.4s;

  &:hover {
    transform: translateY(-5px);
    color: darkgreen;
  }

  &.active {
    color: darkgreen;
  }
`;
