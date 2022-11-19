import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function Computer({ computer, laptop, pageName }) {

  // function getWindowSize() {
  //   const {innerWidth} = window;
  //   return {innerWidth};
  // }


  // const [windowSize, setWindowSize] = useState(getWindowSize());

  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener('resize', handleWindowResize);

  //   console.log(windowSize.innerWidth);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };

  // }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт комп'ютерів та ноутбуків. Гарантія. Київ";
  });

  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/comp/pic0.webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/comp/pic1.webp" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/comp/pic4.webp" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/comp/pic5.webp" alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='text'>
          <p>Наш сервіс виконує <b>якісний ремонт комп'ютерів та ноутбуків</b>. Несправність 
            вашого гаджету може бути будь-якою, та наші професіонали 
            зроблять все щоб це виправити.</p>
          <p>BeeService працює з такими брендами як <b>Dell, Apple, HP, 
            Microsoft, Asus, Lenovo, Xiaomi, Huawei, Honor, MSI, Acer, 
            Alienware, GIGABYTE, Digma, Irbis, Prestigio та інші</b>.</p>
          <p><b>Все, що вам необхідно зробити</b> - зв'язатись з нами будь-яким зручним
            для вас способом, озвучити проблему та привезти несправне обладнання 
            до нас в майстерню, або довірити забір нам.</p>
          <p>Фахівці проведуть <b>безкоштовну діагностику</b> та негайно розпочнуть ремонт,
            при цьому, за необхідності, будуть інформувати вас на всіх етапах робіт.</p>
          <p>Будь-яку детальну інформацію ви завжди можете отримати <b>зателефонувавши </b> 
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
          <p className='topicName'>Комп'ютери</p>
        </div>
        {/* сделать сортировку списка (ремонт, замена ...) по группам */}
        {computer.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `comp`}>
            <p className='name'>{item.name_computer}</p>
            <p className='guarantee'>{item.guarantee_computer}</p>
            <p className='price'>{item.price_computer}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Ноутбуки</p>
        </div>
        {laptop.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `laptop`}>
            <p className='name'>{item.name_laptop}</p>
            <p className='guarantee'>{item.guarantee_laptop}</p>
            <p className='price'>{item.price_laptop}</p>
          </div>
        })}
        <div className='text'>
          <p>**Ціна буде залежати від стану комплектуючого та проблеми, яку необхідно усунути.
            Наш менеджер надасть більш детальну інформацію щодо ремонту
            та подальших дій.</p>
        </div>
      </div>
    </div>
  );
}