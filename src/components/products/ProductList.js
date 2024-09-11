import React from 'react';
import {products} from "./products_data";

export default function ProductList() {
  // console.log(products);
  return (
    <>
    <h1 className="text-center bg-secondary text-white">Product List</h1>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          {products.map((products, ind) => {
            return(
              <div class="card border border-success m-2">
                <img src={products.image} class="card-img-top" alt="..." />
                <div className="card-body text-center" key={ind}>
                  <h5 className="card-title">{products.category}</h5>
                  <p className="card-text">{products.title}</p>
                  <p className="card-text">Price: {products.price}</p>
                  <p className="card-text">Ratings: {products.rating.rate}</p>
                  {/* <a href='#' className="btn btn-success text-center">Buy Now</a> */}
                  <button className="btn btn-success">BUY NOW</button>
                </div>
              </div>
            )
          })}

        </div>

        <div className="col-sm-3">
          {products.map((products, ind) => {
            return(
              <div class="card border border-success m-2">
                <img src={products.image} class="card-img-top" alt="..." />
                <div className="card-body text-center" key={ind}>
                  <h5 className="card-title">{products.category}</h5>
                  <p className="card-text">{products.title}</p>
                  <p className="card-text">Price: {products.price}</p>
                  <p className="card-text">Ratings: {products.rating.rate}</p>
                  {/* <a href='#' className="btn btn-success text-center">Buy Now</a> */}
                  <button className="btn btn-success">BUY NOW</button>
                </div>
              </div>
            )
          })}

        </div>
        <div className="col-sm-3">
          {products.map((products, ind) => {
            return(
              <div class="card border border-success m-2">
                <img src={products.image} class="card-img-top" alt="..." />
                <div className="card-body text-center" key={ind}>
                  <h5 className="card-title">{products.category}</h5>
                  <p className="card-text">{products.title}</p>
                  <p className="card-text">Price: {products.price}</p>
                  <p className="card-text">Ratings: {products.rating.rate}</p>
                  {/* <a href='#' className="btn btn-success text-center">Buy Now</a> */}
                  <button className="btn btn-success">BUY NOW</button>
                </div>
              </div>
            )
          })}

        </div>
        <div className="col-sm-3">
          {products.map((products, ind) => {
            return(
              <div class="card border border-success m-2">
                <img src={products.image} class="card-img-top" alt="..." />
                <div className="card-body text-center" key={ind}>
                  <h5 className="card-title">{products.category}</h5>
                  <p className="card-text">{products.title}</p>
                  <p className="card-text">Price: {products.price}</p>
                  <p className="card-text">Ratings: {products.rating.rate}</p>
                  {/* <a href='#' className="btn btn-success text-center">Buy Now</a> */}
                  <button className="btn btn-success">BUY NOW</button>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
    </>
  )
}
