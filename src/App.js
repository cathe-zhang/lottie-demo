import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie'
import animationData from './data.json'
import animationData2 from './data2.json'

class App extends Component {

  state = {
    selectedAnimationIndex: 0,
  }

  toggleItemClick = ( index ) => {
    this.setState({
      selectedAnimationIndex: index
    })
  }
  
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const defaultOptions2 = {
      loop: true,
      autoplay: true, 
      animationData: animationData2,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="App">

        <div id="toggle-box">
          <div id="wave"
            onClick={()=>this.toggleItemClick(0)}
          >动画1</div>
          <div id="rotate"
            onClick={()=>this.toggleItemClick(1)}
          >动画2</div>
        </div>

        {
          this.state.selectedAnimationIndex == 0 &&
          <Lottie options={defaultOptions}
            height={this.deHeight}
            width={this.deWidth}
          />
        }
        {
          this.state.selectedAnimationIndex == 1 &&
          <Lottie options={defaultOptions2}
            height={this.deHeight}
            width={this.deWidth}
          />
        }
      </div>
    );
  }
}

export default App;
