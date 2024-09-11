import React from 'react'
import { useState } from 'react'

export default function FormDemo3() {
  const [user, setUser] = useState({fName: "Sachin", lName: "Tendulkar"});

  const resetHandler = ()=>{
    setUser({fName: "", lName: ""})
  }
  return (
    <>
    <div>FormDemo3</div>
    <form onReset={resetHandler}>
      <p>
        First Name:
        <input name="fName" value = {user.fName} onChange={(e) => {
          setUser({...user,fName:e.target.value})
        }} />
      </p>
      <p>
        Last Name:
        <input name="lName" value = {user.lName} onChange={(e) => {
          setUser({...user,lName:e.target.value})
        }} />
      </p>
      {/* <button>Submit</button> */}
      <input type="reset" value="clear" className='ms-1' />
      <input type="submit" value="login" className='ms-1' />   
    </form>
    <p>{user.fName} {user.lName}</p>
    </>
  )
}
