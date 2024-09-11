import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function HttpDemo1() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async function () {
    const products = await fetch("https://fakestoreapi.com/products");
    const finalData = await products.json();
    setProducts(finalData);
    // console.log(products, finalData);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="text-center">Fetch Products</h1>
      <div className="container">
        <div className="row">
          {products.map((products, ind) => {
            return (
              <div className="col-sm-3 card" key={ind}>
                <img
                  src={products.image}
                  className="card-img-top"
                  style={{ height: "150px" }}
                  alt=""
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{products.category}</h5>
                  <p className="card-text">{products.title}</p>
                  <p className="card-text">Price: {products.price}</p>
                  <p className="card-text">Ratings: {products.rating.rate}</p>
                  <button className="btn btn-success">View</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
