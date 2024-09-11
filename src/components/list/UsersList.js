import React from 'react'
import users from './users.json'

export default function UsersList() {
  return (
    <>
    <div className="text-center bg-secondary text-white p-3">UsersList</div>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>  
      <tbody>
        {users.map((user,ind) =>{
          return <tr key={ind}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>{user.website}</td>
          </tr>
        })}
      </tbody>
    </table>
    </>
  )
}
