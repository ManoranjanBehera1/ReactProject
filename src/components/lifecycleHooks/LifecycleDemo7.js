import React from 'react'
import { useEffect, useState } from 'react';
import ForceUpdate1 from '../forceUpdate/ForceUpdate1';

export default function LifecycleDemo7() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);
  
    useEffect(() => {
      console.log("use effect called"); // mounting/updating
      
      return () => {
        console.log("use effect called while unmounting"); // unmounting
      };
    }, [a,c]);

    return (
      <>
        <div>LifecyleDemo7</div>
        <div>
          {a} {b} {c}
        </div>
        <button onClick={() => setA(15)}>update A</button>
        <button onClick={() => setB(25)} className='ms-1'>update B</button>
        <button onClick={() => setC(35)} className='ms-1'>update C</button>     
      </>
    );
}

