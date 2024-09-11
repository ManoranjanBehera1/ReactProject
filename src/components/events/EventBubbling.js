import React from 'react'

export default function EventBubbling() {
    const f1 = ()=>{
        console.log("F1...");
    }
    const f2 = ()=>{
        console.log("F2...");
    }
    const f3 = ()=>{
        console.log("F3...");
    }
  return (
   <>
    <div>EventBubbling</div>
      <div className="border" onClick={f1}>Div-1
         <div className="border" onClick={f2}>Div-2
            <div className="border" onClick={f3}>Div-3
         </div>
      </div>
    </div>
   </>
  )
}
