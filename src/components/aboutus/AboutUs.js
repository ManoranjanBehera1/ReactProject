import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Link from '../contact/Contact'

export default function AboutUs() {
  const navigate = useNavigate();

  const goToProducts = () => {
    console.log("Do Something... "); // logic
    navigate("/productlist2");
  };
  return (
    <>
      <h3 className="text-center"> This is About Us Component</h3>
      <a href="/productlist2">Go to Products</a>
      <br /> <br />
      <Link to="/productlist2">Go to Products</Link>
      <br /> <br />
      <button onClick={goToProducts}>Do something and go to products</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(-2)}>Go last 2</button>
    </>
  );
}
