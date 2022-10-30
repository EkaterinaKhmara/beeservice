import React from 'react';
import './ButtonBinotel.css';

export default function Button({children, ...props}) {
  
  return (
    <button {...props}>{children}</button>
  )
}