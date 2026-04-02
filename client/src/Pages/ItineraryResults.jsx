import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'

const formatPlace = (place) => {
  if (typeof place === 'string') {
    return place;
  }

  if (place && typeof place === 'object') {
    return place.name || place.place || place.title || 'Suggested stop';
  }

  return 'Suggested stop';
}

const ItineraryResults = () => {
  const navigate = useNavigate()
  const { itinerary, loading, error } = useAppContext()

  const days = itinerary?.days || []

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,#f7fafc_0%,#e2e8f0_40%,#cbd5e1_100%)] px-4 py-10 text-slate-900'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-md md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-600'>Trip summary</p>
            <h1 className='mt-2 text-3xl font-bold md:text-4xl'>Your AI generated itinerary</h1>
            <p className='mt-2 max-w-2xl text-sm text-slate-600'>Each day is laid out clearly so you can scan the plan, review the suggested places, and understand the estimated cost at a glance.</p>
          </div>
          <button
            onClick={() => navigate('/planner')}
            className='w-fit rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700'
          >
            Plan another trip
          </button>
        </div>

        {loading && (
          <div className='rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-600 shadow-sm'>
            Generating itinerary...
          </div>
        )}

        {!loading && error && (
          <div className='rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-sm'>
            {error}
          </div>
        )}

        {!loading && !error && days.length === 0 && (
          <div className='rounded-3xl border border-slate-200 bg-white/70 p-10 text-center shadow-sm'>
            <h2 className='text-2xl font-semibold'>No itinerary found</h2>
            <p className='mt-3 text-slate-600'>Generate a trip plan first to see your day-by-day result here.</p>
            <button
              onClick={() => navigate('/planner')}
              className='mt-6 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700'
            >
              Go to planner
            </button>
          </div>
        )}

        {!loading && !error && days.length > 0 && (
          <div className='grid gap-6 lg:grid-cols-2'>
            {days.map((dayItem, index) => (
              <article key={dayItem.day ?? index} className='overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-xl backdrop-blur-md'>
                <div className='flex items-center justify-between border-b border-slate-200/70 bg-slate-900 px-6 py-5 text-white'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.35em] text-slate-300'>Day {dayItem.day ?? index + 1}</p>
                    <h2 className='mt-1 text-2xl font-semibold'>Day {dayItem.day ?? index + 1} itinerary</h2>
                  </div>
                  <div className='rounded-full bg-white/10 px-4 py-2 text-sm font-semibold'>
                    {dayItem.cost ? `Cost: ${dayItem.cost}` : 'Cost not provided'}
                  </div>
                </div>

                <div className='p-6'>
                  <div className='mb-5 flex items-center justify-between gap-4'>
                    <p className='text-sm font-medium text-slate-500'>Recommended places</p>
                    <span className='rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700'>
                      {Array.isArray(dayItem.places) ? `${dayItem.places.length} stops` : 'Stops'}
                    </span>
                  </div>

                  {Array.isArray(dayItem.places) && dayItem.places.length > 0 ? (
                    <ul className='space-y-3'>
                      {dayItem.places.map((place, placeIndex) => (
                        <li key={`${dayItem.day ?? index}-${placeIndex}`} className='flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3'>
                          <span className='mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white'>
                            {placeIndex + 1}
                          </span>
                          <div className='min-w-0'>
                            <p className='font-medium text-slate-900'>{formatPlace(place)}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-500'>
                      No places were returned for this day.
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ItineraryResults