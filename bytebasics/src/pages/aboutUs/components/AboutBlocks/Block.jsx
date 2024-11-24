import React from 'react'
import './Block.scss';
function Block({title, description}) {
  return (
    <div className='blockBody'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Block
