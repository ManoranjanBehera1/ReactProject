import React, { Component } from 'react'

export default class LifecycleDemo0 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Sachin",
      }
    }
   /*  static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps...");
        let updateState = {name: props.name || state.name};
        return updateState;
    } */
  render() {
    console.log("Render...");
    return (
        <>
           <div>LifecycleDemo0</div>
           <div>Name is: {this.state.name}</div>
           <button onClick={()=>{this.setState({name:"Rahul"})}}>Change Name</button>
        </>
    )
  }
}
