import React from 'react'
import assets from '../assets/assets'
import { useAppContext } from '../Context/AppContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const TripPlanner = () => {
  
  const navigate = useNavigate()
  const { duration, setDuration, budget, setBudget, category, setCategory, aiPlanner, loading } = useAppContext();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!duration || !budget || !category){
      toast.error('Please fill all the fields');
      return;
    }
    const data = {
      days: duration,
      budget,
      category
    }

    try {
      await aiPlanner(data);
      navigate('/planner/results');
    }
    catch (error) {
      toast.error(error.message || 'Unable to generate itinerary');
    }
  }


  return (
    <div className='relative w-screen h-screen'>
      <img
        src={assets.plannerbg}
        className='w-full h-full object-cover absolute top-0 left-0'
        alt="Planner Background"
      />

      <div
        className='absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-2xl bg-white/65 backdrop-blur-md p-6'
        style={{ height: '500px', width: '800px' }}
      >

        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold font-serif'>Plan Your Perfect Trip</h1>
          <h2 className='mt-2 font-serif'>Your Personalised Journey Starts here!</h2>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-12 text-gray-800 mt-10 font-serif justify-center items-center '>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-2'>
              <label className='text-2xl font-bold font-serif'>Duration (days):</label>
              <input value={duration} onChange={(e) => setDuration(e.target.value)} type="text" className='bg-white h-10 w-60 rounded-2xl p-2' placeholder='Duration' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-2xl font-bold font-serif'>Budget ($):</label>
              <input value={budget} onChange={(e) => setBudget(e.target.value)} type="text" className='bg-white h-10 w-60 rounded-2xl p-2' placeholder='Budget' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-2xl font-bold font-serif'>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='bg-white/90 h-11 w-80 rounded-xl px-3 text-gray-800 shadow-md outline-none border border-gray-200 focus:ring-2 focus:ring-blue-400 appearance-none cursor-pointer'
            >
              <option value="" disabled>Select a category</option>
              <option value="adventurous">🌄 Adventurous</option>
              <option value="religious">🛕 Religious</option>
              <option value="cultural">🎭 Cultural</option>
              <option value="nature">🌿 Nature</option>
              <option value="mixed">✨ Mixed</option>
            </select>
          </div>
          <button
            type='submit'
            disabled={loading}
            className='bg-blue-500 text-white px-6 py-2 rounded-2xl text-lg font-bold hover:bg-blue-600 transition duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70'
          >
            {loading ? 'Generating...' : 'Generate Itinerary'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default TripPlanner
