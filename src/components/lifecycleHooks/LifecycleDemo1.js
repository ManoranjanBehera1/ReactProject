import React, { Component } from 'react'

export default class LifecycleDemo1 extends Component {
    constructor(props) { 
      super(props)  // parent class's constructor
      console.log("Constructor...");
    
      this.state = {
         name : 'sachin'
      };
      // this.setState({name: 'rahul'})  // setState() method should not be called in the constructor(). we will get console error.
    }
    static getDerivedStateFromProps(props,state){
      console.log("getDerivedStateFromProps...");
      let updateState = {name: props.name || state.name};
      return updateState;
    }
     f1=()=>{
      console.log("f1 Called...")
    };
    componentDidMount() {
      console.log("ComponentDidMount...");
    }
  render() {
    console.log("Render...");
    return (
      <>
      <div>LifecycleDemo1</div>
      <div>Name is - {this.state.name}</div>
      <button onClick={()=>{this.setState({name:'rahul'})}}>Change Name</button>
      </>
    )
  }
}
