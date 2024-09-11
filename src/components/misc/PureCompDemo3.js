import React from 'react'
import { useState } from 'react'

export default function PureCompDemo3() {
    const [name, setName] = useState('Sachin');
    const changeName = ()=> {
      setName("Sachin");
    };
    
  return (
    <>
    {console.log("Render Called...")}
    <div>PureCompDemo3</div>
    <div>Name is: {name}</div>
    <button onClick={changeName}>Change Name</button>
    </>
  )
}
