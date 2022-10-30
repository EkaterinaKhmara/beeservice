import React from 'react';
import './Schedule.css';


export default function Schedule({children, ...props}) {
  
  return (
    <div {...props}>
      <span className='scheduleSpan'>
        <p>ПН-ПТ 9-19</p>
        <p>СБ-НД 10-17</p>
      </span>
    </div>
  )
}