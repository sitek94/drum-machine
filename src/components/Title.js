import React from 'react';
import { Typography } from '@material-ui/core';

export default function Title({ children }) {
  return (
    <Typography className="title" component="h1" variant="h5">{children}</Typography>
  )
}