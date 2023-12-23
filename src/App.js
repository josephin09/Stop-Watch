import React, { useState, useEffect } from 'react';
import './App.css'; 

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <p>Time: {formatTime(time)}</p>
      </div>
      <div className="button-container">
        <button className="start-stop-button" onClick={startStopwatch}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="reset-button" onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Stopwatch />
    </div>
  );
};

export default App;


