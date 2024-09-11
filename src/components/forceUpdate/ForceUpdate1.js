import React from 'react'

export default function ForceUpdate1() {
  let counter = 0;
  function increment(){
    counter++;
    console.log(counter);
  }
  return (
    <>
    <div>ForceUpdate1</div>
    <div>Counter Value: {counter}</div>
    <button onClick={increment}>Increment</button>
    </>

  )
}
