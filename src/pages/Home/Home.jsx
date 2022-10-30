import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Home.css';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import Services from '../../components/Services/Services';
import FullContacts from '../../components/FullContacts/FullContacts';

export default function Home() {

  const btnUp = document.getElementById('btn_up');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.onscroll = function (e) {
      if (window.scrollY >= 1500) {
        btnUp.style.display = "block";
      } else if (window.scrollY < 1500) {
        btnUp.style.display = "none";
      }
    }
  })

  useEffect(() => {
    document.title = "BeeService. Ремонт електроніки та техніки. Гарантія. Київ";
  });

  return (
    <div className='pageHome'>
      <About children={'Про сервіс'} />
      <Advantages children={'Наші переваги'} />
      <Services children={'Послуги'} />
      <FullContacts children={'Контакти'} />
    </div>
  )
}