import React from 'react'
import ServiceNav from '../serviceNav/ServiceNav'
import Recommend from '../recommend/Recommend'
import CarouselNews from '../carouselNews/CarouselNews'
import BuyersСhoice from '../buyersСhoice/BuyersСhoice'
import CarouselAcademy from '../carouselAcademy/CarouselAcademy'
import GadjetBlock from '../gadjetBlock/GadjetBlock'

const Container = () => {
  return (
    <>
    <ServiceNav/>
    <Recommend/>
    <CarouselNews/>
    <BuyersСhoice/>
    <CarouselAcademy/>
    <GadjetBlock/>
    </>
  )
}

export default Container