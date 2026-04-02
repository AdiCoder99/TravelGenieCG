import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import assets from '../assets/assets';
const DestinationPage = () => {
    const { id } = useParams(); //Remove Scroll down on click and add scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const [contactVisible, setContactVisible] = useState(true);
    const destination = assets.dest.find((item) => item.id === id);

    if (!destination) {
        return (
            <div className='w-screen min-h-screen flex items-center justify-center text-xl text-gray-700'>
                Destination not found.
            </div>
        );
    }

    const mapUrl = `https://www.google.com/maps?q=${destination.coordinates.lat},${destination.coordinates.lng}`;


  return (
    <div >
        <div className='relative flex justify-center items-center h-screen group w-screen'>
            <img src={destination.heroimg} alt="" className='w-screen h-screen'/>
            <div className='absolute '>
                <h1 className='font-bold text-4xl text-white'>{destination.title}</h1>
            </div>
            <div className='absolute bottom-10 left-0 w-full text-white text-center py-2 animate-float'>
                <h1 className='font-bold text-lg'>Scroll Down</h1>
                <img src={assets.downarrow} alt="Down Arrow" className='mx-auto mt-2' />
            </div>
        </div>

        <div className='mx-auto w-screen my-10 flex md:flex-row flex-col gap-10 justify-center items-start'>
            <div className='flex flex-col justify-start items-center text-lg text-gray-700 w-3/5 pl-16'> 
                        <p className='font-bold text-4xl pb-6'>{destination.title}</p>
                        <p className='p-6 whitespace-pre-line'>{destination.description}</p>
            </div>
            <div className="w-[4px] bg-linear-to-r from-transparent via-gray-400 to-transparent my-12 h-200"></div>
              <div className='w-2/5 h-full flex flex-col justify-center items-center rounded-lg'>
              <div onClick={() =>setContactVisible(!contactVisible)} className='border border-gray-500 mt-10 px-4 bg-white h-14 w-80 flex justify-start items-center rounded-lg text-white font-bold text-lg cursor-pointer hover:bg-gray-200 transition duration-300 '>
                <img src= {assets.contact} className='h-7' alt="" />
                <p className='pl-2 text-black text-center'>Contact</p>
                <img src= {assets.downarrow} className='invert ml-40' alt="" />
              </div>
              <div>
                {contactVisible && (
                    <div className='flex flex-col justify-start items-start bg-blue-100 h-50 w-80  rounded-md px-4 translate-y-2 duration-1000 transition'> 
                        <div className='flex flex-col gap-5 text-black  text-md mt-10'>
                            <div className='flex justfy-start items-center gap-2'>
                                <img src={assets.address} className='h-6' alt="" />
                                <p>Address : this that this that</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <img src={assets.call} className='h-6' alt="" />
                                <p>Phone : 123-456-7890</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <img src={assets.email} className='h-6' alt="" />
                                <p>Email : example@example.com</p>
                            </div>
                        </div>
                    </div>
                )}
              </div>
                            <div className='mt-10 w-80 border border-gray-400 rounded-lg bg-white px-4 py-5 shadow-sm'>
                                <p className='text-black font-semibold text-lg'>View on Map</p>
                                <p className='text-sm text-gray-600 mt-1'>Open this destination in Google Maps.</p>
                                <a
                                    href={mapUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='mt-4 inline-flex w-full justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300'
                                >
                                    View on Map
                                </a>
                            </div>
              </div>

        </div>
    </div>
  )
}
export default DestinationPage
