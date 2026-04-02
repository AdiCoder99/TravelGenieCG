import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='min-h-[80vh] w-full flex items-center justify-center px-6 py-16'>
      <div className='relative w-full max-w-4xl overflow-hidden rounded-4xl bg-linear-to-br from-emerald-950 via-green-900 to-lime-800 px-8 py-16 text-center text-white shadow-2xl md:px-16'>
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute -left-24 top-0 h-72 w-72 rounded-full bg-lime-400 blur-3xl' />
          <div className='absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-300 blur-3xl' />
          <div className='absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-400 blur-3xl' />
        </div>

        <div className='relative mx-auto max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-lime-200'>Page not found</p>
          <h1 className='mt-6 text-6xl font-bold tracking-tight md:text-8xl'>404</h1>
          <p className='mt-6 text-base leading-8 text-slate-200 md:text-lg'>
            The page you are looking for does not exist or has been moved. Use the button below to return to the home page and continue exploring destinations.
          </p>

          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              to='/'
              className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-emerald-950 transition duration-300 hover:bg-lime-100'
            >
              Back to Home
            </Link>
            <Link
              to='/planner'
              className='inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white/10'
            >
              Plan a Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage