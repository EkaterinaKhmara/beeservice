import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function Tv({ tv, screen, pageName }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт телевізорів та моніторів. Гарантія. Київ";
  });


  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/tv/pic0.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/tv/pic1.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/tv/pic2.jpg" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/tv/pic3.jpg" alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/tv/pic4.png" alt="Fifth slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='text'>
          <p>В BeeService працюють <b>спеціалісти вищої категорії</b>, які здатні повернути
            ваш <b>телевізор чи монітор</b> до "життя".</p>
          <p>Наші фахівці можуть відремонтувати такі бренди - <b>Asus, LG, Acer, Panasonic, 
            Philips, Samsung, Sony, BenQ, MSI, AOC, GIGABYTE, Dell, Lenovo, HP, Razer, 
            Digma, ViewSonic, TCL, Telefunken, Thomson, Toshiba, Xiaomi, Realme, Grundig, 
            Hisense, Liyama</b> та багато інших.</p>
          <p>Перш ніж приступати до ремонту, фахівець проведе повну <b>безкоштовну діагностику </b> 
            пристрою, щоб точно встановити причину несправності.</p>
          <p>Після діагностики на гаджет буде чекати <b>професійний ремонт</b> з заміною всіх необхідних 
            комплектуючих та <b>повне відновлення</b> його функцій.</p>
          <p>Більш детальну інформацію ви завжди можете отримати <b>зателефонувавши </b>
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
          <p className='topicName'>Монітори</p>
        </div>
        {screen.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `screen`}>
            <p className='name'>{item.name_screen}</p>
            <p className='guarantee'>{item.guarantee_screen}</p>
            <p className='price'>{item.price_screen}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Телевізори</p>
        </div>
        {tv.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 3 + `tv`}>
            <p className='name'>{item.name_tv}</p>
            <p className='guarantee'>{item.guarantee_tv}</p>
            <p className='price'>{item.price_tv}</p>
          </div>
        })}
      </div>
    </div>
  )
}