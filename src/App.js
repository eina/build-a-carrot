import React, { Component } from 'react';
import './App.css';

import types from './carrot-types';
import styles from './carrot-style';
import leaves from './leaf-style';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedType: null,
      selectedStyle: {},
      leafColour: {}
    }
  }

  selectAType(carrotType) {
    this.setState({ selectedType: carrotType, selectedStyle: {}, leafColour: {} })
  }

  selectAStyle(carrotStyle) {
    this.setState({ selectedStyle: carrotStyle })
  }

  selectLeafColour(leafColour) {
    this.setState({ leafColour })
  }

  render() {
    console.log('what is the selected carrot', this.state)
    return (
      <div className="App">
        <h1>🥕 Build a Carrot 🥕</h1>

        <ol>
          <li>
            <span className="select-title">Pick a Type</span>
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
          {this.state.selectedType && <React.Fragment>
            <li>
              <span className="select-title">Pick a Body Colour</span>
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
            </li>

            <li>
              <span className="select-title">Pick a Leaf Colour</span>
              <span>
                {Object.keys(leaves).map((x, idx) => (
                  <button
                    key={`${leaves[x].name}-${idx}`}
                    onClick={() => this.selectLeafColour(leaves[x].style)}
                  >
                    {leaves[x].name}
                  </button>
                ))}
              </span>
            </li>

          </React.Fragment>
          }
        </ol>

        <div className="svg-container">
          {this.state.selectedType && React.cloneElement(
            types[this.state.selectedType].svg,
            {
              style: this.state.selectedStyle,
              leafStyle: this.state.leafColour
            }
          )}
        </div>

        <div className="desc">
          <p>#codevember 3: Carrot (2018)</p>
          <p>Made by <a href="https://eina.ca" target="_blank">Eina Onting</a></p>
        </div>
      </div>
    );
  }
}

export default App;
