import React, { Component } from 'react';

export default class StateDemo1 extends Component {
    counter = 0;  // class variable

    increment = () => {
      this.counter++;
      console.log(this.counter);
    };
  render() {
    // console.log("render invoked");
    return (
      <>
      <div>StateDemo1</div>
      <div>Counter is : {this.counter}</div>
      <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}
