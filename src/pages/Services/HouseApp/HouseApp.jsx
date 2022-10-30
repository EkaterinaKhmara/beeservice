import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function HouseApp({ homeequip, pageName }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт малої побутової техніки. Гарантія. Київ";
  });

  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/homeequip/1.webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/homeequip/2.webp" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/homeequip/3.webp" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='text'>
          <p>BeeService пропонує свої послуги з професіонального ремонту <b>дрібної побутової техніки</b>.</p>
          <p>Ремонтуємо різноманітні бренди, зокрема - <b>Ariston, AEG, Electrolux, Bosch, Siemens, 
            Miele, Thomas, Hansa, Karcher, Rowenta, Kaiser, Braun, Indesit, Candy, ZANUSSI, Tefal, 
            Moulinex, Beko, Sunny, Samsung, Daewoo, LG, Toshiba, Hitachi, Panasonic, Sony, Kenwood </b> та інші.</p>
          <p>Наші фахівці проведуть <b>якісний ремонт</b>, заміну всіх несправних
            комплектуючих та, при потребі, інформуватимуть вас на всіх етапах роботи.</p>
          <p>Все що вам потрібно - <b>зв'язатися з нами</b> будь-яким зручним для вас способом, а 
          все інше ми візьмемо на себе.</p>
          <p>Будь-яку більш детальну інформацію ви завжди можете отримати <b>зателефонувавши </b>
            до нас або <b>замовивши дзвінок</b> у нас на сайті!</p>
        </div>
      </div>

      <div className='prodList'>
        <div className='nameTable'>
          <p className='name'>Послуга</p>
          <p className='guarantee'>Гарантія</p>
          <p className='price'>Ціна</p>
        </div>
        {homeequip.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `homeequip`}>
            <p className='name'>{item.name_homeequip}</p>
            <p className='guarantee'>{item.guarantee_homeequip}</p>
            <p className='price'>{item.price_homeequip}</p>
          </div>
        })}
      </div>
    </div>
  )
}