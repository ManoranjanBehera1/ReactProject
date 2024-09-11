import React, { Component } from 'react'

export default class PureCompDemo1 extends Component {
    state = {
        name : "Kunal",
    };
    changeName = () => {
        this.setState({name: "Rahul"});
        // this.setState({name: "Kunal"});
    };
  render() {
    console.log('Render called...')
    return <>
      <div>PureCompDemo1</div>
      <div>Name is : {this.state.name}</div>
      <button onClick={this.changeName}>Change Name</button>
    </>
  }
}
