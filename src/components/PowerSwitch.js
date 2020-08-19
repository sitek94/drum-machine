import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Switch } from '@material-ui/core';

export default function PowerSwitch({ checked, onChange }) {
  return (
    <FormControlLabel
      className="power-switch"
      control={<Switch checked={checked} onChange={onChange} color="primary" />}
      label="Power"
      labelPlacement="top"
    />
  );
}
PowerSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
