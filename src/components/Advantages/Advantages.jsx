import React from 'react';
import './Advantages.css';

export default function Advantages({children}) {
  
  return (
    <div className='containerBox'>
      <div className='main'>
        <div className='nameText'>
          <h2>{children}</h2>
        </div>
        <div className='main__block'>
            <div className='block__one'>
                <div className='firstAdvant'>
                  <img src="/img/advantages/guarantee.webp" alt="guarantee" />
                  <p><b>Гарантія</b> на виконані роботи</p>
                </div>
                <div className='secondAdvant'>
                  <img src="/img/advantages/key.webp" alt="key" />
                  <p>Ремонт техніки <b>"під ключ"</b></p>
                </div>
            </div>
            <div className='block__two'>
                <div className='thirdAdvant'>
                  <img src="/img/advantages/delivery.webp" alt="delivery" />
                  <p><b>Забір та доставка</b> обладнання</p>
                </div>
                <div className='fourthAdvant'>
                  <img src="/img/advantages/diagnostics.webp" alt="diagnostics" />
                  <p><b>Безкоштовна</b> діагностика</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}