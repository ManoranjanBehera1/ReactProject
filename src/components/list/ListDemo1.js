import React from 'react'

export default function ListDemo1() {
    const cars = ['Tata', 'Honda', 'Maruti', 'Toyota', 'Hundai']
  return (
    <>
    
    <div className="text-center">ListDemo1</div>
    {/* <div>{cars[0]}</div>
    <div>{cars[1]}</div> */}
    {cars.map((car,ind) => {
      return <div key={ind}>{car}</div>
    })}
    
    <hr />
    
    <ol type='a'>
      {cars.map((car,ind)=>{
        return <li key={ind}>{car}</li>
      })}
    </ol>
    </>
  )
}
