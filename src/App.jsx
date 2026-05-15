import './App.css'
import { useState } from 'react'
import { useNavigate, Outlet } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  return (
    <div className="app-shell">
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      <header className="app-header">
        <h1 className="logo"><span className="logo-link" onClick={() => navigate("/")}>Stop<span className="logo-amp">&amp;</span>Watch</span></h1>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p className="footer-text">crafted with precision</p>
      </footer>
    </div>
  )
}

export default App
