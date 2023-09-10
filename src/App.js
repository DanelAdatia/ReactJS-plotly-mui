import { Suspense } from 'react';
import Router from './Router';
import Spinner from './components/Spinner';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Spinner />}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;

export let theme = createTheme({
  palette: {
    blue: {
      main: '#0E4C92',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
