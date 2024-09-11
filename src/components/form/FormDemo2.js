import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function FormDemo2() {    // UnControlled form
    const [fname, setFname] = useState("Sa");
    const [lname, setLname] = useState("Te");
  
    const ref1 = useRef();
    const ref2 = useRef();
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(fname + " " + lname);
      console.log(ref1.current.value + " " + ref2.current.value);
    };
  
    return (
      <>
      <div>Form Demo2</div>
        <form onSubmit={submitHandler}>
          <p>First Name:<input name="fname" defaultValue={fname} ref={ref1} /></p>
          <p>Last Name:<input name="lname" defaultValue={lname} ref={ref2} /></p>
          <br />
          <button className='ms-1'>submit</button>
        </form>
        <p>First Name is: {fname} & Last Name is: {lname}</p>
      </>
    );
}
