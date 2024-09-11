import React from 'react'
import { useState } from 'react'

export default function RemainingCharacter() {
    // const [msg, setMsg] = useState('');
    const [remaining, setRemaining] = useState(100);
    const keyUpHandler = (e)=>{
        const msg = e.target.value;
        // setMsg(msg);
        setRemaining(100-msg.length);

    }
  return (
    <>
    <div>RemainingCharacter</div>
    <textarea onKeyUp={keyUpHandler} maxLength={100} className='m-2'></textarea>
    {/* <h4>Msg is : {msg}</h4> */}
    <h4>Remainin  Character : {remaining}</h4>
    </>
  )
}
