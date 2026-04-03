import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const experienceHighlights = [
  {
    title: 'Spiritual mornings',
    subtitle: 'Start with temple visits and calm rituals',
    description:
      'Slow down at sacred places like Ghatarani, Rajiv Lochan, and Danteshwari Temple, where faith, local tradition, and quiet surroundings create a reflective travel experience.',
    tag: 'Peaceful',
  },
  {
    title: 'Waterfall chasing',
    subtitle: 'Best during monsoon and post-monsoon months',
    description:
      'Visit Chitrakote, Tirathgarh, and Ghatarani Waterfall for dramatic scenery, fresh forest air, and the kind of views that define a memorable road trip.',
    tag: 'Scenic',
  },
  {
    title: 'Heritage walks',
    subtitle: 'Explore ancient architecture and living history',
    description:
      'Sirpur and Bhoramdeo are ideal for travelers who want carved stone temples, archaeological sites, and a deeper understanding of the region’s cultural roots.',
    tag: 'Cultural',
  },
  {
    title: 'Forest escapes',
    subtitle: 'For travelers who want to be outdoors',
    description:
      'Kanger Valley National Park and other green corridors in Bastar give you forests, wildlife, caves, and quiet views far away from city noise.',
    tag: 'Adventure',
  },
]

const travelMoments = [
  {
    title: 'Weekend reset',
    note: '2-3 days',
    items: ['Ghatarani Temple', 'Rajiv Lochan Temple', 'Sirpur'],
  },
  {
    title: 'Nature trail',
    note: '3-4 days',
    items: ['Kanger Valley National Park', 'Tirathgarh Waterfall', 'Chitrakote Waterfalls'],
  },
  {
    title: 'Heritage circuit',
    note: '2-5 days',
    items: ['Bhoramdeo Temple', 'Sirpur Archaeological Site', 'Danteshwari Temple'],
  },
]

const experiencePageDestinations = assets.dest.slice(0, 6)

