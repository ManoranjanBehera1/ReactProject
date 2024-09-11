import React from 'react'

function MemoDemo3({name}) {
  return (
    <>
    {console.log("Memodemo-3 rendered...")}
    <div>MemoDemo3 - Child Component</div>
    <div>Name from my Parent is: {name}</div>
    </>
  )
}
export default React.memo(MemoDemo3);