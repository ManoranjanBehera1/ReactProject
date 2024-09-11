import React, { useEffect, useRef, useState } from 'react'

export default function RefDemo0() {
    const [count,setCount] = useState(0);
    const myRef = useRef();
    console.log(myRef);

    /* const increment = () => {
        setCount(count + 1);
    }; */

    useEffect(()=>{
        myRef.val = count;
        console.log('use effect...')
    });
  return (
    <>
    {console.log('Render...')}
    Now: {count}, Before: {myRef.val} <br />
    {/* <h2>Count is {count}</h2> */}
    {/* <button onClick={increment}>increment</button> */}
    <button onClick={() =>{setCount(count+1)}}>increment</button>
    </>
  )
}
