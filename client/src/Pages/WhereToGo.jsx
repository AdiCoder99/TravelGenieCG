import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const WhereToGo = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'religious', 'adventurous', 'cultural-historical', 'scenic-nature', 'family-friendly', 'peaceful', 'photography']

  // Filter destinations based on active category
  const filteredDestinations = (assets.dest || []).filter((destination) => {
    if (activeCategory === 'all') {
      return true
    }
    return (destination.category || []).includes(activeCategory)
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-4'>
            Where to Go?
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Explore the beautiful destinations of Chhattisgarh. Filter by category to find your perfect getaway.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base capitalize ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              {category === 'all' ? 'All' : category.replace('-', ' & ')}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destination/${destination.id}`}
                className='group cursor-pointer'
              >
                <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                  {/* Image Container */}
                  <div className='relative h-64 overflow-hidden'>
                    <img
                      src={destination.img}
                      alt={destination.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    {/* Category Badge */}
                    <div className='absolute top-4 right-4 flex flex-wrap gap-2 justify-end'>
                      {(destination.category || []).slice(0, 3).map((cat) => {
                        let bgColor = 'bg-blue-500'
                        if (cat === 'religious') bgColor = 'bg-purple-500'
                        if (cat === 'adventurous') bgColor = 'bg-orange-500'
                        if (cat === 'cultural-historical') bgColor = 'bg-amber-600'
                        if (cat === 'scenic-nature') bgColor = 'bg-green-500'
                        if (cat === 'family-friendly') bgColor = 'bg-pink-500'
                        if (cat === 'peaceful') bgColor = 'bg-indigo-500'
                        if (cat === 'photography') bgColor = 'bg-red-500'
                        
                        return (
                          <span
                            key={cat}
                            className={`px-2 py-1 rounded-full text-xs font-bold capitalize text-white ${bgColor}`}
                            title={cat.replace('-', ' ')}
                          >
                            {cat.split('-')[0][0].toUpperCase()}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors'>
                      {destination.title}
                    </h3>
                    <p className='text-gray-600 text-sm mb-4 italic'>
                      {destination.tagline}
                    </p>
                    <p className='text-gray-500 text-sm line-clamp-3 mb-4'>
                      {destination.description}
                    </p>
                    <div className='flex items-center justify-between'>
                      <div className='flex gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className='text-yellow-400'>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors'>
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className='col-span-full text-center py-20'>
              <p className='text-2xl text-gray-500 font-semibold'>
                No destinations found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-8 shadow-lg'>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-emerald-600 mb-1'>
              {(assets.dest || []).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Total</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-purple-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('religious')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Religious</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-orange-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('adventurous')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Adventure</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-amber-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('cultural-historical')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Cultural</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-green-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('scenic-nature')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Scenic</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-pink-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('family-friendly')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Family</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-indigo-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('peaceful')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Peaceful</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-red-600 mb-1'>
              {(assets.dest || []).filter((d) => (d.category || []).includes('photography')).length}
            </h4>
            <p className='text-gray-600 text-sm font-semibold'>Photo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhereToGo
