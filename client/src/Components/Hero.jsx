import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Pagination, Navigation } from "swiper/modules";
import assets from '../assets/assets';
const Hero = () => {
  return (
    <div className='h-screen top-0 left-0 w-full'>
        
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><img src={assets.Slide1} alt="" className='w-full h-screen object-cover'/></SwiperSlide>  
        <SwiperSlide><img src={assets.Slide2} alt="" className='w-full h-screen object-cover'/></SwiperSlide>
        <SwiperSlide><img src={assets.Slide3} alt="" className='w-full h-screen object-cover'/></SwiperSlide>
        <SwiperSlide><img src={assets.Slide4} alt="" className='w-full h-screen object-cover'/></SwiperSlide>
        <SwiperSlide><img src={assets.Slide5} alt="" className='w-full h-screen object-cover'/></SwiperSlide>
        <SwiperSlide><img src={assets.Slide6} alt="" className='w-full h-screen object-cover'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
