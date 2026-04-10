import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
const Destinations = () => {
    
  return (
    <div className='relative mt-10 overflow-hidden font-serif'>
      <div className='absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-lime-50' />
      <div
        className='absolute inset-0 opacity-35'
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className='absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl' />
      <div className='absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl' />

      <div className='relative mx-auto max-w-8xl px-6 py-16 md:px-10 lg:px-12'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700'>Explore the region</p>
          <h2 className='mt-4 text-4xl font-bold text-slate-900 md:text-5xl'>Popular Destinations</h2>
          <p className='mt-4 text-base leading-8 text-slate-600'>
            Discover temples, waterfalls, forests, and heritage sites that define the feel of the journey before you plan the route.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full'>
          {assets.dest.slice(0, 6).map((item, index) => {
            return (
              <Link
                to={`/destination/${item.id}`}
                key={index}
                className='group relative h-90 w-50 md:h-110 md:w-90 cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm mx-auto'
              >
                <img src={item.img} alt="" className='h-full w-full object-cover transition duration-700 group-hover:scale-110'/>
                <div className='absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent' />
                <div className='absolute bottom-0 left-0 w-full px-5 pb-5 pt-10 text-white transition duration-500 group-hover:-translate-y-2'>
                  <p className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200'>Featured place</p>
                  <h2 className='mt-2 text-xl font-bold'>{item.title}</h2>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations
