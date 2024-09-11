import React, { Component } from 'react'

export default class LifecycleDemo6 extends Component {
  render() {
    console.log("LifecycleDemo6 rendered...")
    return (
      <div>LifecycleDemo6</div>
    )
  }
  componentWillUnmount(){
    console.log("LifecycleDemo6 is about to destroyed...")
  }
}
