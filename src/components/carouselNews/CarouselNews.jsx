import { Box } from '@mui/system'
import './CarouselNews.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import news1 from '../../assets/img/carousel__News/news1.jpg'
import news2 from '../../assets/img/carousel__News/news2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'


const news = [
  {
    id: 1,
    img: news2,
    title: 'Оплачивайте покупки с помощью Системы быстрых платежей',
    text: 'Учувствуйте в розыгрыше призов',
    day: 'Акция до 14 августа',
  },
  {
    id: 2,
    img: news1,
    title: 'Самый выгодный трейд-ин',
    text: 'Обновите свои устройства на выгодных условиях.',
  }
]

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
            
             slidesPerView={'auto'}
            // spaceBetween={30}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            // allowSlidePrev={true}
            // allowSlideNext={true}
            // allowTouchMove={true}
            // autoHeight={true}
            // slidesPerGroup={4}
            // grabCursor={true}
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            // slidesPerView={'auto'}
            // initialSlide={0}
            // followFinger={true}
            // direction='horizontal'
          // noSwiping={true}
          // loop={true} 
          // loopFillGroupWithBlank={false}
          // centeredSlides={true}  
          // pagination={{
          //       //   "clickable": true}}
          // navigation
                // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          
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