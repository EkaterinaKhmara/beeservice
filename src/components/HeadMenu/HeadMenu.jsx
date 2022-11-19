import React, { useState } from 'react';
import './HeadMenu.css';
import ButtonBinotel from '../UI/ButtonBinotel/ButtonBinotel';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';


export default function HeadMenu() {

  const [open, setOpen] = useState(false);

  // if (open === true) {
  //   document.body.style.overflow = "hidden";
  // }

  function activeMenu() {
    setOpen(prev => !prev)

    if (open === false) {
      document.body.style.overflow = 'hidden';
    }else {
      document.body.style.overflow = 'visible';
    }
  }

  // function nonActiveMenu() {
  //   setOpen(prev => !prev)
  // }

  // const url = window.location.href;
  // let x = url.split('/')[2];
  // let y = url.split('/')[3];
  // console.log(x);
  // console.log(y);


  return (
    <div className='headMenu'>
      <div className='headMenu__box'>

        <div className='menuBtn'>
          <FontAwesomeIcon icon={faBars} className='burgerMenu' onClick={activeMenu} />
        </div>

        <div className={open ? 'aсtiveMenu' : 'menuMob'}>
          <div className='close' onClick={activeMenu}>
            <FontAwesomeIcon icon={faXmark} className='closeIcon' />
          </div>
          <div className='mobMenu'>
            <ul>
              <li>
                <HashLink className='tab' to="/" onClick={activeMenu}>Головна</HashLink>
              </li>
              <li>
                <HashLink className='tab' to="/#services" onClick={activeMenu}>Послуги</HashLink>
                <ul className='toTab'>
                  <li>
                    <Link to='/computer-laptop' className='linkMobMenu' onClick={activeMenu}>Ремонт комп'ютерів та ноутбуків</Link>
                  </li>
                  <li>
                    <Link to='/tv-screen' className='linkMobMenu' onClick={activeMenu}>Ремонт телевізорів та моніторів</Link>
                  </li>
                  <li>
                    <Link to='/phone-tablet' className='linkMobMenu' onClick={activeMenu}>Ремонт телефонів, планшетів, навігаторів</Link>
                  </li>
                  <li>
                    <Link to='/office-equipment' className='linkMobMenu' onClick={activeMenu}>Ремонт принтерів та офісної техніки</Link>
                  </li>
                  <li>
                    <Link to='/audio-system' className='linkMobMenu' onClick={activeMenu}>Ремонт аудіосистем</Link>
                  </li>
                  <li>
                    <Link to='/home-equipment' className='linkMobMenu' onClick={activeMenu}>Ремонт малої побутової техніки</Link>
                  </li>
                </ul>
              </li>
              <li>
                <HashLink className='tab' to='/#contacts' onClick={activeMenu}>Контакти</HashLink>
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