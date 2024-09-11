import React from 'react';
import client from "./api";   // Axios Instance
import { useState } from 'react';
// import axios from 'axios';
import { useEffect } from 'react';

export default function HttpDemo3() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async ()=>{
    // const url = axios.get("https://jsonplaceholder.typicode.com/users");
    const response = await client.get('/users')
    setUsers(response.data);

    const comments = await client.get ('/comments')
    console.log(comments)
  };

  useEffect(()=> {
    fetchUsers();
  }, []);

  return (
    <>
    <div>HttpDemo3</div>
    <h2 className='text-center'>Users list using AXIOS Client</h2>
    <ul>
      {users.map((user,ind) =>{
        return <li key={ind}>{user.name}</li>
      })}
    </ul>
    </>
  );
}
