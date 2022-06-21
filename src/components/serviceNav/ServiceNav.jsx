import React from 'react'
import { NavLink } from 'react-router-dom'
import HandymanIcon from '@mui/icons-material/Handyman';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import './ServiceNav.scss'
import { Box } from '@mui/system';
const ServiceNav = () => {
  return (
    <Box className='container__service'>
        <NavLink to="#" className='service__link'><HandymanIcon className='service__icons'/>Сервисные центры</NavLink>
        <NavLink to="#" className='service__link'><CreditCardIcon className='service__icons'/>Рассрочка</NavLink>
        <NavLink to="#" className='service__link'><PublishedWithChangesIcon className='service__icons'/>Trade-in</NavLink>
        <NavLink to="#" className='service__link'><AllInclusiveIcon className='service__icons'/> re:Store | premier</NavLink>
        <NavLink to="#" className='service__link'>Все услуги</NavLink>
    </Box>
  )
}

export default ServiceNav