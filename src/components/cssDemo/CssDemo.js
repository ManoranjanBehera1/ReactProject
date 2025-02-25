import React from 'react'
import styles from './DashedBox.module.css';
import styles1 from './DashedBox1.module.css';
import './DashedBox2.css';

export default function CssDemo() {
    console.log(styles);
    const myStyle = {
        color:'red',
        fontSize: '30px'
    }
  return (
    <>
    <div>CssDemo</div>
    <div style={{color: 'blueviolet', fontSize:"20px"}}>This is a div</div>
    <div style={myStyle}>This is another div</div>
    <hr />

    <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
	<div className={styles.error}>this is a div with error class</div>
	<div className={styles1.error}>this is a div with error class</div>
	<div className='error'>this is another div with error class</div>
  </div>
    </>
  )
}
