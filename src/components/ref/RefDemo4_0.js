import React, { Component } from "react";

export default class RefDemo4_0 extends Component {  // callback ref
  addition = () => {
    let val1 = parseInt(this.input1.value);
    let val2 = parseInt(this.input2.value);
    alert(val1 + val2);
  };
  render() {
    return (
      <>
        <div>RefDemo4_0</div>
        <p>Num1: <input ref={inputBox => { this.input1 = inputBox; }} /></p>
        <p>Num2: <input ref={inputBox => { this.input2 = inputBox; }} /></p> 
        <button onClick={this.addition}>Add</button>
      </>
    );
  }
}
