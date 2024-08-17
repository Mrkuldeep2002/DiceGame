import React from 'react'
import Home from './components/home'
import { useState } from "react";
import PlayGame from './components/PlayGame';

const Pr3 = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
        <>{isGameStarted ? <PlayGame /> : <Home toggle={toggleGamePlay} />}</>
    </div>
  )
}

export default Pr3
