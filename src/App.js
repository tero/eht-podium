import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="podium-container">
            <div className="column">
                <div>Simo</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div>Helmi</div>
                <div className="podium silver">
                    2
                </div>
            </div>
            <div className="column">
                <div>Tero</div>
                <div>Juho</div>
                <div className="podium gold">
                    1
                </div>
            </div>
            <div className="column">
                <div>Sissel</div>
                <div className="podium bronze">
                    3
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
