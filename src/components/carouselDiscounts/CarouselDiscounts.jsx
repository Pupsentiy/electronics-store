import React from 'react'
import './CarouselDiscounts.scss'
import { discountsProd } from '../../mockData/discountsProducts.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import like from '../../assets/icons/like.svg'

const CarouselDiscounts = () => {
    // const params = { 
    //     watchSlidesProgress:true,
    //     initialSlide:0,
    //     breakpoints:{
    //         992:{
    //             slidesPerView:1
    //         },
    //         1440:{
    //             slidesPerView:4
    //         }
    //     }

    // }

    return (
        <div className='carousel__discounts'>
            <div className="carousel__discounts__inner">
                <div className="container">
                    <div className="header__block">
                        <h2 className="h2">Скидки до 33%</h2>
                        <NavLink to='#' className='header__block__link'><span className='header__block__point'></span> Все скидки</NavLink>
                    </div>
                    <Swiper
                        // {...params}
                        className='srvices__swiper swiper-container'
                        slidesPerView={5}
                        spaceBetween={30}
                        slidesPerGroup={5}
                        initialSlide={0}
                    >
                        {discountsProd.map((slide, i) => (
                            <SwiperSlide key={i}  >
                                <div className="badge__wrapper">
                                    <div className="badge__title">{slide.discount}</div>
                                </div>
                                <div className="swiper__item__to-favorite"><img className='img__favorite' src={like} alt="img" /></div>

                                <NavLink index={i} className='swiper__item' to='#' >
                                    <div className='img__wrapper'>
                                        <img className='item__img' src={slide.img} alt="swiperimg" />
                                    </div>

                                    <span className='carousel__dicsount__name'>{slide.name}</span>
                                    <span className='item__price'> <span className='carousel__current'>{slide.current} <span className='carousel__old'>{slide.old}</span></span></span>


                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarouselDiscounts