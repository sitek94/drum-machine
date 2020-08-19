import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

import DrumMachine from './Containers/DrumMachine';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f1c40f',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <DrumMachine />
      </div>
    </ThemeProvider>
  );
}
