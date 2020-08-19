import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Switch } from '@material-ui/core';

export default function SoundsSwitch({ power, onChange }) {
  return (
    <FormControlLabel
      className="sounds-switch"
      control={<Switch disabled={!power} onChange={onChange} color="primary" />}
      label="Sounds"
      labelPlacement="top"
    />
  );
}
SoundsSwitch.propTypes = {
  power: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
