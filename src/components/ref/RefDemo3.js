import React from 'react'
import { useRef } from 'react'

export default function RefDemo3() {  // Refs (Template Reference Variable)
    const myRef1 = useRef();
    const myRef2 = useRef();

    const addition =()=>{
        console.log(myRef1);
        const num1 = +myRef1.current.value;
        const num2 = +myRef2.current.value;
        alert(`Adiition of ${num1} & ${num2} is ${num1+num2}`)
    }
    return (
    <>
       <div>Addition using RefDemo3</div>
       <p>
        Number1 : <input ref={myRef1}/>
       </p>
       <p>
        Number2 : <input ref={myRef2}/>
       </p>
       <button onClick={addition} className='ms-1'>Add</button>
    </>
  )
}



/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
    }
    add = () => {
        let value_1 = parseInt(this.myRef1.current.value);
        let value_2 = parseInt(this.myRef2.current.value);
        alert(value_1 + value_2);
    }
    render() {
        return (
            <>
                <input name="textbox1" ref={this.myRef1} type="text" />
                <input name="textbox2" ref={this.myRef2} type="text" />
                <button onClick={this.add}>Add</button>
            </>
        )
    }

} */