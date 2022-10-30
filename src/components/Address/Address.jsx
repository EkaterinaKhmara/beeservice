import React from 'react';
import './Address.css';

export default function Address({children, ...props}) {
  
  return (
    <div {...props}>
          <span className='addressSpan'>
            <p>Київ, вул. Хрещатик, 22</p>
          </span>
    </div>
  )
}