import React from 'react'

export default function ConditionalDemo3() {
    const unreadMsgs = ['hello', 'hiii', 'by','Gd Evn'];
  return (
    <div>
        <h1>Hello! Margarita</h1>
        {unreadMsgs.length> 0 && (
            <h2> You have {unreadMsgs.length} unread messages</h2>
        )}
    </div>
  )
}
