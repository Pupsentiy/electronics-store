import React from 'react'
import './GadjetBlock.scss'
import {gadjet} from '../../mockData/gadjet&gifts'
import { NavLink } from 'react-router-dom'

const GadjetBlock = () => {

    return (
        <div className='gadjet__block'>
            <div className="container">
                <div className="header__block">
                    <h2 className="h2">Гаджеты и подарки</h2>
                    <NavLink to='#' className="header__block__link"><span className='header__block__point'></span>Все гаджеты и подарки</NavLink>
                </div>
                <div className="gadjet__wrapper">
                    {gadjet.map((item, i) => (
                        <NavLink to='#' className='gadjet__item' key={i}>
                            <span className="gadjet__img__wrapper"><img className='gadjet__img' src={item.img} alt="img" /></span>
                            <span className="gadjet__name">{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GadjetBlock