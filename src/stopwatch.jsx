import { useEffect, useState } from "react";

function Stopwatch() {
  const [state, setState] = useState();
  const [isRunning, setIsRunning] = useState(false)
  const [timer, setTimer] = useState(0)

  function startStopwatch(){
    setIsRunning(true);
  }

  function stopStopwatch(){
    setIsRunning(false);
  }

    useEffect(() => {
      let stopwatchInterval
      if(isRunning){
        stopwatchInterval = setInterval((prev) => {
            setTimer((prev) => prev+1)
        }, 1000);
      }
    
      return () => {
        clearInterval(stopwatchInterval)
      }
    }, [isRunning])

  const displayHours = Math.floor(timer / 3600);
  const displayMinutes = Math.floor((timer % 3600) / 60);
  const displaySeconds = timer % 60;

  return <div className="stopwatch-page">
    <h2 className="page-title">Stopwatch</h2>
    <div className="time-ring">
      <svg className="ring-svg" viewBox="0 0 200 200">
        <circle className="ring-track" cx="100" cy="100" r="90" fill="none" strokeWidth="2"/>
        <circle className="ring-progress" cx="100" cy="100" r="90" fill="none" strokeWidth="3"
          strokeDasharray={`${(displaySeconds / 60) * 565.48} 565.48`}
          transform="rotate(-90 100 100)"/>
        {[...Array(60)].map((_, i) => (
          <line
            key={i}
            className={`tick ${i < displaySeconds ? 'tick-active' : ''}`}
            x1="100" y1="14" x2="100" y2={i % 5 === 0 ? "22" : "18"}
            transform={`rotate(${i * 6} 100 100)`}
          />
        ))}
      </svg>
      <div className="time-display">
        <span className="time-digit">{String(displayHours).padStart(2, '0')}</span>
        <span className="time-sep">:</span>
        <span className="time-digit">{String(displayMinutes).padStart(2, '0')}</span>
        <span className="time-sep">:</span>
        <span className="time-digit">{String(displaySeconds).padStart(2, '0')}</span>
      </div>
    </div>
    <div className="controls">
      {isRunning
        ? <button className="ctrl-btn ctrl-pause" onClick={stopStopwatch}>Pause</button>
        : <button className="ctrl-btn ctrl-start" onClick={startStopwatch}>Start</button>
      }
      <button className="ctrl-btn ctrl-reset" onClick={() => { setIsRunning(false); setTimer(0); }}>Reset</button>
    </div>
  </div>;
}

export default Stopwatch;