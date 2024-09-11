import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {   //path param
  const [prodInfo, setProdInfo] = useState({});
  const { id } = useParams();
  console.log(useParams());

  const fetchData = async () => {
    let prodInfo = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProdInfo(prodInfo);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div>ProductDetails</div>
      <h1 className="text-center">This is the details of product - {id}</h1>

      <div className="card col-sm-3 offset-3">
        <img
          src={prodInfo?.image}
          className="card-img-top img-responsive center-block p-3"
          alt="product_image"
          style={{ width: "10rem", height: "10rem" }}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{prodInfo?.category}</h5>
          <p className="card-text">{prodInfo?.title}</p>
          <p className="card-text">Price: {prodInfo?.price}</p>
          <p className="card-text">Ratings: {prodInfo?.rating?.rate}</p>
        </div>
      </div>
    </>
  );
}
