import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Title from '../components/Title';
import Display from '../components/Display';
import VolumeSlider from '../components/VolumeSlider';
import PowerSwitch from '../components/PowerSwitch';
import SoundsSwitch from '../components/SoundsSwitch';
import PadBank from '../components/PadBank';

import epic from '../sounds/epic';
import rickAndMorty from '../sounds/rick-and-morty';

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
  const [loadedSounds, setLoadedSounds] = useState(epic);
  const toggleSounds = () => {
    // Display either epic or rick-and-morty sounds
    if (loadedSounds.id === epic.id) {
      setLoadedSounds(rickAndMorty);
      setDisplayText(rickAndMorty.label);
    } else {
      setLoadedSounds(epic);
      setDisplayText(epic.label);
    }
  };

  // Volume
  const [volume, setVolume] = useState(.3);
  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
  }


  return (
    <Paper className="DrumMachine" elevation={5} id="drum-machine">
      <Title>Drum Machine</Title>
      <PadBank 
        sounds={loadedSounds.sounds} 
        volume={volume}
        disabled={!hasPower}
        onClick={setDisplayText}
      />
      <Display 
        disabled={!hasPower} 
        text={displayText} 
      />
      <VolumeSlider 
        value={volume} 
        onChange={handleVolumeChange} 
        disabled={!hasPower} 
      />
      <PowerSwitch 
        checked={hasPower} 
        onChange={togglePower}
      />
      <SoundsSwitch 
        disabled={!hasPower} 
        onChange={toggleSounds}
      />
    </Paper>
  );
}
