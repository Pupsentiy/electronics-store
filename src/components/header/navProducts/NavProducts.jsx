import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import React from 'react'
import './NavProducts.scss'
import { NavLink } from 'react-router-dom';

const NavProducts = () => {
    return (
        <Box className='header__bottom'>
            <Box className='container'>
                <Box className="header__content">
                    <SearchIcon className='header__search__btn' />
                    <Box className='header__menu'>
                        <Box className='manu__list__left'>
                            <NavLink to='#'>Mac</NavLink>
                            <NavLink to='#'>iPhone</NavLink>
                            <NavLink to='#'>Watch</NavLink>
                            <NavLink to='#'>iPad</NavLink>
                            <NavLink to='#'>Аксессуары</NavLink>
                            <NavLink to='#'>Гаджеты</NavLink>
                        </Box>
                        <Box className='manu__list__right'>
                            <NavLink to='#'>Sale</NavLink>
                            <NavLink to='#'>Акции</NavLink>
                            <NavLink to='#'>Услуги</NavLink>
                            <NavLink to='#'>Академия</NavLink>
                        </Box>
                    </Box>
                    <Box className='header__menu__right'>
                        <NavLink to='#' ><FavoriteBorderIcon /></NavLink>
                        <NavLink to='#'><BalanceOutlinedIcon /></NavLink>
                        <NavLink to='#' className='menu__right__link'>
                            <ShoppingCartOutlinedIcon />
                            <span>Корзина</span>
                        </NavLink>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NavProducts