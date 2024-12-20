import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';
import router from '@routes/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
