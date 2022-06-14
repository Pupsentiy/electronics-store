import { Box } from '@mui/system'
import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'react-router-dom'
import SwiperIphone from '../../assets/img/Swiper/Swiper-iPhone.jpg'
import SwiperWatch from '../../assets/img/Swiper/Swiper-Podcast.jpg'
import SwiperPodcast from '../../assets/img/Swiper/Swiper-Watch.jpg'
import '../Swiper/Swiper.scss'

const link = [
  {
    url: '/apple-iphone',
    img: SwiperIphone,

  },
  {
    url: '/apple-watch',
    img: SwiperWatch,

  },
  {
    url: '/apple-iphone',
    img: SwiperPodcast,

  }
]

const Swiper = () => {
  const [index, setIndex] = useState(0)
  const handleChange = (cur, prev) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  return (

    <Carousel className='Carousel'
      // {...props }
      index={index}
      handleChange={handleChange}
      animation={"slide"}
      indicators={true}
      swipe={true}
    >
      <Box className='box__item'>

        {link.map((slide, index) =>
          <NavLink key={index} className='item' to={slide.url}>
            <img className='item__img' src={slide.img} alt="swiperimg" />
          </NavLink>
        )}
        {/* <NavLink className='item' to='/apple-watch'>
           <img className='item__img' src={SwiperWatch} alt="swiperimg" />
         </NavLink>
         <NavLink className='item' to='/apple-watch'>
           <img className='item__img' src={SwiperPodcast} alt="swiperimg" />
         </NavLink> */}
      </Box>
    </Carousel>




  )
}

export default Swiper