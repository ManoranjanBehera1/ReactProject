import React from 'react'

export default function ConditionalDemo2() {
    const num = 5;
    // const num = +prompt('Enter a Number')

    if (num % 2 === 0){
      return <h1>{num} is Even Number</h1>
    }else {
  return <h1>{num} is Odd Number</h1>
    }
}
