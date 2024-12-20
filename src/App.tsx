import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Text from '@components/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Text as={'h1'} color="brand">Hello H1</Text>
      <Text as={'h2'} color='black'>Hello H2</Text>
      <Text as={'h3'} color="darkLight">Hello H3</Text>
      <Text as={'p'} color='dark'>Hello P</Text>
    </ThemeProvider>
  );
}

export default App;
