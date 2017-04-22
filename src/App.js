import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        gold: [
            'Simo',
        ],
        silver: [
            'Simo',
            'Helmi',
        ],
        bronze: [
        ]
    }
  }
  render() {
    const { gold, silver, bronze } = this.state

    return (
      <div className="App">
        <div className="podium-container">
            <div className="column">
                {silver.map(name => <div key={name}>{name}</div>)}
                <div className="podium silver">
                    2
                </div>
            </div>
            <div className="column">
                {gold.map(name => <div key={name}>{name}</div>)}
                <div className="podium gold">
                    1
                </div>
            </div>
            <div className="column">
                {bronze.map(name => <div key={name}>{name}</div>)}
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
