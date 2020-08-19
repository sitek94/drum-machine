import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

import {
  Paper,
  Typography,
  Slider,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#61dafb'
    }
  },
});

function BankSwitch({ power, onSoundsToggle }) {
  return (
    <FormControlLabel
      className="BankSwitch"
      control={<Switch disabled={!power} onChange={onSoundsToggle} />}
      label="Bank"
      labelPlacement="top"
    />
  );
}

function PowerSwitch({ power, onPowerToggle }) {
  return (
    <FormControlLabel
      className="PowerSwitch"
      control={<Switch checked={power} onChange={onPowerToggle} />}
      label="Power"
      labelPlacement="top"
    />
  );
}

function VolumeSlider({ value, onChange, disabled }) {
  return (
    <div className="VolumeSlider">
      <Typography>Volume</Typography>
      <Slider
        value={value}
        onChange={onChange}
        disabled={disabled}
        valueLabelDisplay="auto"
        valueLabelFormat={(x) => Math.round(x * 100)}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  );
}

function Display({ power, text }) {
  return (
    <Paper
      className="Display"
      variant={power ? 'elevation' : 'outlined'}
      elevation={power ? 9 : 3}
    >
      <Typography
        color={power ? 'initial' : 'textSecondary'}
        id="display"
        variant="h6"
      >
        {text}
      </Typography>
    </Paper>
  );
}

function Controls() {
  return (
    <div className="Controls">
      <h1 className="Title">Drum Machine</h1>
      <Display power text="Hip Hop" />
      <VolumeSlider value={50} onChange={() => "TODO"} disabled={false} />
      <PowerSwitch />
      <BankSwitch />
    </div>
  );
}

function DrumPad({ children }) {
  return <div className="DrumPad">{children}</div>;
}

function PadBank() {
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div className="PadBank">
      {keys.map((key) => (
        <DrumPad key={key}>{key}</DrumPad>
      ))}
    </div>
  );
}

function DrumMachine() {
  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      <PadBank />
      <Controls />
    </Paper>
  );
}

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
