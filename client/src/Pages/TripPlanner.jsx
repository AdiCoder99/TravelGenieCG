import React from 'react'
import assets from '../assets/assets'
const TripPlanner = () => {
  const [duration, setDuration] = React.useState('')
  const [budget, setBudget] = React.useState('')
  const [category, setCategory] = React.useState('')


  return (
    <div className='relative'>
      <img src={assets.plannerbg} className='w-screen h-screen absolute top-0 left-0' alt="Planner Background" />
      <div className='h-150 w-200 border border-white absolute left-140 top-50 rounded-2xl bg-white/65 '>
        <div className='flex justify-center items-center mt-5 flex-col'>
          <h1 className='text-4xl font-bold font-serif'>Plan Your Perfect Trip</h1>
          <h2 className='mt-2 font-serif'>Your Personalised Journey Starts here! </h2></div>
      </div>
      <div className='absolute top-95 left-180 flex flex-col gap-5'>
        <form action=" " className='flex flex-col gap-6 '>
          <div className='flex flex-col gap-2'>
            <label className='text-2xl font-bold font-serif' htmlFor="duration">Duration (days):</label>
            <input onChange={(e) => setDuration(e.target.value)} type="text" id="duration" placeholder="Duration (days)" className='bg-white ' />
          
            <label className='text-2xl font-bold font-serif' htmlFor="budget">Budget ($):</label>
              <input onChange={(e) => setBudget(e.target.value)} type="text" id="budget" placeholder="Budget ($)" className='bg-white ' />
            </div>

          <div className='flex flex-col gap-2'>
            <label className='text-2xl font-bold font-serif' htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="adventurous">Adventurous</option>
              <option value="religious">Religious</option>
              <option value="cultural">Cultural</option>
              <option value="nature">Nature</option>
              <option value="mixed">mixed</option>
            </select>
          </div>

        </form>
      </div>
    </div>
  )
}

export default TripPlanner
