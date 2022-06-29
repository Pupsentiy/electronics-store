import React from 'react'
import ServiceNav from '../serviceNav/ServiceNav'
import Recommend from '../recommend/Recommend'
import CarouselNews from '../carouselNews/CarouselNews'
import BuyersСhoice from '../buyersСhoice/BuyersСhoice'
import CarouselAcademy from '../carouselAcademy/CarouselAcademy'
import GadjetBlock from '../gadjetBlock/GadjetBlock'
import Blog from '../blog/Blog'
import IdeaAndCompilation from '../ideaAndCompilation/IdeaAndCompilation'
import ServicesSection from '../servicesSection/ServicesSection'
import CarouselDiscounts from '../carouselDiscounts/CarouselDiscounts'
import Brands from '../brands/Brands'

const Container = () => {
  return (
    <>
    <ServiceNav/>
    <Recommend/>
    <CarouselNews/>
    <BuyersСhoice/>
    <CarouselAcademy/>
    <GadjetBlock/>
    <Blog/>
    <IdeaAndCompilation/>
    <ServicesSection/>
    <CarouselDiscounts/>
    <Brands/>
    </>
  )
}

export default Container