import React, { Component } from 'react'

export default class LifecycleDemo4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    console.log("Constructor called...")
    /* const h3 = document.querySelector("h3");
    console.log(h3); */
  }
  getUsers = async () => {
    const users = await fetch ("https://jsonplaceholder.typicode.com/users");
    const finalData = await users.json();
    this.setState({users: finalData});
    // this.setState({users: [...this.state.users,...finalData]});
    // this.setState({users: [...finalData]});
  }
  componentDidMount(){
    console.log("componentDidMount called...")
    this.getUsers()
    const h3 = document.querySelector("h3");
    h3.style.backgroundColor = "blue";
    h3.style.color = "white";
    // console.log(h3);
  }
  render() {
    console.log("Rendered...")
    return (
      <>
        <div>LifecycleDemo4</div>
        <h3 className="text-center">Users List</h3>
        <table className="table table-bordered table-stripped">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, ind) => {
              return (
                <tr key={ind}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
