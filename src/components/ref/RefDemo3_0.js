import React, { Component } from "react";

export default class RefDemo3_0 extends Component {
  // Refs (Template Reference Variable)
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  add = () => {
    let value_1 = parseInt(this.myRef1.current.value);
    let value_2 = parseInt(this.myRef2.current.value);
    alert(value_1 + value_2);
  };
  render() {
    return (
      <>
        <div>RefDemo3_0</div>
        <p>
        Number1: <input name="textbox1" ref={this.myRef1} type="text" />
        </p>
        <p>
        Number2: <input name="textbox2" ref={this.myRef2} type="text" />
        </p>
        <button onClick={this.add} className="ms-1">Add</button>
      </>
    );
  }
}
