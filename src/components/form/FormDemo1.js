import React from 'react'
import { useState } from 'react'

export default function FormDemo1() {    // controlled form
    const [fName,setFname] = useState("");
    const [lName,setLname] = useState("");

    const changeHandler = (e) => {
      if(e.target.name === "fName"){
        setFname(e.target.value);
      }else {
        setLname(e.target.value);
      }
    };
   /*  const changeHandler1 = (e) => {
      setFname(e.target.value);
    };
    const changeHandler2 = (e) => {
      setLname(e.target.value);
    }; */
    const submitMyForm = (e) => {
      e.preventDefault();  //  e.preventDefault() to prevent the form from actually being submitted.(to avoid page refresh)
      console.log(fName, lName);
    }
  return (
    <>
    <div>FormDemo1</div>
    <form onSubmit={submitMyForm}>
      <p>
        First Name:
        <input name="fName"  onChange={changeHandler} />
      </p>
      <p>
        Last Name:
        <input name="lName"  onChange={changeHandler} />
      </p>
      <input type="reset" value="reset" />
      <input type="submit" value="login" className='ms-1' />
      {/* <button>Reset</button> */}
      </form>
      <br />
      {/* <p>Full Name is: {fName} {lName}</p> */}
      <p>First Name: {fName}</p>
      <p>Last Name: {lName}</p>
    </>
  )
}
