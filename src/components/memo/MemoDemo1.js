import React from 'react'
import { useState } from 'react';
import MemoDemo2 from './MemoDemo2';
import MemoDemo3 from './MemoDemo3';

export default function MemoDemo1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Sachin");

    const increment = () => {
      setCount(count + 1);
    };
    const changeName = () => {
      setName("Rahul");
    };

  return (
    <>
    {/* {console.log("Render called...")} */}
    <div>MemoDemo1 - Parent Component</div>
    <div>Count is: {count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={changeName} className="ms-2">Change Name</button>
    <hr />
    {/* <MemoDemo2 name={name} /> */}
    <MemoDemo3 name={name} />
    </>
  )
}
