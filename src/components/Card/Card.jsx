import React from 'react'
import './card.css';

export default function Card({title,content}) {
  return (
    <div className='card'>
        <div className='card-title'>
            {title}
        </div>
        <div className='card-content'>
            {content}
        </div>
      
    </div>
  )
}
