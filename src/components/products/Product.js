import React from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
// product.js --> Props children , ProductList3.js  --> Parent

export default function Products(props) {
  const { image, category, title, price, rating, id } = props.prod;

  const navigate = useNavigate();
  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetail",
      search: `?${createSearchParams({ title, price })}`,
    });
  };
  return (
    <div
      className="col col-lg-3 p-3"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div
        className="card border text-center w-100 border border-warning"
        style={{ width: "2 rem" }}>
        <div className="text-center">
          <img
            src={props.prod.image}
            className="card-img-top img-responsive center-block p-3"
            alt="product_image"
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{props.prod.category}</h5>
          <p className="card-text">{props.prod.title}</p>
          <p className="card-text">Price: {props.prod.price}</p>
          <p className="card-text">Ratings: {props.prod.rating.rate}</p>
          <button className="btn btn-success">View</button>
          {/* <button className="btn btn-primary">
            <Link to={`/productdetail/${id}`}> View Details</Link>
          </button> */}
          <button className="btn btn-secondary" onClick={() => {
              navigateHandler(title, price);
            }}>view-2</button>
        </div>
      </div>
    </div>
  );
}
