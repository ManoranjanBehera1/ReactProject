import React from 'react'

export default function ProductDeStructuring(props) { // children of ProductList4.js
    // Props De-structuring...
    const {image, category, title, price, rating} = props.prod;
    return <div className="col col-lg-3 p-3" style={{ display: "flex", flexDirection: "row" }}>
    <div className="card border text-center w-100 border border-warning" style={{ width: "2 rem" }}>
         <div className="text-center">
           <img src={image} className="card-img-top img-responsive center-block p-3"
             alt="product_image" style={{ width: "10rem", height: "10rem" }} />
         </div>
         <div className="card-body">
           <h5 className="card-title">{category}</h5>
           <p className="card-text">{title}</p>
           <p className="card-text">Price: {price}</p>
           <p className="card-text">Ratings: {rating.rate}</p>
           <button className="btn btn-success">View</button>
         </div>
    </div>
  </div>
}
