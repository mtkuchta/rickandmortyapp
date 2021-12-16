import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

const AppProviders = ({ children }) => {
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
