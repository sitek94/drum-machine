import React from 'react'
import DrumPad from './DrumPad';

export default function PadBank() {
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div className="pad-bank">
      {keys.map((key) => (
        <DrumPad key={key}>{key}</DrumPad>
      ))}
    </div>
  );
}