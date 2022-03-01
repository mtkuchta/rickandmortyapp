import { StyledNav, StyledLink } from './Nav.style';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <StyledLink to="/">All Characters</StyledLink>
      <StyledLink to="/search">Search Charactes</StyledLink>
    </StyledNav>
  );
};

export default Nav;
