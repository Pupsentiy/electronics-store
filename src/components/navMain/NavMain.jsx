import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import iPhone from '../../assets/img/nav-Iphone.jpg'
import iPad from '../../assets/img/nav-ipad.jpg'
import mac from '../../assets/img/nav-mac.jpg'
import watch from '../../assets/img/nav-watch.jpg'
import '../navMain/NavMain.scss'

const NavMain = () => {
  return (
    <Box className='wrapper'>
      <NavLink to='/apple-iphone'>
        <img className='nav__img' src={iPhone} alt="iPhone" />
      </NavLink>
      <NavLink to='/apple-ipad'>
        <img className='nav__img' src={iPad} alt="iPad" />
      </NavLink>
      <NavLink to='/apple-watch'>
        <img className='nav__img' src={watch} alt="watch" />
      </NavLink>
      <NavLink to='/apple-mac'>
        <img className='nav__img' src={mac} alt="mac" />
      </NavLink>
    </Box>
  )
}

export default NavMain