const ExperiencePage = () => {
  return (
    <div className='min-h-screen bg-[#f3f5f7] text-slate-900'>
      <section className='relative overflow-hidden px-6 pt-32 pb-20 md:px-10 lg:px-16'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at top left, rgba(255,255,255,0.95), transparent 30%), radial-gradient(circle at top right, rgba(190,242,100,0.35), transparent 28%), radial-gradient(circle at bottom left, rgba(125,211,252,0.18), transparent 26%), linear-gradient(135deg, #fdfefe 0%, #eef6ea 52%, #e8f0ff 100%)',
          }}
        />
        <div
          className='absolute inset-0 opacity-25'
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className='absolute inset-0 opacity-30 mix-blend-soft-light'
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.14) 0, transparent 18%), radial-gradient(circle at 80% 15%, rgba(59,130,246,0.12) 0, transparent 16%), radial-gradient(circle at 70% 80%, rgba(132,204,22,0.10) 0, transparent 14%)',
          }}
        />

        <div className='relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600'>Experiences</p>
            <h1 className='mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl'>
              Travel Chhattisgarh through moments, not just stops.
            </h1>
            <p className='mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg'>
              Build a trip around rituals at ancient temples, misty waterfalls, forest drives, and heritage trails. This page is designed to help you choose the kind of journey you want before you plan the route.
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <Link
                to='/planner'
                className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-700'
              >
                Plan your trip
              </Link>
              <Link
                to='/destination/chitrakote-waterfalls'
                className='inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:bg-white'
              >
                See a featured destination
              </Link>
            </div>

            <div className='mt-12 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md'>
                <p className='text-3xl font-bold text-emerald-600'>4</p>
                <p className='mt-2 text-sm text-slate-600'>Experience styles curated for different trip moods</p>
              </div>
              <div className='rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md'>
                <p className='text-3xl font-bold text-emerald-600'>6</p>
                <p className='mt-2 text-sm text-slate-600'>Featured destinations pulled from the current site data</p>
              </div>
              <div className='rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md'>
                <p className='text-3xl font-bold text-emerald-600'>AI</p>
                <p className='mt-2 text-sm text-slate-600'>Use the planner after choosing your travel style</p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -left-8 top-10 h-36 w-36 rounded-full bg-lime-400/20 blur-3xl' />
            <div className='absolute -right-6 bottom-8 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl' />

            <div className='relative overflow-hidden rounded-4xl border border-slate-200 bg-white/85 p-4 shadow-xl backdrop-blur-md'>
              <div
                className='absolute inset-0 opacity-60'
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(16,185,129,0.06) 25%, transparent 25%), linear-gradient(225deg, rgba(59,130,246,0.06) 25%, transparent 25%), linear-gradient(45deg, rgba(132,204,22,0.05) 25%, transparent 25%), linear-gradient(315deg, rgba(16,185,129,0.05) 25%, transparent 25%)',
                  backgroundPosition: '16px 0, 16px 0, 0 0, 0 0',
                  backgroundSize: '32px 32px',
                  backgroundRepeat: 'repeat',
                }}
              />
              <div className='grid gap-4 sm:grid-cols-2'>
                {experienceHighlights.map((item) => (
                  <div key={item.title} className='relative z-10 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm'>
                    <span className='inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700'>
                      {item.tag}
                    </span>
                    <h2 className='mt-4 text-2xl font-bold'>{item.title}</h2>
                    <p className='mt-2 text-sm font-medium text-emerald-700'>{item.subtitle}</p>
                    <p className='mt-4 text-sm leading-7 text-slate-600'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-6 py-20 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600'>Trip ideas</p>
              <h2 className='mt-3 text-3xl font-bold md:text-4xl'>Choose the kind of experience you want</h2>
            </div>
            <p className='max-w-2xl text-sm leading-7 text-slate-600 md:text-base'>
              Whether you want a short spiritual reset or a longer route through forests and heritage sites, these trip moments help you shape the rest of the itinerary.
            </p>
          </div>

          <div className='mt-10 grid gap-6 lg:grid-cols-3'>
            {travelMoments.map((moment) => (
              <div key={moment.title} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='flex items-center justify-between gap-4'>
                  <h3 className='text-2xl font-bold'>{moment.title}</h3>
                  <span className='rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700'>{moment.note}</span>
                </div>
                <ul className='mt-6 space-y-3 text-slate-600'>
                  {moment.items.map((item) => (
                    <li key={item} className='flex items-start gap-3'>
                      <span className='mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 pb-20 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600'>Featured places</p>
              <h2 className='mt-3 text-3xl font-bold md:text-4xl'>A few destinations to anchor your experience</h2>
            </div>
            <Link to='/destination/ghatarani-temple' className='text-sm font-semibold text-emerald-700 transition hover:text-emerald-900'>
              Open a destination detail page
            </Link>
          </div>

          <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {experiencePageDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destination/${destination.id}`}
                className='group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300'
              >
                <div className='relative h-72'>
                  <img
                    src={destination.img}
                    alt={destination.title}
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <p className='text-sm uppercase tracking-[0.3em] text-emerald-200'>Experience</p>
                    <h3 className='mt-2 text-2xl font-bold'>{destination.title}</h3>
                    <p className='mt-2 text-sm text-slate-100'>{destination.tagline || 'A destination worth building a trip around'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 pb-24 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-linear-to-r from-white via-emerald-50 to-lime-50 px-8 py-12 shadow-sm md:px-12'>
          <div
            className='pointer-events-none absolute inset-x-0 mx-auto h-full max-w-7xl rounded-4xl opacity-40'
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600'>Next step</p>
              <h2 className='mt-3 text-3xl font-bold md:text-4xl'>Let the AI planner turn your preferred experience into a route.</h2>
              <p className='mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base'>
                Pick your budget, duration, and category, then generate a trip that matches the mood you chose here.
              </p>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row lg:justify-end'>
              <Link
                to='/planner'
                className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-700'
              >
                Open planner
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:bg-white'
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperiencePage
