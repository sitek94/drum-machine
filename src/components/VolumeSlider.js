import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Slider, Grid } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default function VolumeSlider({ value, onChange, disabled }) {
  return (
    <div className="volume-slider">
      <Typography align="center">Volume</Typography>
      <div className="slider">
        <VolumeDown />
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
        <VolumeUp />
      </div>
    </div>
  );
}
VolumeSlider.propTypes = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
