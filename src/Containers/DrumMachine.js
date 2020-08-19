import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Title from '../components/Title';
import Display from '../components/Display';
import VolumeSlider from '../components/VolumeSlider';
import PowerSwitch from '../components/PowerSwitch';
import SoundsSwitch from '../components/SoundsSwitch';
import PadBank from '../components/PadBank';

import { drumKitSounds, oldschoolSounds } from '../sounds';

export default function DrumMachine() {
  // If hasPower is true then app is active
  const [hasPower, setHasPower] = useState(false);
  const togglePower = () => {
    setHasPower(!hasPower);
    setDisplayText(hasPower ? 'Power OFF' : 'Power ON');
  };

  // Display
  const [displayText, setDisplayText] = useState('');

  // Loaded sounds
  const [loadedSounds, setLoadedSounds] = useState(drumKitSounds);
  const toggleSounds = () => {
    if (loadedSounds.id === drumKitSounds.id) {
      setLoadedSounds(oldschoolSounds);
      setDisplayText(oldschoolSounds.label);
    } else {
      setLoadedSounds(drumKitSounds);
      setDisplayText(drumKitSounds.label);
    }
  };

  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      <PadBank sounds={loadedSounds.sounds} isDrumPadDisabled={!hasPower} />
      <Title>Drum Machine</Title>
      <Display disabled={!hasPower} text={displayText} />
      <VolumeSlider value={50} onChange={() => 'TODO'} disabled={!hasPower} />
      <PowerSwitch checked={hasPower} onChange={togglePower} />
      <SoundsSwitch disabled={!hasPower} onChange={toggleSounds} />
    </Paper>
  );
}
