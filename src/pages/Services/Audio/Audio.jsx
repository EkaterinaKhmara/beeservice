import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function Audio({ audio, pageName }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт навушників та аудіосистем. Гарантія. Київ";
  });

  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/audio/1.webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/audio/2.webp" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/audio/3.webp" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='text'>
          <p>BeeService пропонує якісний ремонт <b>аудіосистем</b>. Фахівці виконають 
          роботи будь-якої складності та повернуть вашій аудіосистемі початкове звучання.</p>
          <p>Майстерня ремонтує такі бренди - <b>Edifier, F & D, Microlab, Genius, JBL, Logitech, 
            Sven, Dali, Klipsh, Yamaha</b> та інші!</p>
          <p>Перед ремонтом майстер проведе <b>безкоштовну діагностику</b> для встановлення причини 
            несправності.</p>
          <p>Після діагностики фахівець замінить всі несправні комплектуючі та інформуватимуть вас 
            на всіх етапах ремонту, якщо це буде необхідно.</p>
          <p><b>Зв'яжіться</b> з нами будь-яким зручним для вас способом і ми вирішимо з вами всі питання.</p>
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
        <div className='nameTitle'>
          <p className='topicName'>Аудіосистеми</p>
        </div>
        {audio.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `audio`}>
            <p className='name'>{item.name_audio}</p>
            <p className='guarantee'>{item.guarantee_audio}</p>
            <p className='price'>{item.price_audio}</p>
          </div>
        })}
      </div>
    </div>
  )
}