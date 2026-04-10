import React from 'react'
import assets from '../assets/assets'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // trigger after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div
      className={`fixed top-0 z-50 flex h-24 w-full items-center justify-between bg-transparent px-4 font-serif transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 md:px-6 ${isScrolled ? 'bg-white/70 text-black shadow-md backdrop-blur-md' : 'bg-transparent text-white'}`}
    >
      <Link to="/">
        <img src={assets.cg_logo} alt="" className='h-20' />
      </Link>

      <div className='flex items-center gap-3'>
        <ul className='hidden items-center gap-8 md:flex md:text-lg'>
          <Link to="/where-to-go"><li className='cursor-pointer hover:text-emerald-600 transition'>Where to Go?</li></Link>
          <Link to="/planner"><li className='cursor-pointer hover:text-emerald-600 transition'>Plan Your Trip</li></Link>
          <Link to="/experiences"><li className='cursor-pointer hover:text-emerald-600 transition'>Experiences</li></Link>
        </ul>

        <button
          type='button'
          onClick={handleToggle}
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:hidden'
          aria-label='Open menu'
          aria-expanded={isMenuOpen}
        >
          <span className='flex flex-col gap-1.5'>
            <span className='h-0.5 w-5 rounded-full bg-current' />
            <span className='h-0.5 w-5 rounded-full bg-current' />
            <span className='h-0.5 w-5 rounded-full bg-current' />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeMenu}
        aria-hidden='true'
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[82vw] max-w-sm transform border-l border-white/20 bg-linear-to-b from-white via-emerald-50 to-lime-100 shadow-2xl transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex items-center justify-between border-b border-slate-200/70 px-5 py-4'>
          <div className='flex items-center gap-3'>
            <img src={assets.cg_logo} alt='' className='h-12 w-12 object-contain' />
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700'>Menu</p>
              <p className='text-sm font-medium text-slate-700'>Travel Planner</p>
            </div>
          </div>

          <button
            type='button'
            onClick={closeMenu}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-slate-100'
            aria-label='Close menu'
          >
            <span className='text-xl leading-none'>&times;</span>
          </button>
        </div>

        <div className='px-5 py-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700'>Navigate</p>
          <div className='mt-5 flex flex-col gap-3 text-slate-900'>
            <Link to="/where-to-go" onClick={closeMenu} className='rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50'>
              Where to Go?
            </Link>
            <Link to="/planner" onClick={closeMenu} className='rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50'>
              Plan Your Trip
            </Link>
            <Link to="/experiences" onClick={closeMenu} className='rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50'>
              Experiences
            </Link>
          </div>

          
        </div>
      </aside>
    </div>
  )
}

export default Navbar
