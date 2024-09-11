import React from 'react'

export default function RefDemo4() {  // callback ref
    let inputRef1; 
    let inputRef2;
  
    const addition = () => {
      const val1 = +inputRef1.value;
      const val2 = +inputRef2.value;
      alert(`Addition of ${val1} & ${val2} is ${val1 + val2}`);
    };
  
    return (
      <div>
        <h3 className='text-center'>Addition Using callback Ref</h3>
        <p>Num1: <input ref={inputBox => { inputRef1 = inputBox; }} /></p>
        <p>Num2: <input ref={inputBox => { inputRef2 = inputBox; }} /></p> 
        <button onClick={addition}>Add</button>
      </div>
    );
}
