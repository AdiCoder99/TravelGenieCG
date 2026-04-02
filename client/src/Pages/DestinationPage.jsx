import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import assets from '../assets/assets';
const DestinationPage = () => {
    const { id } = useParams(); //Remove Scroll down on click and add scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
    <div >
        <div className='relative flex justify-center items-center h-screen group w-screen'>
            <img src={assets.dest.find(item => item.id === id).heroimg} alt="" className='w-screen h-screen'/>
            <div className='absolute '>
                <h1 className='font-bold text-4xl text-white'>{assets.dest.find(item => item.id === id).title}</h1>
            </div>
            <div className='absolute bottom-10 left-0 w-full text-white text-center py-2 animate-float'>
                <h1 className='font-bold text-lg'>Scroll Down</h1>
                <img src={assets.downarrow} alt="Down Arrow" className='mx-auto mt-2' />
            </div>
        </div>

        <div className='mx-auto w-screen my-10 flex md:flex-row flex-col gap-10 justify-center items-start'>
            <div className='flex flex-col justify-start items-center text-lg text-gray-700 w-3/5 pl-6'> 
            <p className='font-bold text-4xl pb-6'>{assets.dest.find(item => item.id === id).title}</p>
            <p className='p-6 whitespace-pre-line'>{assets.dest.find(item => item.id === id).description}</p>
            </div>
            <div className="w-[4px] bg-linear-to-r from-transparent via-gray-400 to-transparent my-12 h-140"></div>
              <div className='w-2/5 bg-gray-300 h-full'>{assets.dest.find(item => item.id === id).id}</div>

        </div>
    </div>
  )
}
export default DestinationPage
