import React, { useState } from 'react'

export default function RefDemo5() {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1)
    };
  return (
    <>
    <div>RefDemo5</div>
    <div>Count is: {count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}
