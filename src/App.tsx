import { ThemeProvider } from 'styled-components';
import AppViewWrapper from './components/AppViewWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { theme } from './shared/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppViewWrapper>
          <Header />
          <Main />
          <Footer />
        </AppViewWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
