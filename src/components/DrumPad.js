import React from 'react';
import { Button } from '@material-ui/core';

export default function DrumPad({ children, disabled }) {
  return (
    <Button
      className="drum-pad"
      // id={label}
      variant="contained"
      color="primary"
      disabled={disabled}
      // onClick={handleClick}
    >
      {children}
      {/* <audio ref={audioEl} src={src} className="clip" id={keyId} /> */}
    </Button>
  );
}
