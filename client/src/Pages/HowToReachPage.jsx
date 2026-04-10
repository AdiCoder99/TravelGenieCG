import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import assets from '../assets/assets';
import { useAppContext } from '../Context/AppContext';

const HowToReachPage = () => {

  const [from, setFrom] = useState('');
  const { id } = useParams();
  const { directions, directionsLoading, directionsError, fetchDirections } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (from.trim()) {
      try {
        await fetchDirections(from, id);
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    }
  };

  React.useEffect(() => {
    if (directions) {
      console.log('Directions object:', directions);
      console.log('Routes array:', directions.routes);
      console.log('Routes length:', directions.routes?.length);
    }
  }, [directions]);

  return (
    <>
      {/* Background Section with Form */}
      <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop)', backgroundColor: 'rgba(92, 64, 51, 0.6)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-900 opacity-45"></div>
        
        <div className="relative w-full max-w-2xl mx-auto px-4 py-16 flex flex-col justify-center min-h-screen">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">How To Reach {id}</h1>
            <p className="text-white text-lg">Find directions to {id} from your location</p>
          </div>

          <form className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-blur-sm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="from" className="block font-semibold text-amber-900 mb-2">From Where?</label>
              <input
                id="from"
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter your location (e.g., Delhi, Mumbai)"
                className="w-full px-3 py-3 border-2 border-amber-300 rounded-md focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 text-sm"
              />
            </div>
            <button type="submit" disabled={directionsLoading} className="w-full py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-semibold rounded-md hover:from-amber-800 hover:to-orange-700 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
              {directionsLoading ? 'Fetching Directions...' : 'Get Directions'}
            </button>
          </form>
        </div>
      </div>

      {/* Results Section - Below Background */}
      <div className="w-full max-w-2xl mx-auto px-4 py-12">
        {directionsLoading && (
          <div className="bg-white bg-opacity-90 p-5 rounded-md shadow-lg text-center backdrop-blur-sm">
            <p className="text-amber-900 font-semibold">Loading directions...</p>
          </div>
        )}

        {directionsError && (
          <div className="animate-in slide-in-from-top-2 duration-300">
            <div className="bg-red-100 bg-opacity-90 border-l-4 border-red-600 p-5 rounded-md shadow-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-red-700 mb-3">Error</h2>
              <p className="text-red-800 leading-relaxed">{directionsError}</p>
            </div>
          </div>
        )}

        {directions && !directionsLoading && (
          <div className="animate-in slide-in-from-top-2 duration-300 space-y-4">
            {/* Debug Info */}
            <div style={{display: 'none'}}>
              {console.log('Rendering directions:', directions)}
              {console.log('Has routes:', !!directions.routes)}
              {console.log('Routes type:', typeof directions.routes)}
              {console.log('Routes is array:', Array.isArray(directions.routes))}
            </div>

            {/* Main Directions Card */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-amber-800 mb-2">
                Directions from {directions.from || from} to {directions.to || id}
              </h2>
              
              {/* Routes */}
              <div className="space-y-4">
                {Array.isArray(directions.routes) && directions.routes.length > 0 ? (
                  directions.routes.map((route, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-700 p-4 rounded-md">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-amber-900 capitalize">{route.mode}</h3>
                        <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {route.duration}
                        </span>
                      </div>
                      
                      <div className="mb-3 text-sm text-amber-800">
                        <p><strong>Distance:</strong> {route.distance}</p>
                      </div>

                      {/* Steps */}
                      {route.steps && Array.isArray(route.steps) && route.steps.length > 0 && (
                        <div className="mb-3">
                          <h4 className="font-semibold text-amber-800 mb-2">Steps:</h4>
                          <ol className="list-decimal list-inside space-y-1">
                            {route.steps.map((step, stepIdx) => (
                              <li key={stepIdx} className="text-sm text-amber-900">{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Tips */}
                      {route.tips && Array.isArray(route.tips) && route.tips.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">💡 Tips:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {route.tips.map((tip, tipIdx) => (
                              <li key={tipIdx} className="text-sm text-amber-900">{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div>
                    <p className="text-red-700 font-semibold mb-2">No routes available</p>
                    <p className="text-sm text-gray-600">Debug: directions object = {JSON.stringify(directions).substring(0, 200)}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Alternatives */}
            {directions.alternatives && directions.alternatives.length > 0 && (
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-blur-sm border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-orange-800 mb-3">🛣️ Alternative Routes</h3>
                <div className="space-y-2">
                  {directions.alternatives.map((alt, idx) => (
                    <div key={idx} className="bg-orange-50 p-3 rounded-md border border-orange-200">
                      <p className="text-amber-900">{alt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default HowToReachPage
