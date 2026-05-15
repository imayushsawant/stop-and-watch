import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [state, setState] = useState();
  const navigate = useNavigate()

  return <div className="home-page">
    <div className="home-tagline">
      <p className="tagline-main">every second counts</p>
      <p className="tagline-sub">choose your instrument</p>
    </div>
    <div className="home-cards">
      <button className="home-card card-stopwatch" onClick={() => navigate("/stop-watch")}>
        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="8"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="1" x2="12" y2="4"/>
            <line x1="9" y1="1" x2="15" y2="1"/>
          </svg>
        </div>
        <span className="card-label">Stopwatch</span>
        <span className="card-desc">count up</span>
      </button>
      <button className="home-card card-timer" onClick={() => navigate("/timer")}>
        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <span className="card-label">Timer</span>
        <span className="card-desc">count down</span>
      </button>
    </div>
  </div>;
}

export default HomePage;