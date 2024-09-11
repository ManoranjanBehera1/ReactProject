import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class PureCompDemo2 extends PureComponent {
    state = {
        name : "Kunal",
    };
    changeName = () => {
        // this.setState({name: "Rahul"});
        this.setState({name: "Kunal"});
        // this.setState({name: "kunal"});
    };
  render() {
    console.log('Render called...')
    return <>
      <div>PureCompDemo2</div>
      <div>Name is : {this.state.name}</div>
      <button onClick={this.changeName}>Change Name</button>
    </>
  }
}
