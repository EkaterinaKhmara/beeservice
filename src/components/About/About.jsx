import React from 'react';
import './About.css';

export default function About({ children }) {

  return (
    <>
      <div className='discount'>
        <h3>Знижки -30% на будь-який ремонт на честь нашого відкриття!</h3>
      </div>
      <div className='block'>
        <div className='block__text'>
          <div className='nameText'>
            <h2>{children}</h2>
          </div>
          <span>В BeeService працюють <b>професіонали</b>, які можуть врятувати
            вашу техніку від будь-якої поломки та подовжать строк її експлуатації.
            <br /><br />В нашій майстерні можна отримати <b>якісні</b> послуги з <b>ремонту </b>
            різноманітної <b>електрононіки</b> та <b>дрібної побутової техніки</b>. <br /><br />Фахівці мають <b>величезний досвід</b> роботи в ремонті електроніки
            та техніки - <b>понад 10 років</b>! Також, вони безперервно удосконалюють  свої навички, підвищують
            кваліфікацію, опановують нові технології та з
            успіхом застосовують їх в роботі!</span>
          <span>Перед початком ремонту спеціалісти проведуть <b>безкоштовну </b>
            діагностику пристрою задля виявлення проблеми та несправності.<br /><br />
            Після діагностики, фахівці BeeService виконають <b>якісний ремонт</b>,
            необхідну заміну всіх комплектуючих та інформуватимуть вас на
            всіх етапах ремонту, якщо це буде необхідно.<br /><br />
            Також, у випадку виникнення проблеми з <b>транспортування </b>
            габаритного та важкого обладнання – наша команда прийде на допомогу!
            У телефонному режимі, ми обговоримо всі деталі, з'ясуємо адресу
            і в найзручніший для вас час <b>заберемо пристрій</b> до нас у майстерню.
            А після ремонту – <b>повернемо пристрій назад</b> до власника! </span>
          <span>Будь-яку більш детальну інформацію та відповіді на всі питання
            ви завжди можете отримати <b>зателефонувавши</b> до нас або <b>замовивши дзвінок </b>
            у нас на сайті!</span>
        </div>
      </div>
    </>
  )
}