import React from 'react'
import assets from '../assets/assets'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // trigger after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 z-5 w-full flex justify-between items-center p-4 bg-transparent  h-24 hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out font-serif
  ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-md text-black" : "bg-transparent  text-white"}`}> 
      <Link to="/"><div>
        <img src= {assets.cg_logo} alt="" className='h-20'/>
      </div></Link>
      <div>
      <ul className='flex gap-8 text-lg '>
        <li>Where to Go?</li>
        <Link to="/planner"><li>Plan Your Trip</li></Link>
        <Link to="/experiences"><li>Experiences</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
