import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux'
import createStore from './Store'
import SnackBar from './Enhancements/SnackBar'
import { BrowserRouter } from 'react-router-dom'

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Grid className="App" container>
          <CssBaseline />
          <SnackBar />
        </Grid>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
