import React, { Component } from 'react'

export default class EventDemo1 extends Component {
    state = {
        a:10,
        b:20,
    };
    f1(){
        console.log(this); // this keyword indicates to undefined
        // console.log(this.state.a);
    }
    f2 = () =>{
      console.log(this.state.a);
      console.log(this.state.b);
    }
  render() {
    return (
     <>
      <div>EventsDemo1</div>
      <button onClick={this.f1} className="btn btn-primary ms-2">Btn-1</button>
      <button onClick={this.f2} className="btn btn-secondary ms-2">Btn-2</button>
     </>
    )
  }
}
