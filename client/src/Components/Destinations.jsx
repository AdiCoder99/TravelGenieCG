import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
const Destinations = () => {
    
  return (
    <div className='font-serif flex flex-col mt-10 '>
      <div className='w-full text-4xl font-bold text-center mt-12 mb-12'>
        <h1>Popular Destinations</h1>
      </div>
      <div className='flex md:mx-10 gap-10 flex-col md:flex-row flex-wrap justify-center '>
        {assets.dest.map((item, index) => {
            return (
                <Link to={`/destination/${item.id}`} key={index} className='relative w-90 h-110 mx-5 rounded-2xl group  cursor-pointer overflow-hidden'>
                    <img src={item.img} alt="" className='w-full h-full object-fill rounded-2xl group-hover:scale-110 duration-500'/>
                    <div className='absolute bottom-6 left-0 w-full text-white text-center py-2  group-hover:-translate-y-4 duration-1000 ease-in-out'>
                        <h2 className='text-lg font-bold'>{item.title}</h2>
                    </div>
                </Link>  
            
            )
        })}
      </div>
    </div>
  )
}

export default Destinations
