import React, { useState } from 'react'

export default function ShowHideEe() {
    const [state, setState] = useState(true);

    console.log({state});
    const clickHandler =()=>{
        setState(!state);
    };
  return (
    <>
    <div>ShowHideEe</div>
    <h1>{state ? "This is Heading 1" : ""}</h1>
    <button onClick={clickHandler} className="btn btn-secondary">Show/Hide</button>
    </>
  )
}
