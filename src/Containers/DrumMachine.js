import React from 'react';
import { Paper } from '@material-ui/core';

import Title from '../components/Title';
import Display from '../components/Display';
import VolumeSlider from '../components/VolumeSlider';
import PowerSwitch from '../components/PowerSwitch';
import SoundsSwitch from '../components/SoundsSwitch';
import PadBank from '../components/PadBank';

function Container({ children }) {
  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      {children}
    </Paper>
  )
}

export default function DrumMachine() {
  return (
    <Container>
      <PadBank />
      <Title>Drum Machine</Title>
      <Display power text="Hip Hop" />
      <VolumeSlider value={50} onChange={() => "TODO"} disabled={false} />
      <PowerSwitch />
      <SoundsSwitch />
    </Container>
  );
}