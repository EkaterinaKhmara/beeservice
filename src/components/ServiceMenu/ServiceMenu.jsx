import React from 'react';
import './ServiceMenu.css';
import { NavLink } from 'react-router-dom';

export default function ServiceMenu() {

  return (
    <div className='servMenu'>
      <NavLink to='/computer-laptop' className='servLink'>Ремонт комп'ютерів та ноутбуків</NavLink>
      <div className='vertLine'></div>
      <NavLink to='/tv-screen' className='servLink'>Ремонт телевізорів та моніторів</NavLink>
      <div className='vertLine'></div>
      <NavLink to='/phone-tablet' className='servLink'>Ремонт телефонів, планшетів, навігаторів</NavLink>
      <div className='vertLine'></div>
      <NavLink to='/office-equipment' className='servLink'>Ремонт принтерів та офісної техніки</NavLink>
      <div className='vertLine'></div>
      <NavLink to='/audio-system' className='servLink'>Ремонт аудіосистем</NavLink>
      <div className='vertLine'></div>
      <NavLink to='/home-equipment' className='servLink'>Ремонт малої побутової техніки</NavLink>
    </div>
  )
}