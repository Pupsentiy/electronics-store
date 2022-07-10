import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/icons/footer/logofooter.svg'
import './FooterTop.scss'

const FooterTop = () => {
  return (
    <div className='footer__top'>
      <div className="container footer__top__inner">
      <NavLink to='/' className='footer__logo'>
            <h4><span>re:</span>Store</h4>
            <div className='logo__box'>
              <img className='logo' src={Logo} alt="logo" />
              <span className='text__logo'>Premium <br /> Reseller</span>
            </div>
          </NavLink>
      </div>
    </div>
  )
}

export default FooterTop