import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      favFood: ['icecream', 'kabab', 'apple']
    }
  }




  render() {
    let favFoods =this.state.favFood.map((elm, index) => {
      return (
        <h2 key= {index} > {elm}</h2>
      )
    })
    return (
      <div className="App">
   
{favFoods}
     
      
      </div>
    );
  }
}

export default App;
