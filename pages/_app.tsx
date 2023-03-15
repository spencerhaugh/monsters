import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import Layout from '@components/Layout';
import { useFetchUser } from '@lib/authContext';
import withDarkMode, { useDarkMode } from 'next-dark-mode';

function App({ Component, pageProps }: AppProps) {

  const { darkModeActive } = useDarkMode();
  const { user } = useFetchUser();

  const siteTheme = createTheme({
    palette: {
      mode: darkModeActive ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={ siteTheme }>
      <Layout user={ user } darkModeActive={ darkModeActive }>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default withDarkMode(App);