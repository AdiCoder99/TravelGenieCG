import React from 'react'
import assets from '../assets/assets'
const Navbar = () => {
  return (
    <div className='fixed top-0 z-5 w-full text-white flex justify-between items-center p-4 bg-transparent  h-24 hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out font-serif'>
      <div>
        <img src= {assets.cg_logo} alt="" className='h-20'/>
      </div>
      <div>
      <ul className='flex gap-4 text-lg '>
        <li>Where to Go?</li>
        <li>Plan Your Trip</li>
        <li>Experiences</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
