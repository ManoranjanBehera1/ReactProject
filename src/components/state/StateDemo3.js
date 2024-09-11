import React, { useState } from 'react'

export default function StateDemo3() {
  // let count = 0;  // Not a state variable...
    let [count, setCount] = useState(0);

    const increment = () => {
        // count =count +1;
        setCount(count + 1);
        console.log("State Updated", count);
    }
  return (
    <>
    {console.log("render called")}
    <div>StateDemo3</div>
    <div>Count is: {count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}
