import React, { useState } from 'react'
import { useContext } from 'react';
import userContext from '../../utils/userContext';
// Function Component --->
export default function ShowHideDemo2() {
    const [flag,setFlag] = useState(true);

    const userObj =useContext(userContext);  // used context API from App.js
    // console.log(userObj);

    const toggleFlag = ()=> {
        setFlag(!flag);
    }
  return (
    <>
    {flag ? <h1>This is a Function Component Paragraph</h1> : null}
    <button onClick={toggleFlag} className="btn btn-secondary m-2">{flag ? "HIDE" : "SHOW"}</button>

    <p>Hi {userObj}</p>   {/* context API */}
    </>
  )
}
