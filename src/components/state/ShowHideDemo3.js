import React, { useState } from 'react';
// Function Component with one line arrow function---->
export default function ShowHideDemo3() {
    const [flag,setFlag] = useState(true);

    /* const toggleFlag = ()=> {
        setFlag(!flag);
    } */
  return (
    <>
    {flag ? <h1>This is a Function Component Paragraph111</h1> : null}
    <button onClick={ () => {setFlag(!flag);}} className="btn btn-secondary m-2">{flag ? "HIDE" : "SHOW"}</button>
    </>
  )
}
