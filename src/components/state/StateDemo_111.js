import React, { Component } from 'react'
 // Not executed...
export default class StateDemo_111 extends Component {
  state = {
    counter: 0,
};
increment = () => {
  // To Update the state, call setState()
  /* let newState = {counter: this.state.counter + 1};
  
  this.setState(newState);  // asynchronous
  console.log('value updated', this.state.counter); */

  this.setState((prevState) => ({
    count: prevState.counter + 1, // sync
}));
   
};
incrementFive = ()=> {
  this.increment();
  this.increment();
  this.increment();
  this.increment();
  this.increment();
}
  render() {
    return (
      <>
      <div>StateDemo_111</div>
      <div>Counter is : {this.state.counter}</div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.incrementFive}>Increment 5</button>
      </>
    )
  }
}
