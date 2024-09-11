import React from 'react'
import { useState } from 'react'

export default function EventDemo5() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    /* let changeHandler = (e) => {
        if (e.target.name === "num1") {
            setNum1(e.target.value);
        } else {
            setNum2(e.target.value);
        }
    } */
    let addition = (e) => {
        // console.log(e)
        setSum(+num1 + +num2);
    };
  return (
    <>
    <div>EventDemo4</div>
    <h4 className='text-center bg-primary'>Addition</h4>
    <p>
        Enter First Number:
        {/* <input name = 'num1' onChange={changeHandler} /> */}
        <input name = "num1" onChange={(e)=>setNum1(e.target.value)} />
    
    </p>
    <p>
        Enter Second Number:
        {/* <input name = 'num2' onChange={changeHandler} /> */}
        <input name = "num2" onChange={(e)=>setNum2(e.target.value)} />
        
    </p>
    <button onClick={addition}>Add</button>
    <p>
        Addition of {num1} & {num2} is {sum}
    </p>
    </>
  )
}
