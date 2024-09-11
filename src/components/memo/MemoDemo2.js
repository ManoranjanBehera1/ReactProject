import React from 'react'

export default function MemoDemo2({name}) {
  return (
    <>
    {console.log("Memodemo-2 rendered...")}
    <div>MemoDemo2 - Child Component</div>
    <div>Name from my Parent is: {name}</div>
    </>
  )
}
