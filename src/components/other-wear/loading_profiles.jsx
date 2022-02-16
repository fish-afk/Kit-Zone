import React from 'react'

export default function Laoding
(props) {
  return (
    
        <div className='col gy-3'>
      <div className="card cards-styles" id="hovering">
      <img src=""className="card-img-top bg-secondary" alt="..."></img>
        <div className="card-body bg-dark text-white">
          {props.item}
        </div>
      </div>
      </div>
    
  )
}
