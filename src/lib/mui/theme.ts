import { createTheme } from '@mui/material/styles'

/**
 * Create a theme instance with custom colors, typography, and components
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#593ac7',
      main: '#593ac7',
      dark: '#593ac7',
    },
    secondary: {
      main: '#ffccf9',
    },
    warning: {
      main: '#f5a623',
    },
    success: {
      main: '#06c270',
    },
    error: {
      light: '#ffcdd2',
      main: '#e9041b',
      dark: '#b71c1c',
    },
    info: {
      main: '#1bbff2',
    },
    text: {
      primary: '#000000',
      secondary: '#5a5a5a',
      disabled: '#e2e2e2',
    },
  },
  typography: {
    fontFamily: '"Roboto", -apple-system, system-ui, sans-serif',
    htmlFontSize: 10,
    h1: {
      fontSize: '2.4rem',
      fontWeight: 'var(--bold)',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'var(--semi-bold)',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'var(--semi-bold)',
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 'var(--semi-bold)',
    },
    h5: {
      fontSize: '1.6rem',
      fontWeight: 'var(--semi-bold)',
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 'var(--semi-bold)',
    },
    body1: {
      fontSize: '1.6rem',
    },
    body2: {
      fontSize: '1.4rem',
    },
  },
  components: {
  },
});

export default theme
