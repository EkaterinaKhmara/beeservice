import React from 'react';
import './Header.css';
import Address from '../Address/Address';
import Schedule from '../Schedule/Schedule';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

  return (
    <div className='header'>

      <div className='header__box'>

        <div className='box__one'>
          <Logo />
        </div>

        <div className='box__two-three'>

          <div className='box__two'>
            <div className='address__div'>
              <div className='picText'>
                <FontAwesomeIcon icon={faLocationDot} className='faLocation' />
                <p className='name'>Місцезнаходження:</p>
              </div>
              <Address className='box__address' />
            </div>

            <div className='schedule__div'>
              <div className='picText'>
                <FontAwesomeIcon icon={faCalendarDays} className='faCalendar' />
                <p className='name'>Графік роботи:</p>
              </div>
              <Schedule className='box__schedule' />
            </div>
          </div>

          <div className='box__three'>
            <div className='cont__div'>
              <div className='picText'>
                <FontAwesomeIcon icon={faPhone} className='faPhone' />
                <p className='name'>Контакти:</p>
              </div>
              <Contacts className='box__contacts' />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}