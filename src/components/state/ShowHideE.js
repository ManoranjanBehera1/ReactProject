import React, { useState } from 'react'

export default function ShowHideE() {
    let [state,changeState] = useState(false);
    
    let toggle = ()=> {
        changeState(state === false ? state = true : state = false);
    }
  return (
    <>
    <div>ShowHideE</div>
    <h1 style={{"height": "100px"}}>
        {state === false ? "Toggle Content" : ""}
    </h1>
    <button onClick={toggle} className="btn btn-primary ms-2">Show/Hide</button>
    </>
  )
}
