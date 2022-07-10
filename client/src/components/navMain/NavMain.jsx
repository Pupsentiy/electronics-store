import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import iPhone from '../../assets/img/navMain/nav-Iphone.jpg'
import iPad from '../../assets/img/navMain/nav-ipad.jpg'
import mac from '../../assets/img/navMain/nav-mac.jpg'
import watch from '../../assets/img/navMain/nav-watch.jpg'
import gadjets from '../../assets/img/navMain/Gadjets.jpg'
import giftCert from '../../assets/img/navMain/giftСertificate.jpg'
import accessorries from '../../assets/img/navMain/nav-Accessories.jpg'
import HeadphonesAndAcoustics from '../../assets/img/navMain/nav-HeadphonesAndAcoustics.png'
import './NavMain.scss'
import { Container } from '@mui/material'


const NavMain = () => {
  return (
    <>
      <Box className='wrapper'>
        <NavLink to='/apple-iphone' className='item__link' >
          <Box className='wrapper__box'>
            <Box className='box__item'>
              <img className='nav__img' src={iPhone} alt="iPhone" />
              <span className='wrapper__title'><h3>iPhone</h3> <span>от 52 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='/apple-ipad' className='item__link'>
          <Box className='wrapper__box'>
            <Box className='box__item'>
              <img className='nav__img' src={iPad} alt="iPad" />
              <span className='wrapper__title'><h3>iPad</h3>  <span>от 52 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='/apple-watch' className='item__link'>
          <Box className='wrapper__box'>
            <Box className='box__item'>
              <img className='nav__img' src={watch} alt="watch" />
              <span className='wrapper__title'><h3>Watch</h3> <span>от 18 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='/apple-mac' className='item__link'>
          <Box className='wrapper__box'>
            <Box className='box__item'>
              <img className='nav__img' src={mac} alt="mac" />
              <span className='wrapper__title'><h3>Mac</h3> <span>от 149 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='/apple-mac' className='item__link'>
          <Box className='wrapper__box'>
            <Box className='box__item'>
              <img className='nav__img' src={accessorries} alt="mac" />
              <span className='wrapper__title'><h3>Аксессуары</h3> <span>от 590₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='#' className='item__link'>
          <Box className='wrapper__box' >
            <Box className='box__item'>
              <img className='nav__img' src={HeadphonesAndAcoustics} alt="mac" />
              <span className='wrapper__title'><h3>Наушники и акустика</h3> <span>от 2 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='#' className='item__link'>
          <Box className='wrapper__box' >
            <Box className='box__item'>
              <img className='nav__img' src={gadjets} alt="mac" />
              <span className='wrapper__title'><h3>Гаджеты</h3> <span>от 990₽</span></span>
            </Box>
          </Box>
        </NavLink>
        <NavLink to='#' className='item__link'>
          <Box className='wrapper__gift'>
            <img className='nav__img' src={giftCert} alt="mac" />
          </Box>
        </NavLink>
      <Container/>

      </Box>
    </>
  )
}

export default NavMain