import React from "react";    // product.js --> Props children , ProductList3.js  --> Parent
import { Link } from "react-router-dom";
import { products } from "./products_data";
import Products from "./Product";

export default function ProductsList3() {
  // const {image, category, title, price, rating, id} = props.prod;
  return (
    <>
    <h1 className="text-center bg-secondary text-white">Product List3</h1>
    <div className="container-fluid">
      <div>
        <div></div>
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
