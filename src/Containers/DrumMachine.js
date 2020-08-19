import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Title from '../components/Title';
import Display from '../components/Display';
import VolumeSlider from '../components/VolumeSlider';
import PowerSwitch from '../components/PowerSwitch';
import SoundsSwitch from '../components/SoundsSwitch';
import PadBank from '../components/PadBank';

export default function DrumMachine() {
  const [hasPower, setHasPower] = useState(true);
  const togglePower = () => {
    setHasPower(!hasPower);
  }

  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      <PadBank />
      <Title>Drum Machine</Title>
      <Display power text="Hip Hop" />
      <VolumeSlider value={50} onChange={() => 'TODO'} disabled={false} />
      <PowerSwitch hasPower={hasPower} onChange={togglePower} />
      <SoundsSwitch />
    </Paper>
  );
}
