import React from 'react'
import { Route, Routes , useLocation} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Destinations from './Components/Destinations'
import ItineraryPlanner from './Components/ItineraryPlanner'
import TripPlanner from './Pages/TripPlanner'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <Navbar/>
    <Routes>
      <Route 
      path="/" 
      element={
      <>
      <Hero/>
      <Destinations/>
      <ItineraryPlanner/>
      </>
      }/>

      <Route path="/planner" 
      element={<TripPlanner/>} 
      />

    </Routes>
    </>
  )
}

export default App
