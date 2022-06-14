import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import iPhone from '../../assets/img/NavMain/nav-Iphone.jpg'
import iPad from '../../assets/img/NavMain/nav-ipad.jpg'
import mac from '../../assets/img/NavMain/nav-mac.jpg'
import watch from '../../assets/img/NavMain/nav-watch.jpg'
import '../navMain/NavMain.scss'
import Swiper from '../Swiper/Swiper'

const NavMain = () => {
  return (
    <>
    <Swiper/>
    
    <Box className='wrapper'>
      <Box className='wrapper__box'>
        <NavLink to='/apple-iphone'  >
          <Box className='box__item'>
            <img className='nav__img' src={iPhone} alt="iPhone" />
            <span className='wrapper__title'><h3>iPhone</h3></span>
          </Box>
        </NavLink>
      </Box>
      <Box className='wrapper__box'>
        <NavLink to='/apple-ipad'>
          <Box className='box__item'>
            <img className='nav__img' src={iPad} alt="iPad" />
            <span className='wrapper__title'><h3>iPad</h3></span>        </Box>
        </NavLink></Box>
      <Box className='wrapper__box'>
        <NavLink to='/apple-watch'>
          <Box className='box__item'>
            <img className='nav__img' src={watch} alt="watch" />
            <span className='wrapper__title'><h3>Watch</h3></span>
          </Box>
        </NavLink>
      </Box>
      <Box className='wrapper__box'>
        <NavLink to='/apple-mac'>
          <Box className='box__item'>
            <img className='nav__img' src={mac} alt="mac" />
            <span className='wrapper__title'><h3>Mac</h3></span>
          </Box>
        </NavLink>
      </Box>

    </Box>
    </>
    
  )
}

export default NavMain