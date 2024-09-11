import React from 'react';
import "./header.css"

export default function Header() {
  return <h4 style={{
      color: 'white',
      textAlign:'center',
      margin:0
      
    }} className="head"><marquee behavior="scroll" direction="">Welcome to My First React Webpage</marquee></h4>; 
}
