import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import QueryProvider from './QueryProvider';

export interface AppProvidersProps {
  children: React.ReactElement;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <GlobalStyle />
          {children}
        </QueryProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
