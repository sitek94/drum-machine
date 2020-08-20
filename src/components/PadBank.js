import React from 'react'
import PropTypes from 'prop-types';

import DrumPad from './DrumPad';

// PadBank renders a DrumPad for each of the sounds
// Rest of the props are volume, disabled and onClick
// PadBank doesn't care about them so it spreads them over each drum pad
export default function PadBank({ sounds, ...props }) {
  // For each of the drum pads pass down a key that triggers keyboard event
  const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

  return (
    <div className="pad-bank">
      {sounds.map((sound, i) => (
        <DrumPad
          key={sound.label}
          keyValue={keys[i]}
          {...sound}
          {...props}
        />
      ))}
    </div>
  );
}
PadBank.propTypes = {
  sounds: PropTypes.array.isRequired,
}