import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

import DrumMachine from './containers/DrumMachine';

const YELLOW = '#f1c40f';
const GREEN = '#69f023';

export default function App() {
  const [color, setColor] = useState(YELLOW);
  const toggleColor = () => {
    setColor(color === YELLOW ? GREEN : YELLOW);
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <DrumMachine onSoundsSwitch={toggleColor} />
      </div>
    </ThemeProvider>
  );
}
