import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetails() {
    const {id} = useParams();
  return (
    <div>UserDetails- {id}</div>
  )
}
