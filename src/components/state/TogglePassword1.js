import React, { useState } from 'react'

export default function TogglePassword1() {
    const [flag, setFlag] = useState(true);

  return (
    <>
    <div className="ms-3">TogglePassword1</div>
    <input type ={flag ? "password" : "text"} className="ms-3" />
    <button onClick={ ()=> {setFlag(!flag)}} className=" btn btn-primary ms-2">
    {flag ? "Show" : "Hide"} Password</button> 
   
   {/* <input type ={flag ? "password" : "text"} className="ms-3" />
    <input type = "checkbox" onChange={()=> setFlag(!flag)}/>
    {flag ? "Show" : "Hide"} Password */}
    </>
  )
}
