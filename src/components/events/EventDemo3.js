import React from 'react'
import { useState } from 'react'

export default function EventDemo3() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    let changeHandler1 = (e) => {
        setNum1(e.target.value);
    };
    let changeHandler2 = (e) => {
        setNum2(e.target.value);
    };
    let addition = (e) => {
        setSum(+num1 + +num2);
    };
  return (
    <>
    <h2>EventDemo3</h2>
    <h4 className='text-center bg-primary'>Addition</h4>
    <p>
        Enter Number-1:
        <input onChange={changeHandler1} />
    </p>
    <p>
        Enter Number-2:
        <input onChange={changeHandler2} />
    </p>
    <button onClick={addition} className='ms-1'>Add</button>
    <p>
        Addition of {num1} & {num2} is {sum}
    </p>
    </>
  )
}
