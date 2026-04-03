import React from 'react'
import assets from '../assets/assets'
import { useAppContext } from '../Context/AppContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const categories = [
  { label: 'Adventurous', value: 'adventurous', icon: '🌄' },
  { label: 'Religious', value: 'religious', icon: '🛕' },
  { label: 'Cultural', value: 'cultural', icon: '🎭' },
  { label: 'Nature', value: 'nature', icon: '🌿' },
  { label: 'Mixed', value: 'mixed', icon: '✨' },
]

const dayPresets = [2, 3, 5, 7]
const budgetPresets = [5000, 10000, 15000, 25000]

const TripPlanner = () => {
  const navigate = useNavigate()
  const { duration, setDuration, budget, setBudget, category, setCategory, aiPlanner, loading } = useAppContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!duration || !budget || !category) {
      toast.error('Please fill all the fields')
      return
    }

    const data = {
      days: duration,
      budget,
      category,
    }

    try {
      await aiPlanner(data)
      navigate('/planner/results')
    }
    catch (error) {
      toast.error(error.message || 'Unable to generate itinerary')
    }
  }

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <img
        src={assets.plannerbg}
        className='absolute inset-0 h-full w-full object-cover'
        alt='Planner Background'
      />
      <div className='absolute inset-0 bg-linear-to-br from-slate-950/70 via-emerald-950/40 to-slate-900/70' />
      <div
        className='absolute inset-0 opacity-30'
        
      />

      <div className='relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-10'>
        <div className='grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='rounded-4xl border border-white/25 bg-white/50 p-6 text-slate-900 shadow-2xl backdrop-blur-md sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700'>AI planner</p>
            <h1 className='mt-3 text-3xl font-bold font-serif leading-tight sm:text-4xl'>Plan Your Perfect Trip</h1>
            <p className='mt-3 text-sm text-slate-600 sm:text-base'>
              Tell us your travel style, duration, and budget. The planner will generate a personalized itinerary you can review instantly.
            </p>

            <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-7'>
              <div className='grid gap-5 sm:grid-cols-2'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-700'>Duration (days)</label>
                  <input
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    type='number'
                    min='1'
                    className='h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'
                    placeholder='e.g. 4'
                  />
                  <div className='mt-1 flex flex-wrap gap-2'>
                    {dayPresets.map((preset) => (
                      <button
                        key={preset}
                        type='button'
                        onClick={() => setDuration(String(preset))}
                        className='rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 cursor-pointer'
                      >
                        {preset} days
                      </button>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-700'>Budget (INR)</label>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    type='number'
                    min='1'
                    className='h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'
                    placeholder='e.g. 10000'
                  />
                  <div className='mt-1 flex flex-wrap gap-2'>
                    {budgetPresets.map((preset) => (
                      <button
                        key={preset}
                        type='button'
                        onClick={() => setBudget(String(preset))}
                        className='rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 cursor-pointer'
                      >
                        Rs {preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <label className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-700'>Category</label>
                <div className='grid gap-3 sm:grid-cols-2'>
                  {categories.map((item) => (
                    <button
                      key={item.value}
                      type='button'
                      onClick={() => setCategory(item.value)}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition cursor-pointer ${
                        category === item.value
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-500'
                      }`}
                    >
                      <span className='text-lg'>{item.icon}</span>
                      <span className='font-semibold'>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type='submit'
                disabled={loading}
                className='mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-600 px-6 text-base font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer'
              >
                {loading ? 'Generating your itinerary...' : 'Generate Itinerary'}
              </button>
            </form>
          </div>

          <div className='rounded-4xl border border-white/25 bg-white/15 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200'>How it works</p>
            <h2 className='mt-3 text-3xl font-bold font-serif leading-tight'>From preferences to day-wise itinerary</h2>
            <div className='mt-6 space-y-4 text-sm leading-7 text-slate-100 sm:text-base'>
              <p>
                Select your trip type and budget range, then generate an itinerary tailored for your style. You will get a structured day plan you can instantly review on the results page.
              </p>
              <p>
                Pro tip: choose a broader category like Mixed for diverse plans, or pick a focused category for a tightly themed trip.
              </p>
            </div>

            <div className='mt-8 rounded-3xl border border-white/25 bg-white/10 p-5'>
              <h3 className='text-lg font-semibold'>Planning checklist</h3>
              <ul className='mt-4 space-y-3 text-sm text-slate-100'>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300' />
                  <span>Set realistic duration based on travel distance between places.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300' />
                  <span>Use budget to balance stays, food, and commute options.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300' />
                  <span>Refine and regenerate if you want alternate route suggestions.</span>
                </li>
              </ul>
            </div>

            <button
              type='button'
              onClick={() => navigate('/experiences')}
              className='mt-8 inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 cursor-pointer'
            >
              Browse Experiences First
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripPlanner
