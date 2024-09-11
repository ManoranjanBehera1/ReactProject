import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function HttpDemo2() {
    const [users,setUsers] = useState([]);

    const fetchUsers = ()=>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      axios.get(url).then(response=>{
        console.log(response.data);
        setUsers([...response.data]);
      }).catch(err=>{
        console.log(err);
      })
    };

    /* const fetchUsers = async()=>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      // console.log(axios.get(url));
      const response = await axios.get(url);
      setUsers(response.data);
    } */

    useEffect(()=>{
      fetchUsers();
    },[]);
  return (
    <>
      <div>HttpDemo2</div>
      <h2>Users List using AXIOS</h2>
      <ul>
        {users.map((user, ind) => {
          return <li key={ind}>{user.name}</li>
        })}
      </ul>
    </>
  )
}


