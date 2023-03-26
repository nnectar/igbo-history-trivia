import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1 className="page-heading">Test your Igbo History Knowledge!</h1>
      <div className="modal">
        <Game />
      </div>
    </div>
  );
}

export default App;
