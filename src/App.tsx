import './App.css';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Layout from './common/components/layout';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout />
        </CssBaseline></ThemeProvider></StyledEngineProvider>
  );
}

export default App;
