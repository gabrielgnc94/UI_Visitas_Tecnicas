import React, { Fragment } from 'react';


//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './materialUI/theme';


//Pages
import Homepage from "./components/Homepage"





function App() {
  


  return (
    <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
    <Homepage />
    
   
    </MuiThemeProvider>
    </Fragment>
  );
}


export default App;
