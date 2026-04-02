import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ItineraryPlanner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col mt-20 justify-center items-center' >
      <div className='text-center text-4xl font-bold font-serif mb-8'>
        <h1>AI Itinerary Planner</h1>
      </div>
      <div className='flex justify-center items-center  border-2 border-gray-300 relative rounded-lg mx-10 h-120 w-[90%]'>
        <img src={assets.itinerarybg} alt="" className='w-full h-full object-cover rounded-lg'/>
        <div className='absolute inset-0 flex items-center justify-center p-4 flex-col gap-10'>
          <p className='text-white text-2xl font-serif text-center'>
            Plan Your Trip with AI: Get Personalized Itineraries Tailored to Your Preferences and Interests.
          </p>
          <button onClick={() => navigate('/planner')} className='bg-blue-500 text-white px-6 py-2 rounded-2xl text-lg font-bold hover:bg-blue-600 transition duration-300 cursor-pointer'>
            Checkout Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItineraryPlanner
