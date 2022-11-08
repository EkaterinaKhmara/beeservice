import React, { useState } from 'react';
import './HeadMenu.css';
import ButtonBinotel from '../UI/ButtonBinotel/ButtonBinotel';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';


export default function HeadMenu() {

  const [open, setOpen] = useState(false);

  function activeMenu() {
    setOpen(prev => !prev)
  }

  function nonActiveMenu() {
    setOpen(prev => !prev)
  }

  return (
    <div className='headMenu'>
      <div className='headMenu__box'>

        <div className='menuBtn'>
          <FontAwesomeIcon icon={faBars} className='burgerMenu' onClick={activeMenu} />
        </div>

        <div className={open ? 'aсtiveMenu' : 'menuMob'}>
          <div className='close' onClick={nonActiveMenu}>
            <FontAwesomeIcon icon={faXmark} className='closeIcon' />
          </div>
          <div className='mobMenu'>
            <ul>
              <li>
                <HashLink className='tab' to="/">Головна</HashLink>
              </li>
              <li>
                <HashLink className='tab' to="/#services">Послуги</HashLink>
                <ul className='toTab'>
                  <li><Link to="/computer-laptop">Ремонт комп'ютерів та ноутбуків</Link></li>
                  <li><Link to="/tv-screen">Ремонт телевізорів та моніторів</Link></li>
                  <li><Link to="/phone-tablet">Ремонт телефонів, планшетів, навігаторів</Link></li>
                  <li><Link to="/office-equipment">Ремонт принтерів та офісної техніки</Link></li>
                  <li><Link to="/audio-system">Ремонт аудіосистем</Link></li>
                  <li><Link to="/home-equipment">Ремонт малої побутової техніки</Link></li>
                </ul>
              </li>
              <li>
                <HashLink className='tab' to="/#contacts">Контакти</HashLink>
              </li>
            </ul>
          </div>
        </div>

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

        <div className='box__Binotel'>
          <ButtonBinotel className='box__recall'>
            <img src="/img/other/phone.png" alt="phone" />
            Замовити дзвінок
          </ButtonBinotel>
        </div>

      </div>
    </div>
  )
}