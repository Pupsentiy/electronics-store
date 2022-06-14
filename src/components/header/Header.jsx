import { Avatar, Box, Button, Menu, MenuItem, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useState } from 'react'
import Logo from '../../assets/img/Header/logo.svg'
import '../header/Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className='container'>
      <Link to='/' className='box__logo'>
        <img className='logo' src={Logo} alt="logo" />
        <span><h4>E:Store</h4></span>
      </Link>
      <Box className='box__search'>
        <TextField
          className='search'
          placeholder='Search...'
        />
        <SearchIcon className='button__search' />
      </Box>
      <Box className='box__account'>
        <FavoriteBorderIcon className='shop__icons' />
        <ShoppingCartOutlinedIcon className='shop__icons' />
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Stack direction="row" spacing={2}>
            <Avatar>K</Avatar>
          </Stack>
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
  )
}

export default Header