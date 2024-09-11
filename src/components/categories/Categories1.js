import React from 'react'
import "./categories.css";
import categories from "./categories.json";
import Category from './Category';

export default function Categories1() {
  return <div className="container-fluid">
    <div className="row mt-2">
      {categories.map((category, ind) =>{
        return (
        <div className='col' key={ind}>
           <Category category={category}/>
           
        </div>
        );
      })}
      
    
    </div>
  </div>
}
