import React from 'react'

export default function StateDemo2() {
    let count = 0;  // Not a state variable...
    const increment = ()=> {
        count = count+1;
        console.log(count);
        // console.log("render invoked");
    }
  return (
    <>
    <div>StateDemo2</div>
    <div>Count is : {count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}
