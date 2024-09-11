import React from 'react'
import "./categories.css";
import mobile from './mobile.jpg' // ES
// const abc = require('./mobile.jpg') //commonJs

export default function Categories() {
  return <div className="container-fluid">
    <div className="row mt-2">
      <div className="col">
        <div className="text-center category">
          <img src='images/grocery.jpg' alt='No img' /> 
          <div><span>Grocery</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src={mobile} alt='No img' />
          {/* <img src={require(abc)} alt="No img" /> */}
          <div><span>Mobiles</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='images/fashion.jpg' alt='No img' />
          <div><span>Fashion</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt='No img' />
          <div><span>Electronics</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' alt='No img' />
          <div><span>Home</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt='No img' />
          <div><span>Appliances</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' alt='No img' />
          <div><span>Travel</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt='No img' />
          <div><span>Top Offers</span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' alt='No img' />
          <div><span>Beauty & Toys </span></div>
        </div>
      </div>
      <div className="col">
        <div className="text-center category">
          <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' alt='No img' />
          <div><span>Two Wheelers</span></div>
        </div>
      </div>
    </div>
  </div>
}
