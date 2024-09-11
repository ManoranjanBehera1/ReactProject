import React from "react";    
import { Link } from "react-router-dom";
import { products } from "./products_data";
// import Products from "./Product";
import Products from "./ProductDeStructuring";
import SearchBar from 'react-js-search';

export default function ProductsList4() {  // parent of ProductDeStructuring
 
  return (
    <>
    <h1 className="text-center bg-secondary text-white">Product List4</h1>
    <div className="container-fluid">
      <div className="row m-3">
        <div className="col-sm-4 offset-3">
          <input type="search"className="form-control" placeholder="Search..." />
        </div>
        <div className="col-sm-2 ">
          <button className="btn btn-primary">Asc</button>
          <button className="btn btn-secondary ms-1">Desc</button>
        </div>
      </div>
      <div className="row">
        {products.map((product, ind) => {
          return <Products prod={product} key={ind}/>
        })}
      </div>
    </div>
    </>
  );
}
