import React from "react";
import { products } from "./products_data";

export default function ProductsList2() {
  // const {image, category, title, price, rating, id} = props.prod;
  // props Destructuring
  
  return (
    <>
    <h1 className="text-center bg-secondary text-white">Product List2</h1>
    <div className="container-fluid">
      <div>
        <div></div>
      </div>
      <div className="row">
        {products.map((product, ind) => {
          return (
            <div className="col col-lg-3 p-3" style={{ display: "flex", flexDirection: "row" }} key={ind}>
              <div className="card border text-center w-100 border border-warning" style={{ width: "2 rem" }}>
                   <div className="text-center">
                     <img src={product.image} className="card-img-top img-responsive center-block p-3"
                       alt="product_image" style={{ width: "10rem", height: "10rem" }} />
                   </div>
                   <div className="card-body">
                     <h5 className="card-title">{product.category}</h5>
                     <p className="card-text">{product.title}</p>
                     <p className="card-text">Price: {product.price}</p>
                     <p className="card-text">Ratings: {product.rating.rate}</p>
                     <button className="btn btn-success">View</button>
                     {/* <button className="btn btn-primary">
                     <Link to={`/productdetails/${id}`}> View Details</Link>
                     </button> */}
                     
                   </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
