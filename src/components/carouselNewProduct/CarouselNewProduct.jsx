import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './CarouselNewProduct.scss'

const CarouselNewProduct = () => {
  return (
    <div className='carousel__new__product'>
      <div className='container'>
        <div className="header__block">
          <h2 className="h2">Новинки</h2>
        </div>
        <Swiper>
          <SwiperSlide>

          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CarouselNewProduct