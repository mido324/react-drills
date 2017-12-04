import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ""
    }
  }


  
updateInput(val) {
  this.setState({
    inputText: val
  })
}

  render() {
    return (
      <div className="App">
<input onChange={(e) => this.updateInput(e.target.value)} type="text"/>
<p> {this.state.inputText} </p>
      </div>
    );
  }
}

export default App;
