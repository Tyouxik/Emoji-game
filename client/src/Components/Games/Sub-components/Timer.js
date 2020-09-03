import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const { maxMins, handleTimer } = props;
  const [seconds, setSeconds] = useState(maxMins * 60);

  function formatTime(timeInSec) {
    let secs = timeInSec % 60;
    secs = secs >= 9 ? `${secs}` : `0${secs}`;
    let mins = Math.floor(timeInSec / 60) % 60;
    mins = mins >= 9 ? `${mins}` : `0${mins}`;
    return `${mins}:${secs}`;
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else {
        clearInterval(interval);
        handleTimer(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, handleTimer]);

  return <h3>Timer: {formatTime(seconds)}</h3>;
}
