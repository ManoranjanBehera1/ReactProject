import React, { useState } from 'react'
const initialUser ={
    fname: { value: "", errorMsg: "" },
    lname: { value: "", errorMsg: "" }
}

export default function FormDemo7() {
    const [user, setUser] = useState();
  return (
    <>
    <div>FormDemo7</div>
    <form>
      <p>
        First Name:
        <input name="fName" value = {user.fname.value} onChange={(e) => {
          setUser({...user,fName:e.target.value})
        }} />
      </p>
      <p>
        Last Name:
        <input name="lName" value = {user.lname.value} onChange={(e) => {
          setUser({...user,lName:e.target.value})
        }} />
      </p>
      {/* <button>Submit</button> */}
      <input type="reset" value="clear" className='ms-1' />
      <input type="submit" value="login" className='ms-1' />   
    </form>
    <p>{user.fname.value} {user.lname.value}</p>
    </>
  )
}
