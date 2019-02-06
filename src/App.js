import React, { Component } from 'react';
import './App.css';
import VerticalLinearStepper from './Stepper'

class App extends Component {
  render() {
    return (
      <body>
        <div id="main">
          <article>Article</article>
          <aside>
            <VerticalLinearStepper />
          </aside>
        </div>
        <footer className="footer">
            <div className="logo"><a href="#">RESERVE</a></div>
            <div className="exit"><a href="#">Exit X</a></div>
        </footer>
      </body>     
    );
  }
}

export default App;
