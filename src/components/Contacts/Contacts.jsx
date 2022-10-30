import React from 'react';
import './Contacts.css';

export default function Contacts({children, ...props}) {
  
  return (
    <div {...props}>
        <span className='img_tel'>
          <img src='/img/icon_contacts/vodafone.png' alt='vodafone' />
          {/* <p>+38 050-032-70-07</p> */}
          <a href='tel:+380500327007'>+38 050-032-70-07</a>
        </span>
        <span className='img_tel'>
          <img src='/img/icon_contacts/lifecell.png' alt='lifecell' />
          {/* <p>+38 073-032-70-07</p> */}
          <a href='tel:+380730327007'>+38 073-032-70-07</a>
        </span>
        <span className='img_tel'>
          <img src='/img/icon_contacts/kyivstar.png' alt='kyivstar' />
          <a href='tel:+380960327007'>+38 096-032-70-07</a>
          {/* <p>+38 096-032-70-07</p> */}
        </span>
    </div>
  )
}