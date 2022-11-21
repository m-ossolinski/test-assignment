import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { AppRoutes } from './AppRoutes';

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export function App() {
  return (
    <Router>
      <GlobalCss />
      <AppRoutes />
    </Router>
  );
}
