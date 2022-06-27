import { Box } from '@mui/system'
import './CarouselNews.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { news } from '../../mockData/carousel--news'

const CarouselNews = () => {
  return (
    <Box className='carousel__news'>
      <Box className='container'>
        <Box className='header__block'>
          <h2 className='h2'>Акции и новости</h2>
          <NavLink to='#' className='header__block__link'><span className='header__block__point'></span> Все акции и новости</NavLink>
        </Box>
        <Box >
          <Swiper
            slidesPerView={0}
            resistanceRatio={0.7}
            spaceBetween={30}
          >
            {news.map((slide, i) => (
              <SwiperSlide key={i}  >
                <NavLink index={i} className='swiper__item' to='#' >
                  <img className='item__img' src={slide.img} alt="swiperimg" />
                  <span className='swipper__news__info'>
                    <span className='carousel__news__name'>{slide.title}</span>
                    <span className='carousel__descr'>{slide.text}</span>
                    <span className='carousel__news__date'>{slide.day}</span>
                  </span>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export default CarouselNews