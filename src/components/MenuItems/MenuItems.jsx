import React from 'react';
import './MenuItems.css';

export default function MenuItems({children, ...props}) {
  
  return (
    <div {...props}>{children}</div>
  )
}