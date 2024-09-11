import React, { Component } from "react";

class TogglePassword2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }

  togglePassword = () => {
    this.setState((prevState) => ({
      flag: !prevState.flag,
    }));
  };

  render() {
    const { flag } = this.state;

    return (
      <>
        <div className="ms-3">TogglePassword2</div>
        <input type={flag ? "password" : "text"} className="ms-3" />
        <button onClick={this.togglePassword} className="btn btn-primary ms-2">
          {flag ? "Show" : "Hide"} Password
        </button>
      </>
    );
  }
}

export default TogglePassword2;
