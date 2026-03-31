import React from 'react'
import assets from '../assets/assets'
const Destinations = () => {
    const dest = [assets.dest1, assets.dest2, assets.dest3, assets.dest4]
  return (
    <div className='font-serif flex flex-col mt-10'>
      <div className='w-full text-4xl font-bold text-center mt-12 mb-12'>
        <h1>Popular Destinations</h1>
      </div>
      <div className='flex mx-10 gap-10'>
        {dest.map((item, index) => {
            return (
                <div key={index} className='w-90 h-90 mx-5 rounded-2xl'>
                    <img src={item} alt="" className='w-full h-full object-full rounded-2xl'/>
                </div>  
            )
        })}
      </div>
    </div>
  )
}

export default Destinations
