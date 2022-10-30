import React from 'react';
import './HeadMenu.css';
import ButtonBinotel from '../UI/ButtonBinotel/ButtonBinotel';
import { HashLink } from 'react-router-hash-link';

export default function HeadMenu() {

  return (
    <div className='headMenu'>
      <div className='headMenu__box'>   
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