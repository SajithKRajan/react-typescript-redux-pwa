import './App.css';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { History } from 'history';
import { ApplicationState } from './store';

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}



const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

function App({ store, history }: MainProps) {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <MainRoutes></MainRoutes>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
