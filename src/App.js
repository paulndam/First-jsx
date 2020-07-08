import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>Hello Dojo</h3>
      <h5>Things I Gotta Do !!</h5>
      <div>
        <ul>
          <li>learn react</li>
          <li>climb mt everest</li>
          <li>climb mt kilimanjaro</li>
          <li>Do other stuffs...</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
