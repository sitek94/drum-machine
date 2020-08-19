import React from 'react'

import { Typography, Paper } from '@material-ui/core';

export default function Display({ power, text }) {
  return (
    <Paper
      className="display"
      variant={power ? 'elevation' : 'outlined'}
      elevation={power ? 9 : 3}
    >
      <Typography
        color={power ? 'initial' : 'textSecondary'}
        id="display"
        variant="h6"
      >
        {text}
      </Typography>
    </Paper>
  );
}