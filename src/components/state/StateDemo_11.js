import React, { Component } from 'react'

export default class StateDemo_11 extends Component {
    // counter = 0; //Class variable
    state ={
        counter: 0,
    };

    increment = () => {
        // To Update the state, call setState()
        let newState = {counter: this.state.counter + 1};
        this.setState(newState);  // asynchronous operation
        console.log('value updated', this.state.counter);
         /* If a piece of code needs to be executed only after the state has been updated, then 
         place that code in the callback function which is the second arguement to setState()
         ex:-  setState( {} , ()=>{} ); */
        /* this.setState(newState, ()=>{  
          console.log('value updated', this.state.counter);
        }); */ 
    };
  render() {
    // console.log("render Invoked");
    return (
      <>
      <div>StateDemo_11</div>
      <div>Counter is : {this.state.counter}</div>
      <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}
