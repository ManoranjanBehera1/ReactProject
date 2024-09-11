import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HttpFetchUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const finalusersData = await usersData.json();
    setUsers(finalusersData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div>HttpFetchUsers</div>
      <ul>
        {users.map((user, ind) => (
          <div key={ind}>
            <li>{user.name}</li>
            <button>
              <Link to={`/userDetails/${user.id}`}>View</Link>
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
