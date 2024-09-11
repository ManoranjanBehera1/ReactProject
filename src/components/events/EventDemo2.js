import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
      b: 30,
    };
    this.f1 = this.f1.bind(this);
  }
  f1() {
    console.log(this);
    console.log(this.state.a);
  }
  f2 = () => {
    console.log(this);
    console.log(this.state.b);
  };
  add = (a, b) => {
    console.log(a+b);
  };
  sum = (a,b) => {
    console.log(a+b);
  };
  render() {
    return (
      <>
        <div>EventsDemo2</div>
        <button onClick={this.f1}>Btn-1</button>
        <button onClick={this.f2} className="ms-2">Btn-2</button>
        <button onClick={()=> this.add(this.state.a,this.state.b)} className='ms-2'>Add</button>  {/* Make an anonymous arrow function */}
        <button onClick={this.sum.bind(this,this.state.a,this.state.b)} className='ms-2'>Sum</button>  {/* Bind the event handler to this */}
      </>
    );
  }
}
