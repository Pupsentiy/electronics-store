import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'react-router-dom'
import SwiperIphone from '../../assets/img/swiper/Swiper-iPhone.jpg'
import SwiperWatch from '../../assets/img/swiper/Swiper-Podcast.jpg'
import SwiperPodcast from '../../assets/img/swiper/Swiper-Watch.jpg'
import '../swiper/Swiper.scss'

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
  return (
    <Carousel
      className='Carousel'
      animation={"slide"}
      indicators={true}
      duration={800}
      autoPlay={false}
      navButtonsAlwaysVisible
    >
      {link.map((slide, i) => (
        <NavLink key={i} index={i} className='item' to={slide.url} >
          <img className='item__img' src={slide.img} alt="swiperimg" />
        </NavLink>
      ))}
    </Carousel>
  )
}

export default Swiper