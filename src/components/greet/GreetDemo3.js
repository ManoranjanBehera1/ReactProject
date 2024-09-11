import React, { Component } from 'react'

export default class GreetDemo3 extends Component {
  render() {
    if(this.props.showTitle){
        alert("hello...")
    }
    else{
        alert("hiiii...")
    }
    return (
        <div>Hello {this.props.name}, {this.props.message} {this.props.showTitle} </div>
    )
  }
}
