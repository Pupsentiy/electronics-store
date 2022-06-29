import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Brands.scss'
import { brands } from '../../mockData/brands__logo.js'
import { NavLink } from 'react-router-dom'
const Brands = () => {
    return (
        <div className='brands'>
            <div className="container">
                <div className="brands__inner">
                    <div className="header__block">
                        <h2 className="h2">Бренды</h2>
                    </div>
                    <div className="brands__box">
                        <Swiper
                            className='srvices__swiper swiper-container'
                            slidesPerView={1}
                            spaceBetween={30}
                            // slidesPerGroup={1}
                            initialSlide={0}
                            width={148}
                        >
                            {brands.map((brand, i) => (
                                <SwiperSlide key={i}  >
                                    <NavLink index={i} className='brands__item' to='#' >
                                        <div className='item__img__wrapper'>
                                            <img className='item__img' src={brand.img} alt="swiperimg" />
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands