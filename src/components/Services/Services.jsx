import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Services({children, ...props}) {
  
  return (
    <div className='servBox' id='services'>
      <div className='main'>
        <div className='nameText'>
          <h2>{children}</h2>
        </div>
        <div className='main__block'>
            <div className='block__box'>

                <div className='box_serv'>
                  <div className='btn'>
                    <h3>1</h3>
                    <p>Ремонт комп'ютерів та ноутбуків</p>
                  </div>
                  <div className='details'>
                    <p>Надаємо весь спектр послуг з ремонту, модернізації 
                      комп'ютерів та ноутбуків різних марок,
                      встановлюємо ліцензійні операційні системи
                      і програмне забезпечення.</p>                  
                    </div>
                  <div className='link'>
                    <Link to="/computer-laptop">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>

                <div className='box_serv'>
                  <div className='btn'>
                    <h3>2</h3>
                    <p>Ремонт телевізорів та моніторів</p>
                  </div>
                  <div className='details'>
                    <p>Виконуємо повний спект послуг з ремонту, технічного 
                      обслуговування, налаштування та заміни несправних 
                      комплектуючих телефізорів і моніторів різних марок.</p>
                  </div>
                  <div className='link'>
                    <Link to="/tv-screen">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>
            </div>

            <div className='block__box'>

                <div className='box_serv'>
                  <div className='btn'>
                    <h3>3</h3>
                    <p>Ремонт телефонів, планшетів, навігаторів</p>
                  </div>
                  <div className='details'>
                    <p>Надаємо необхідний спектр ремонтрних послуг з усіма марками, 
                      встановлюємо необхідні програми і прошивки для мобільних 
                      телефонів, планшетів, електронних книг та навігаторів.</p>
                  </div>
                  <div className='link'>
                    <Link to="/phone-tablet">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>

                <div className='box_serv'>
                  <div className='btn'>
                    <h3>4</h3>
                    <p>Ремонт принтерів та офісної техніки</p>
                  </div>
                  <div className='details'>
                    <p>Здійснюємо весь спектр послуг з ремонту принтерів, 
                      БФП, копірів та іншої офісної техніки різних марок: 
                      усунення системних несправностей апаратів, проведення 
                      планового сервісного обслуговування офісної техніки клієнта.</p>
                  </div>
                  <div className='link'>
                    <Link to="/office-equipment">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>
              </div>

              <div className='block__box'>
                <div className='box_serv'>
                  <div className='btn'>
                    <h3>5</h3>
                    <p>Ремонт аудіосистем</p>
                  </div>
                  <div className='details'>
                    <p>Ремонтуємо, налаштовуємо проводні навушники, портативні 
                      колонки, аудіосистеми, музичні центри, тощо.</p>
                  </div>
                  <div className='link'>
                    <Link to="/audio-system">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>
                <div className='box_serv'>
                  <div className='btn'>
                    <h3>6</h3>
                    <p>Ремонт малої побутової техніки</p>
                  </div>
                  <div className='details'>
                    <p>Ремонтуємо електрочайники, мікрохвильовки, 
                      кавоварки, тостери, праски, тримери, епілятори, плойки, фени, тощо.</p>
                  </div>
                  <div className='link'>
                    <Link to="/home-equipment">Перелік послуг та ціни</Link>
                    <FontAwesomeIcon icon={faPlay} className='arrow' />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}