import React from 'react'
import PropTypes from 'prop-types';

import DrumPad from './DrumPad';

// PadBank renders a DrumPad for each of the sounds
// In addition it pass down keyValue to trigger keyboard event
export default function PadBank({ sounds, ...props }) {
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

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