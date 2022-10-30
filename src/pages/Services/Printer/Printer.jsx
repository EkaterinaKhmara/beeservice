import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../priceAllStyles.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

import { Carousel } from 'react-bootstrap';


export default function Printer({ printer, cartridge, pageName }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = "Ремонт принтерів та офісної техніки. Гарантія. Київ";
  });


  return (
    <div className='copmPage'>
      <ServiceMenu />
      <h2>{pageName}</h2>
      <div className='infoBox'>
        <div className='Carousel'>
          <Carousel>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/printer/1.webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/printer/2.webp" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="pic-block" src="/img/services/printer/3.webp" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='text'>
          <p>В майстерні BeeService здатні повернути <b>принтерам та картриджам </b>
            їх початкову функціональніть, при чому досвід роботи наших майстрів 
            дозволить їм впоратись з будь-якою несправністю!</p>
          <p>Наші фахівці можуть відремонтувати такі бренди - <b>Brother, Canon, Epson, 
            HP, Kyocera, Samsung, Xerox</b> та інші.</p>
          <p>Наші фахівці проведуть <b>якісний ремонт</b>, заміну всіх несправних
            комплектуючих та, при потребі, <b>інформуватимуть вас</b> на всіх етапах ремонту.</p>
          <p><b>Все, що вам необхідно зробити</b> - зв'язатись з нами будь-яким зручним
            для вас способом, озвучити проблему та привезти несправне обладнання 
            до нас в майстерню, або довірити забір нам.</p>
          <p>Будь-яку більш детальну інформацію ви завжди можете отримати <b>зателефонувавши </b>
            до нас або <b>замовивши дзвінок</b> у нас на сайті!</p>
        </div>
      </div>

      <div className='prodList'>
        <div className='nameTable'>
          <p className='name_p'>Послуга</p>
          <p className='problem_p'>Несправність</p>
          <p className='guarantee_p'>Гарантія</p>
          <p className='price_p'>Ціна</p>
        </div>
        <div className='nameTitle'>
          <p className='topicName'>Принтери</p>
        </div>
        {printer.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `printer`}>
            <p className='name_p'>{item.name_printer}</p>
            <p className='problem_p'>{item.problem_printer}</p>
            <p className='guarantee_p'>{item.guarantee_printer}</p>
            <p className='price_p'>{item.price_printer}</p>
          </div>
        })}
        <div className='nameTitle'>
          <p className='topicName'>Катриджі</p>
        </div>
        {cartridge.map((item) => {
          return <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `cartridge`}>
            <p className='name'>{item.name_cartridge}</p>
            <p className='price'>{item.price_cartridge}</p>
          </div>
        })}
      </div>
    </div>
  )
}