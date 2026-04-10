import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import assets from '../assets/assets';
import { Link } from 'react-router-dom';

const DestinationPage = () => {
    const { id } = useParams();
    const [activeSection, setActiveSection] = useState(null);
    
    // Create refs for each section
    const thingsToDoRef = useRef(null);
    const bestTimeRef = useRef(null);
    const travelTipsRef = useRef(null);
    const localCuisineRef = useRef(null);
    const accommodationRef = useRef(null);
    
    const destination = assets.dest.find((item) => item.id === id);

    if (!destination) {
        return (
            <div className='w-screen min-h-screen flex items-center justify-center text-xl text-gray-700'>
                Destination not found.
            </div>
        );
    }

    const handleScrollToSection = (sectionName, ref) => {
        setActiveSection(sectionName);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    return (
        <>
            {/* Background Section with Hero and Navigation */}
            <div className='relative w-screen bg-cover bg-center bg-fixed' style={{backgroundImage: `url(${destination.heroimg})`, backgroundColor: 'rgba(92, 64, 51, 0.6)'}}>
                <div className='absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-900 opacity-45'></div>
                
                <div className='relative flex flex-col justify-center items-center min-h-screen py-10'>
                    <div className='text-center mb-12'>
                        <h1 className='text-white text-3xl mb-2'>Welcome to</h1>
                        <h1 className='font-bold text-5xl text-white mb-4'>{destination.title}</h1>
                        <p className='text-white text-lg italic'>{destination.tagline}</p>
                    </div>

                    {/* Navigation Buttons Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-4'>
                        <Link to={`/destination/${id}/how-to-reach`}>
                            <button className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                                How To Reach
                            </button>
                        </Link>
                        <button onClick={() => handleScrollToSection('things-to-do', thingsToDoRef)} className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                            Things to Do
                        </button>
                        <button onClick={() => handleScrollToSection('best-time', bestTimeRef)} className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                            Best Time to Visit
                        </button>
                        <button onClick={() => handleScrollToSection('travel-tips', travelTipsRef)} className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                            Travel Tips
                        </button>
                        <button onClick={() => handleScrollToSection('local-cuisine', localCuisineRef)} className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                            Local Cuisine
                        </button>
                        <button onClick={() => handleScrollToSection('accommodation', accommodationRef)} className='w-full text-white h-16 bg-white/30 hover:bg-white/50 cursor-pointer rounded-lg transition-all font-semibold'>
                            Accommodation
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Sections Below Background */}
            <div className='w-full max-w-4xl mx-auto px-4 py-12 space-y-8'>
                {/* About Destination */}
                <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                    <h2 className='text-3xl font-bold text-amber-800 mb-4'>About</h2>
                    <p className='text-gray-700 leading-relaxed whitespace-pre-line'>{destination.description}</p>
                </div>

                {/* Things to Do */}
                {activeSection === 'things-to-do' && destination.things_to_do && (
                    <div ref={thingsToDoRef} className='animate-in fade-in duration-300'>
                        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                            <h2 className='text-3xl font-bold text-amber-800 mb-6'>Things to Do</h2>
                            <div className='space-y-3'>
                                {destination.things_to_do.map((activity, idx) => (
                                    <div key={idx} className='flex items-start bg-amber-50 p-4 rounded-md border-l-4 border-amber-600'>
                                        <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full font-semibold mr-4'>{idx + 1}</span>
                                        <p className='text-gray-800'>{activity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Best Time to Visit */}
                {activeSection === 'best-time' && destination.best_time_to_visit && (
                    <div ref={bestTimeRef} className='animate-in fade-in duration-300'>
                        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                            <h2 className='text-3xl font-bold text-amber-800 mb-6'>Best Time to Visit</h2>
                            <div className='bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-700 p-6 rounded-md'>
                                <p className='text-lg text-gray-800 leading-relaxed'>{destination.best_time_to_visit}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Travel Tips */}
                {activeSection === 'travel-tips' && destination.travel_tips && (
                    <div ref={travelTipsRef} className='animate-in fade-in duration-300'>
                        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                            <h2 className='text-3xl font-bold text-amber-800 mb-6'>🧳 Travel Tips</h2>
                            <div className='space-y-3'>
                                {destination.travel_tips.map((tip, idx) => (
                                    <div key={idx} className='flex items-start bg-orange-50 p-4 rounded-md border-l-4 border-orange-600'>
                                        <span className='text-2xl mr-4'>💡</span>
                                        <p className='text-gray-800'>{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Local Cuisine */}
                {activeSection === 'local-cuisine' && destination.local_cuisine && (
                    <div ref={localCuisineRef} className='animate-in fade-in duration-300'>
                        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                            <h2 className='text-3xl font-bold text-amber-800 mb-6'>🍲 Local Cuisine</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {destination.local_cuisine.map((dish, idx) => (
                                    <div key={idx} className='bg-orange-50 p-4 rounded-md border border-orange-200 hover:shadow-md transition-shadow'>
                                        <p className='text-gray-800 font-semibold'>{dish}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Accommodation */}
                {activeSection === 'accommodation' && destination.accommodation && (
                    <div ref={accommodationRef} className='animate-in fade-in duration-300'>
                        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                            <h2 className='text-3xl font-bold text-amber-800 mb-6'>🏨 Accommodation</h2>
                            <div className='space-y-3'>
                                {destination.accommodation.map((place, idx) => (
                                    <div key={idx} className='flex items-start bg-amber-50 p-4 rounded-md border-l-4 border-amber-600'>
                                        <span className='text-2xl mr-4'>🏘️</span>
                                        <p className='text-gray-800'>{place}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default DestinationPage
