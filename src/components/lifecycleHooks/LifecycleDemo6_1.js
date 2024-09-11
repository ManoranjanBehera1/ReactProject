import React, { Component } from "react";

export default class LifecycleDemo6_1 extends Component {
    

  constructor(props) {
    super(props);

    this.state = {
      name: "Sachin",
      myTime: '',
      myTimer: 0,
    };
    console.log("constructor called...");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called...");
    return state;
  }
  componentDidMount() {
    console.log("componentDidMount called...");

    const myTimer = setInterval(()=>{
        const myTime = new Date().toLocaleTimeString();
        this.setState({myTime:myTime});
        console.log(myTime);
    })
    this.setState({myTimer: myTimer});
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called...");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div-1").innerHTML =
    "Before the update, the Name was " + prevState.name;
  }
  componentDidUpdate() {
    document.getElementById("div-2").innerHTML =
    "The updated Name is " + this.state.name;
  }
  componentWillUnmount(){
    console.log("LifecycleDemo6_1 is about to destroyed...");
    clearInterval(this.state.myTimer);
    // console.log(this.state.myTimer);
  }
  changeName = ()=>{
    this.setState({name: "Rahul"})
  }
  render() {
    console.log("LifecycleDemo6_1 rendered...");
    return (
      <>
        {/* <h3 className="text-center">LifecycleDemo5</h3>
        <div>Name is {this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button> */}

        <h3 className="text-center">LifecycleDemo6_1 -- {this.state.myTime}</h3>
        <div>Current Name is {this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button>

        <div id="div-1"></div>
        <div id="div-2"></div>
      </>
    );
  }
}
