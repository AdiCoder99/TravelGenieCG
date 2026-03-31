import React from 'react'
import { Route, Routes , useLocation} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Destinations from './Components/Destinations'
import ItineraryPlanner from './Components/ItineraryPlanner'
import TripPlanner from './Pages/TripPlanner'
const App = () => {
  return (
    <>
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
