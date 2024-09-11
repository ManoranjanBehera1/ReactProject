import React from 'react';
import PropTypes from 'prop-types';

/* export default function GreetDemo1() {
  return (
    <div>Hello Sachin, Good morning</div>
  )
} */
/* export default function GreetDemo1(props) {    // props
  return (
    <div>Hello {props.name}, {props.msg} </div>
  )
} */
export default function GreetDemo1({name, msg, age, f1}) {   // PropTypes
  return (
    <>
    <div>Hello {name}, {msg}, Your age is {age} </div>
    <button onClick={f1}>Click Me</button>
    </>
  )
}
GreetDemo1.propTypes = {	
  name: PropTypes.string,	 // optional prop
  msg: PropTypes.string.isRequired,  // required prop
  age: PropTypes.number  // optional prop
};