import React from 'react';
import { Wrapper, StyledHeader, StyledMain } from './MainTemplate.style';
import logo from '../../assets/images/logo.png';

export interface MainTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Wrapper>
      <StyledHeader>
        <img src={logo} alt="Rick and Morty logo" />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </Wrapper>
  );
};

export default MainTemplate;
