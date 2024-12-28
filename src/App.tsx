import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { ScreenProvider } from '@context/ScreenContextProvider';

import { theme } from '@styles/theme';
import router from '@routes/router';
import i18n from './i18n';
import { ProjectProvider } from '@context/ProjectContextProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n} />
      <ScreenProvider>
        <ProjectProvider>
          <RouterProvider router={router} />
        </ProjectProvider>
      </ScreenProvider>
    </ThemeProvider>
  );
}

export default App;
