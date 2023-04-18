import React from 'react';
import wonders from '../Audio/wonders.mp3';
import { useState } from 'react';

export function WondersButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audio = new Audio(wonders);
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setIsPlaying({ isPlaying: !isPlaying });

  return <button onClick={setIsPlaying()}>Play | Pause</button>;
}
