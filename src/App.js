import React, { Component } from 'react';
import './App.css';

import types from './carrot-types';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedType: null
    }
  }

  selectAType(carrotType) {
    this.setState({ selectedType: carrotType })
  }

  render() {
    console.log('what is the selected carrot', this.state)
    return (
      <div className="App">
        <h1>Build a Carrot</h1>

        <div>
          {Object.keys(types).map((carrot, idx) => (
            <button
              key={`${types[carrot].name}-${idx}`}
              onClick={() => this.selectAType(carrot)}
            >
              {types[carrot].name}</button>
          )
          )}
        </div>

        {this.state.selectedType && (
          <div className="svg-container">
            {types[this.state.selectedType].svg}
          </div>
        )}
      </div>
    );
  }
}

export default App;
