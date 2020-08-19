import React from 'react'

import { Typography, Paper } from '@material-ui/core';

export default function Display({ disabled, text }) {
  return (
    <Paper
      className="display"
      variant={disabled ? 'outlined' : 'elevation'}
      elevation={disabled ? 3 : 10}
    >
      <Typography
        color={disabled ? 'textSecondary' : 'initial'}
        id="display"
        variant="h6"
      >
        {text}
      </Typography>
    </Paper>
  );
}