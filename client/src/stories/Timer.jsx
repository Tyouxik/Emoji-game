/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import classnames from 'classnames';

export default function Timer({maxMins, handleTimer}) {
  const [seconds, setSeconds] = useState(maxMins * 60);
  const timerStyle = classnames('counter');
  const minuteStyle = classnames('time');
  const secondStyle = classnames('time');

  function formatTime(timeInSec) {
    let secs = timeInSec % 60;
    secs = secs >= 9 ? `${secs}` : `0${secs}`;
    let mins = Math.floor(timeInSec / 60) % 60;
    mins = mins >= 9 ? `${mins}` : `0${mins}`;
    return [mins, secs];
  }

  useEffect(() => {
    const interval = setInterval(() => {
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

  const [minute, second] = formatTime(seconds);
  return <div>
    <p className={timerStyle}><span className={minuteStyle}>{minute}
    </span> : <span className={secondStyle}>{second}</span></p>
    <div role="progressbar" className="mdc-linear-progress" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
      <div className="mdc-linear-progress__buffer">
        <div className="mdc-linear-progress__buffer-bar"></div>
        <div className="mdc-linear-progress__buffer-dots"></div>
      </div>
      <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
        <span className="mdc-linear-progress__bar-inner"></span>
      </div>
      <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span className="mdc-linear-progress__bar-inner"></span>
      </div>
    </div>
  </div>;
}

Timer.propTypes = {
  maxMins: PropTypes.number.isRequired,
  handleTimer: PropTypes.func.isRequired,
};
