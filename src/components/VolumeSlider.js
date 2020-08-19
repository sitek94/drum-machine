import React from 'react'

import { Typography, Slider } from '@material-ui/core';

export default function VolumeSlider({ value, onChange, disabled }) {
  return (
    <div className="volume-slider">
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