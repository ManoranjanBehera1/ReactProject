import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const [params, setParam] = useState({});

  useEffect(() => {
    const allParams = Object.fromEntries([...searchParams]);
    console.log(allParams); // get new values onchange
    setParam(allParams);
  }, [searchParams]);
  return (
    <>
    <div>ProductDetail</div>
    <h1>This is Query Param Example</h1>
    <div className="card col-sm-3 offset-3">
        <div className="card-body text-center">
          <h5 className="card-title">{params.title}</h5>
          <p className="card-text">{params.price}</p>
         
        </div>
      </div>
    </>
  )
}
