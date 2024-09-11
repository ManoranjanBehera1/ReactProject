import React from 'react';
// const REACT_APP_MY_NAME = "Manoranjan Behera";

export default function Home() {
  return (
    <>
    <h2 className='text-center'> This is Home Component</h2>
    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
    <small> Your Name is: <b>{process.env.REACT_APP_MY_NAME}</b>.</small>
    </>
  )
}
