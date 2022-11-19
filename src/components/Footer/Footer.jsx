import React from 'react';
import './Footer.css';
import Contacts from '../Contacts/Contacts';
import Address from '../Address/Address';
import Schedule from '../Schedule/Schedule';
import ButtonBinotel from '../UI/ButtonBinotel/ButtonBinotel'
import { HashLink } from 'react-router-hash-link';


export default function Footer({children, ...props}) {

  let year = new Date().getFullYear();

  return (
    
    <div className='footer'>

      <div className='allInfo'>

        <div className='allInfo__footerMenu'>   
          <div className='box__menu'>
            <ul>
            <li>
              <HashLink to="/">Головна</HashLink>
            </li>
            <li>
              <HashLink to="/#services">Послуги</HashLink>
            </li>
            <li>
              <HashLink to="/#contacts">Контакти</HashLink>
            </li>
            </ul>
          </div>
        </div>

        <div className='allInfo__contTels'>
          <Contacts className='cont' />
          <ButtonBinotel className='btnRecall'>
            <img src="/img/other/phone.png" alt="phone" />
            Замовити дзвінок
          </ButtonBinotel>
        </div>

        <div className='allInfo__addressTime'>
          <Address />
          <Schedule />
        </div>

      </div>

      <div className='bottom'>
        <p>© {year}</p>
        <p>beeservice</p>
        <p>Всі права захищені.</p>
      </div>

    </div>  
    )
}