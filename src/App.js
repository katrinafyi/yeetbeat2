import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="section">
      <div className="columns is-centered is-mobile">
        <div className="column main-col">
          <div className="box">
            <h1 className="is-size-3 has-text-weight-bold">Yeetbeat 2</h1>
            A music guessing game!
            <div className="columns is-multiline">
              <div className="column"><div className="button is-fullwidth is-success">Join Game</div></div>
              <div className="column"><div className="button is-fullwidth is-info">New Game</div></div>
              <div className="column"><div className="button is-fullwidth is-info">Settings</div></div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
