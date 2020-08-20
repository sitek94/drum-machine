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
  let audioEl = useRef(null);

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
    if (e.key === keyValue || e.key === keyValue.toUpperCase()) {
      playSound();
      onClick(label);
    }
  };

  const playSound = () => {
    if (disabled) return;

    const audio = audioEl.current;
    if (audio === null) return;

    audio.currentTime = 0;
    const playPromise = audio.play();

    // Catch DOM Exception error when running tests in Chrome
    if (playPromise !== undefined) {
      playPromise
      .then(_ => {})
      .catch(error => {
        console.log(error);
      })
    }
  };

  // Add/remove event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Button
      className="drum-pad"
      id={label}
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handleClick}
    >
      {keyValue.toUpperCase()}
      <audio src={src} ref={audioEl} className="clip" id={keyValue.toUpperCase()} />
    </Button>
  );
}
