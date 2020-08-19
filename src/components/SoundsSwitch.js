import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Switch } from '@material-ui/core';

export default function SoundsSwitch({ disabled, onChange }) {
  return (
    <FormControlLabel
      className="sounds-switch"
      control={<Switch disabled={disabled} onChange={onChange} color="primary" />}
      label="Sounds"
      labelPlacement="top"
    />
  );
}
SoundsSwitch.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
