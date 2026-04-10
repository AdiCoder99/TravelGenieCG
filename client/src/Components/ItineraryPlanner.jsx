import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ItineraryPlanner = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-col mt-20 justify-center items-center' >
      <div className='text-center text-4xl font-bold font-serif mb-8'>
        <h1>AI Itinerary Planner</h1>
      </div>
      <div className='relative mx-10 h-120 w-[90%] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.18)]'>
        <img src={assets.itinerarybg} alt="" className='w-full h-full object-cover'/>
        <div className='absolute inset-0 bg-linear-to-br from-slate-950/65 via-emerald-950/35 to-slate-900/70' />
        <div
          className='absolute inset-0 opacity-25'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className='absolute -left-20 top-10 h-60 w-60 rounded-full bg-emerald-300/20 blur-3xl' />
        <div className='absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl' />

        <div className='absolute inset-0 flex items-center justify-center p-4 flex-col gap-10'>
          <div className='max-w-3xl rounded-3xl border border-white/20 bg-white/10 px-6 py-8 text-center backdrop-blur-xs shadow-lg'>
            <p className='text-white md:text-3xl font-serif text-center'>
              Plan Your Trip with AI: Get Personalized Itineraries Tailored to Your Preferences and Interests.
            </p>
          </div>
          <button onClick={() => navigate('/planner')} className='bg-emerald-500 text-white px-6 py-2 rounded-2xl md:text-lg font-bold hover:bg-emerald-600 transition duration-300 cursor-pointer shadow-lg shadow-emerald-900/30'>
            Checkout Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItineraryPlanner
