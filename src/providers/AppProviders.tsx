import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

export interface AppProvidersProps {
  children: JSX.Element | JSX.Element[];
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
