import React from 'react'
import Model from './Model'
import NavBar from './NavBar'
import model3 from '../assets/model3.jpg'
import modelY from '../assets/modelY.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Homepage = () => {
  return (
    <div className=''>
        <div className='relative'>
              <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
              <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
            {/* <SwiperSlide> <Model img={model3} model="Model 3" text="Leasing starting at $349/mo" /></SwiperSlide>
            <SwiperSlide>  <Model img={modelY} model="Model Y" text="Schedule a Demo Drive" className="relative" /></SwiperSlide>
            <SwiperSlide> <Model img={model3} model="Model 3" text="Leasing starting at $349/mo" /></SwiperSlide>
            <SwiperSlide>  <Model img={modelY} model="Model Y" text="Schedule a Demo Drive" className="relative" /></SwiperSlide> */}
          </Swiper>
         
        
        </div>
       <div className='fixed top-0 left-0 w-full'>
            <NavBar />
       </div>
    </div>
  )
}

export default Homepage