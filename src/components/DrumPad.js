import React, { useRef, useEffect } from 'react';
import { Button } from '@material-ui/core';

export default function DrumPad({
  label,
  keyValue,
  src,
  volume,
  disabled,
  onClick,
}) {
  // Audio ref
  const audioEl = useRef();

  const playSound = () => {
    if (disabled) return;

    audioEl.current.currentTime = 0;
    audioEl.current.play();
  };

  // Update volume when it changes
  useEffect(() => {
    audioEl.current.volume = volume;
  }, [volume])

  // Event handlers
  const handleClick = () => {
    playSound();
    onClick(label);
  };
  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === keyValue) {
      playSound();
      onClick(label);
    }
  };

  // Add/remove event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Button
      className="drum-pad"
      id={label}
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handleClick}
    >
      {keyValue}
      <audio src={src} ref={audioEl} />
    </Button>
  );
}
