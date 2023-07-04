import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const visitorCount = localStorage.getItem("visitorCount");

    if (visitorCount) {
      count = parseInt(visitorCount);
    }

    count++; 
    console.log(count);

    localStorage.setItem("visitorCount", count.toString());
    setVisitorCount(count);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h2>Visitor Count: {visitorCount}</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
