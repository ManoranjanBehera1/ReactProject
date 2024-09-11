import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function RefDemo2() {     // useEffect Hooks
    const [name,setName] = useState("Sachin");
    // const [prevName,setPrevName] = useState("Sachin");
    const myRef = useRef();
    
    
    useEffect(()=>{
      // setPrevName(name);
      myRef.val = name;
      console.log(myRef);
    });

  return (
    <>
    <div>RefDemo2</div>
    <div>Current Name: {name}, Previous Name: {myRef.val}</div>
    <button onClick={()=> setName("Rahul")}>ChangeName</button>
    <button onClick={()=> setName("Deepak")} className='ms-1'>ChangeName2</button>
    </>
  );
}
