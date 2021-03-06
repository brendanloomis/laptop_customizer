import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList/FeatureList';
import Cart from './Cart/Cart';
import FEATURES from './FEATURES/FEATURES';
import Header from './Header/Header';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FeatureList 
            features={FEATURES} 
            selected={this.state.selected}
            handleFeatureChange={(feature, newValue) => {this.updateFeature(feature, newValue)}}
          />
         <Cart
            selected={this.state.selected}
         />
        </main>
      </div>
    );
  }
}

export default App;
