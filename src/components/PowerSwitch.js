import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Switch } from '@material-ui/core';

export default function PowerSwitch({ hasPower, onChange }) {
  return (
    <FormControlLabel
      className="power-switch"
      control={<Switch checked={hasPower} onChange={onChange} color="primary" />}
      label="Power"
      labelPlacement="top"
    />
  );
}
PowerSwitch.propTypes = {
  hasPower: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
