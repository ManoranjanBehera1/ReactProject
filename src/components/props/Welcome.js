import React from 'react'

// Props.children	(pre-defined keyword)
export default function Welcome(props) {
  return (
    <>
    <h3>This is Welcome Component</h3>
    <h3>This is Static Text</h3>
    <h3>{props.children}</h3>
    </>
  )
}
