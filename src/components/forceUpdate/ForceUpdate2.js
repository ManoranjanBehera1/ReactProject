import React, { Component } from 'react'
// import styles "./forceUpdate2.module.css";
import  "./forceUpdate2.css";
export default class ForceUpdate2 extends Component {
    counter = 0; // counter is a class variable (Not a state/props variable)
    increment = () => {
        this.counter++;
        console.log(this.counter);
        // this.forceUpdate();
    }
    refresh = ()=>{
        this.forceUpdate();
    }
  render() {
    return (
      <>
      <div>ForceUpdate2</div>
      <div>Counter Value: {this.counter}</div>
      <button onClick={this.increment} className="btn btn-danger but">Increment</button>
      <button onClick={this.refresh} className="btn btn-primary ms-2 but">Refresh Data</button>
      </>
    )
  }
}
