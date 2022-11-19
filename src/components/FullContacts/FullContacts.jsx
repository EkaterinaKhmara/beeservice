import React from 'react';
import Contacts from '../Contacts/Contacts';
import Address from '../Address/Address';
import Schedule from '../Schedule/Schedule';
import './FullContacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export default function FullContacts({ children, ...props }) {

  return (
    <div className='box' id='contacts'>
      <div className='box__main'>
        <div className='nameText'>
          <h2>{children}</h2>
        </div>
        <div className='main__block'>
          <div className='block__cont'>
            <div className='addressCont'>
              <p className='pText'>Нас можна знайти за адресою:</p>
              <Address className='cont__address' />
              <p>(Солом'янський район)</p>
              <div className='email'>
                <FontAwesomeIcon icon={faEnvelope} className='mail' />
                <a href="support@beeservice.com">bee@service.com</a>
                {/* <p>support@beeservice.com</p> */}
              </div>
            </div>
            <div className='contactsCont'>
              <p className='pText'>Зателефонуйте нам: </p>
              <Contacts className='cont__cont' />
            </div>
            <div className='scheduleCont'>
              <p className='pText'>Ми працюємо кожен день: </p>
              <Schedule className='cont__sched' />
              <div className='socialMedia'>
                <p>Cоціальні мережі: </p>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} className='media insta' />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faSquareFacebook} className='media fb' />
                </a>
              </div>
            </div>
          </div>
          <div className='block__map'>
            <iframe className="myIframe" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d898.4839334420334!2d30.450002203704823!3d50.43558087083027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cebd7254f14f%3A0xa07618d172368439!2z0JjQvdGC0LXRgNC90LXRgiDQvNCw0LPQsNC30LjQvSBOZXdDYXNlIC0g0LzQsNCz0LDQt9C40L0g0LDQutGB0LXRgdGB0YPQsNGA0L7Qsg!5e0!3m2!1sru!2sua!4v1664394513490!5m2!1sru!2sua" style={{ width: "100%", height: "450px", border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='textCont'>
          <p>Ми будемо раді допомогти вам у вирішенні будь-яких питань!</p>
        </div>
      </div>
    </div>
  )
}