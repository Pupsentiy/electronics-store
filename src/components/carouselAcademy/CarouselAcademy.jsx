import React from 'react'
import { NavLink } from 'react-router-dom'
import './CarouselAcademy.scss'
import { seminars } from '../../mockData/seminar'


const CarouselAcademy = () => {
  return (
    <div className='carousel__academy'>
      <div className="container">
        <div className="header__block">
          <h2 className='h2'>Лекции и семинары в <NavLink to="#" className='h2__link'>Академии re:Store</NavLink></h2>
          <NavLink to='#' className='header__block__link'><span className='header__block__point'></span>Полное расписание</NavLink>
        </div>
        <div className="carousel__academy__slogan">
          Бесплатно учим желающих творить вместе с Apple
        </div>
        <div className="carousel__academy__gallery">
        {seminars.map((item, i) => (
                  <NavLink to="#" className='seminar__link' key={i}>
                  <img src={item.img} className='seminar__img' alt='img'/>
                  <span className="seminar__info">
                    <span className="seminar__name">{item.name}</span>
                    <span className="seminar__descr">{item.text}</span>
                    <span className="seminar__date">{item.date}</span>
                  </span>
                </NavLink>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselAcademy