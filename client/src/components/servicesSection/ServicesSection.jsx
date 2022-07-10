import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import {popServices} from '../../mockData/popularServices.js'
import './ServicesSection.scss'

const ServicesSection = () => {
  return (
    <div className='services__section'>
        <div className="container">
            <div className="header__block">
                <h2 className="h2">Популярные услуги</h2>
                <NavLink to='#' className='header__block__link'><span className='header__block__point'></span> Все акции и новости</NavLink>
            </div>
            <Swiper
            slidesPerView={0}
            resistanceRatio={0.7}
            spaceBetween={30}

          >
            {popServices.map((slide, i) => (
              <SwiperSlide key={i}  >
                <NavLink index={i} className='swiper__item' to='#' >
                  <img className='item__img' src={slide.img} alt="swiperimg" />
                    <span className='carousel__services__name'>{slide.name}</span>
                    <span className='carousel__descr'>{slide.text}</span>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default ServicesSection