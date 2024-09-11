import React from 'react';
import users from "./users.json";

export default function UsersList2() {
  const headings = Object.keys(users[0]).map((key) => <th>{key}</th>)
  // console.log(headings);
return (
  <>
    <div className="text-center bg-secondary text-white p-3">UsersList2</div>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
      <tbody>
        {users.map((user, ind) => {
          return <tr key={ind}>
              {Object.values(user).map(val=>{
                return <td>{val}</td>
              })}
          </tr>;
        })}
      </tbody>
    </table>
  </>
);
}

