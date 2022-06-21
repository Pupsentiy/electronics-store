import { Box, Button, Menu, MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react'
import Logo from '../../../assets/img/headerNavBar/logo.svg'
import './HeaderNavBar.scss'
import { Link, NavLink } from 'react-router-dom';

const HeaderNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box  className='header__top'>
      <Box className='container'>
        <Box className='header__content'>
          <Link to='/' className='header__logo'>
            <h4><span>re:</span>Store</h4>
            <Box className='logo__box'>
              <img className='logo' src={Logo} alt="logo" />
              <span className='text__logo'>Premium <br /> Reseller</span>
            </Box>
          </Link>
       
        <Box className='hedaer__nav__menu'>
          <Button className='choose__city__btn'>Санкт-Петербург и ЛО<KeyboardArrowDownIcon /></Button>
          <NavLink to='#'>Магазины</NavLink>
          <NavLink to='#'>Сервисные центры</NavLink>
          <NavLink to='#'>Для бизнеса</NavLink>
          <NavLink to='#'>Оплата и доставка</NavLink>
          <NavLink to='#'>Блог</NavLink>
        </Box>
        <Box className='header__account'>
          <Button
            id="demo-positioned-button"
            // aria-controls={open ? 'demo-positioned-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <AccountCircleIcon></AccountCircleIcon>
            <span className='account__text'>Личный кабинет</span>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderNavBar