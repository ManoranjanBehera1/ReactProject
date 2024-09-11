import React, { Component } from 'react'
// class Component ---->
export default class ShowHideDemo1 extends Component {
    state = {
        flag: true,
    };
    toggleFlag = () => {
      this.setState({flag : !this.state.flag})
      // console.log(this.setState);
    };
  render() {
    return (
    <>
    {/* ternary opearator */} 
    {this.state.flag ? <h1>This is a Class Component Paragraph </h1> : null}
    {/* <button onClick={this.toggleFlag} className="btn btn-primary m-2">SHOW/HIDE</button> */}
    <button onClick={this.toggleFlag} className="btn btn-primary m-2">
      {this.state.flag ? "HIDE" : "SHOW"}
    </button>
    </>
    );
  }
}
