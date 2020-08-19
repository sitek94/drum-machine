import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Title from '../components/Title';
import Display from '../components/Display';
import VolumeSlider from '../components/VolumeSlider';
import PowerSwitch from '../components/PowerSwitch';
import SoundsSwitch from '../components/SoundsSwitch';
import PadBank from '../components/PadBank';

export default function DrumMachine() {
  // If hasPower is true then app is active
  const [hasPower, setHasPower] = useState(true);
  const togglePower = () => {
    setHasPower(!hasPower);
  };

  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      <PadBank 
        isDrumPadDisabled={!hasPower}
      />
      <Title>Drum Machine</Title>
      <Display 
        disabled={!hasPower} text="Hip Hop" 
      />
      <VolumeSlider 
        value={50} 
        onChange={() => 'TODO'} 
        disabled={!hasPower}
      />
      <PowerSwitch 
        checked={hasPower} 
        onChange={togglePower}
      />
      <SoundsSwitch 
        disabled={!hasPower}
        onChange={() => 'TODO'}  
      />
    </Paper>
  );
}
