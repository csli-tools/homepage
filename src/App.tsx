import React from 'react';
import logo from './assets/csli-logo-transparent-no-border.png';
import coloUrs from './assets/csli-colors.png'
import burnImageKindaCool from './assets/csli-logo-burn.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div className="featured-image">
        <img src={burnImageKindaCool} />
      </div>
      <div id="colors">
        These'll do, 🐷:
        <img src={coloUrs}/><br/>
        <p>Feel free to play with these at:</p>
        <a href="https://color.adobe.com/create/color-wheel">https://color.adobe.com/create/color-wheel</a>
      </div>
    </div>
  );
}

export default App;
