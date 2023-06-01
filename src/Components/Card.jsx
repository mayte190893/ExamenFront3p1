import React from 'react'

const Card = (props) => {
  return (
    <div>
      <p className='text'>El autor es {props.name}</p>
      <p className='text'>y el nombre del libro es: {props.book}</p>
    </div>
  )
}

export default Card