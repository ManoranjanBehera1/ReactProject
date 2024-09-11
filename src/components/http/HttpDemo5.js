import React from 'react';
import client from './api';
import axios from "axios";

export default function HttpDemo5() {
    const fetchData = async () => {
        // const promise1 = axios.get ("https://jsonplaceholder.typicode.com/users");
        // const promise2 = axios.get ("https://jsonplaceholder.typicode.com/todos");
        const promise1 = client.get('./uses')    // 
        const promise2 = client.get('./comments') 

        try{
            const [data1, data2] = await axios.all([promise1,promise2]);
            console.log(data1.data,data2.data)
        }catch{
            console.log("Something went wrong...")
        }
    };
  return (
    <>
    <div>HttpDemo5</div>
    <button onClick={fetchData}>Fetch data</button>
    </>
  )
}
