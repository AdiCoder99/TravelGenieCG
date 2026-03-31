import React from 'react'
import assets from '../assets/assets'

const ItineraryPlanner = () => {
  return (
    <div className='flex flex-col mt-12' >
      <div className='text-center text-4xl font-bold font-serif mb-8'>
        <h1>AI Itinerary Planner</h1>
      </div>
      <div className='flex justify-center items-center  border-2 border-gray-300 rounded-lg mx-10 h-60 w-350'>
        {/* <img src= {assets.itinerarybg} className='object-scale-down' alt="" /> */}
      </div>
    </div>
  )
}

export default ItineraryPlanner
