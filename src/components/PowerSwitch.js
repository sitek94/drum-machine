import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Switch } from '@material-ui/core';

export default function PowerSwitch({ power, onChange }) {
  return (
    <FormControlLabel
      className="power-switch"
      control={<Switch checked={power} onChange={onChange} />}
      label="Power"
      labelPlacement="top"
    />
  );
}
PowerSwitch.propTypes = {
  power: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
