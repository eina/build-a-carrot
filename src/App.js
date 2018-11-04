import React, { Component } from 'react';
import './App.css';

import types from './carrot-types';
import styles from './carrot-style';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedType: null,
      selectedStyle: {}
    }
  }

  selectAType(carrotType) {
    this.setState({ selectedType: carrotType, selectedStyle: {} })
  }

  selectAStyle(carrotStyle) {
    this.setState({ selectedStyle: carrotStyle })
  }

  render() {
    console.log('what is the selected carrot', this.state)
    return (
      <div className="App">
        <h1>Build a Carrot</h1>

        <ol>
          <li>
            <span>Pick a Type</span>
            <span>
              {Object.keys(types).map((carrot, idx) => (
                <button
                  key={`${types[carrot].name}-${idx}`}
                  onClick={() => this.selectAType(carrot)}
                >
                  {types[carrot].name}</button>
              )
              )}</span>
          </li>
          {this.state.selectedType && <li>
            <span>Pick a Body Color</span>
            <span>
              {Object.keys(styles).map((x, idx) => (
                <button
                  key={`${styles[x].name}-${idx}`}
                  onClick={() => this.selectAStyle(styles[x].style)}
                >
                  {styles[x].name}
                </button>
              ))}
            </span>
          </li>}
        </ol>

        <div className="svg-container">
          {this.state.selectedType && React.cloneElement(types[this.state.selectedType].svg, { style: this.state.selectedStyle })}
        </div>
      </div>
    );
  }
}

export default App;
