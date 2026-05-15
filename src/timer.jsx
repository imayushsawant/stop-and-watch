import { useEffect, useState, useInterval } from "react";

function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [millisecond, setMillisecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  function startTimer() {
    setMillisecond(hour * 3600000 + minute * 60000 + second * 1000);
    setHasStarted(true);
    setIsRunning(true);
  }
  const displayHour = Math.floor(millisecond / 3600000);
  const displayMinute = Math.floor((millisecond % 3600000) / 60000);
  const displaySecond = Math.floor(((millisecond % 3600000) % 60000) / 1000);

  const totalInputSeconds = hour * 3600 + minute * 60 + second;
  const totalCurrentSeconds = Math.floor(millisecond / 1000);
  const progress = totalInputSeconds > 0 ? (totalCurrentSeconds / totalInputSeconds) : 0;

  useEffect(() => {
    let myInterval;
    if (isRunning) {
      myInterval = setInterval(() => {
        setMillisecond((oldValue) => {
          if (oldValue <= 0) {
              clearInterval(myInterval);
              setIsRunning(false)
              return 0
          }
          return oldValue - 1000;
        });
      }, 1000);
    }

    return () => clearInterval(myInterval);
  }, [isRunning]);

  return (
    <div className="timer-page">
      <h2 className="page-title">Timer</h2>
      <div className="timer-body">
        {hasStarted ? (
          <div className="timer-running">
            <div className="time-ring">
              <svg className="ring-svg" viewBox="0 0 200 200">
                <circle className="ring-track" cx="100" cy="100" r="90" fill="none" strokeWidth="2"/>
                <circle className="ring-progress ring-countdown" cx="100" cy="100" r="90" fill="none" strokeWidth="3"
                  strokeDasharray={`${progress * 565.48} 565.48`}
                  transform="rotate(-90 100 100)"/>
              </svg>
              <div className="time-display">
                <span className="time-digit">{String(displayHour).padStart(2, '0')}</span>
                <span className="time-sep">:</span>
                <span className="time-digit">{String(displayMinute).padStart(2, '0')}</span>
                <span className="time-sep">:</span>
                <span className="time-digit">{String(displaySecond).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="controls">
              {isRunning ? (
                <button className="ctrl-btn ctrl-pause" onClick={() => setIsRunning(false)}>Pause</button>
              ) : (
                <button className="ctrl-btn ctrl-start" onClick={() => setIsRunning(true)}>Resume</button>
              )}
              <button className="ctrl-btn ctrl-reset" onClick={() => setHasStarted(false)}>Reset</button>
            </div>
          </div>
        ) : (
          <div className="timer-setup">
            <form className="time-inputs">
              <div className="input-group">
                <input
                  className="time-input"
                  type="number"
                  placeholder="0"
                  value={hour}
                  onChange={(e) => setHour(Number(e.target.value))}
                />
                <label className="input-label">hours</label>
              </div>
              <span className="input-sep">:</span>
              <div className="input-group">
                <input
                  className="time-input"
                  type="number"
                  placeholder="0"
                  value={minute}
                  onChange={(e) => setMinute(Number(e.target.value))}
                />
                <label className="input-label">min</label>
              </div>
              <span className="input-sep">:</span>
              <div className="input-group">
                <input
                  className="time-input"
                  type="number"
                  placeholder="0"
                  value={second}
                  onChange={(e) => setSecond(Number(e.target.value))}
                />
                <label className="input-label">sec</label>
              </div>
            </form>
            <div className="controls">
              <button className="ctrl-btn ctrl-start" onClick={startTimer}>Start</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timer;
