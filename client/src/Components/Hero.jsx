import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import assets from '../assets/assets';

const slideCaptions = [
  {
    title: 'Forest Roads',
    place: 'Bastar, Chhattisgarh',
    note: 'Lush routes, quiet air, and a calm start to the journey.',
  },
  {
    title: 'Temple Trails',
    place: 'Ghatarani & Rajiv Lochan',
    note: 'Sacred spaces framed by greenery and soft morning light.',
  },
  {
    title: 'Waterfall Escapes',
    place: 'Tirathgarh & Chitrakote',
    note: 'Dramatic water views that feel alive during the monsoon.',
  },
  {
    title: 'Heritage Moments',
    place: 'Sirpur & Bhoramdeo',
    note: 'Ancient stonework and timeless cultural character.',
  },
  {
    title: 'Nature Views',
    place: 'Kanger Valley',
    note: 'Dense forest landscapes and wide open scenic pauses.',
  },
  {
    title: 'Pilgrim Paths',
    place: 'Danteshwari Temple',
    note: 'A spiritual stop wrapped in regional tradition and color.',
  },
]

const Hero = () => {
  const swiperRef = useRef(null)

  const handleReachEnd = () => {
    if (!swiperRef.current?.autoplay) {
      return
    }

    swiperRef.current.params.autoplay.reverseDirection = true
    swiperRef.current.autoplay.start()
  }

  const handleReachBeginning = () => {
    if (!swiperRef.current?.autoplay) {
      return
    }

    swiperRef.current.params.autoplay.reverseDirection = false
    swiperRef.current.autoplay.start()
  }

  return (
    <div className='h-screen top-0 left-0 w-full'>
        
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onReachEnd={handleReachEnd}
        onReachBeginning={handleReachBeginning}
        className="mySwiper"
      >

        {[
          assets.Slide1,
          assets.Slide2,
          assets.Slide3,
          assets.Slide4,
          assets.Slide5,
          assets.Slide6,
        ].map((slide, index) => {
          const caption = slideCaptions[index]

          return (
            <SwiperSlide key={caption.title}>
              <div className='relative h-screen w-full'>
                <img src={slide} alt={caption.title} className='h-full w-full object-cover' />
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/15 to-transparent' />
                <div className='absolute bottom-8 right-8 max-w-sm  px-5 py-4 text-right text-white shadow-lg'>
                  <p className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200'>
                    {caption.place}
                  </p>
                  <h2 className='mt-2 text-2xl font-bold'>{caption.title}</h2>
                  <p className='mt-2 text-sm leading-6 text-white/85'>
                    {caption.note}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Hero
