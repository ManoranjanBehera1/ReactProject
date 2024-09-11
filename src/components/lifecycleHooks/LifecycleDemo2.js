import React, { Component } from "react";

export default class LifecycleDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div>LifecycleDemo2</div>
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
