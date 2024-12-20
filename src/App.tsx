import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';

import { theme } from '@styles/theme';
import router from '@routes/router';
import i18n from './i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
