import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
// import './Phone.css';
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function Phone({ phone, book, navi, tablet, pageName }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт телефонів, планшетів, навігаторів, електронних книг. Гарантія. Київ";
  });

  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/phone/pic0.webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/phone/pic1.webp" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/phone/pic4.webp" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/phone/pic5.webp" alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='text'>
          <p>В BeeService працюють спеціалісти, які ремонтують <b>телефони, 
            планшети, навігатори та електронні книжки.</b> Несправність 
            може бути будь-якою, але ми зробимо все, щоб ваш гаджет 
            працював як новий.</p>
          <p>Фахівці ремонтують елетроніку таких брендів як <b>Acer, Amazon, Apple, 
            Asus, Alcatel, Archos, BenQ, BQ, BlackBerry, Blackview, Bravis, Blaupunkt, 
            Clarion, EasyGo, Fly, Gigabyte, Google, Garmin, GoClever, Globalsar, HTC, 
            Honor, HP, Huawei, Holux, Kenwood, Lenovo, LG, Meizu, Microsoft, Motorola, 
            Nokia, NEC, OnePlus, Oppo, Oukitel, Panasonic, Philips, Polaroid, Pioneer, 
            Realme, Samsung, Sony, Xiaomi, ZTE</b> та багато інших!</p>
          <p>Перед ремонтом, спеціаліст проведе <b>безкоштовну діагностику</b> гаджету задля 
            визначення несправності.</p>
          <p>Детальну інформацію ви завжди можете отримати <b>зателефонувавши </b>
            до нас або <b>замовивши дзвінок</b> у нас на сайті!</p>
        </div>
      </div>

      <div className='prodList'>
        <div className='nameTable'>
          <p className='name'>Послуга</p>
          <p className='guarantee'>Гарантія</p>
          <p className='price'>Ціна</p>
        </div>
        <div className='nameTitle'>
          <p className='topicName'>Телефони</p>
        </div>
        {phone.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `phone`}>
            <p className='name'>{item.name_phone}</p>
            <p className='guarantee'>{item.guarantee_phone}</p>
            <p className='price'>{item.price_phone}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Планшети</p>
        </div>
        {tablet.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `tablet`}>
            <p className='name'>{item.name_tablet}</p>
            <p className='guarantee'>{item.guarantee_tablet}</p>
            <p className='price'>{item.price_tablet}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Електронні книжки</p>
        </div>
        {book.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 3 + `book`}>
            <p className='name'>{item.name_book}</p>
            <p className='guarantee'>{item.guarantee_book}</p>
            <p className='price'>{item.price_book}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Навігатори</p>
        </div>
        {navi.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 4 + `navi`}>
            <p className='name'>{item.name_navi}</p>
            <p className='guarantee'>{item.guarantee_navi}</p>
            <p className='price'>{item.price_navi}</p>
          </div>
        })}
        <div className='text'>
          <p>**Ціна буде залежати від стану комплектуючого та проблеми, яку необхідно усунути.
            Наш менеджер надасть більш детальну інформацію щодо ремонту
            та подальших дій.</p>
        </div>
      </div>
    </div>
  )
}