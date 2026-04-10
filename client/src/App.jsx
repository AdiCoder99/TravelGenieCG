import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Destinations from './Components/Destinations'
import ItineraryPlanner from './Components/ItineraryPlanner'
import TripPlanner from './Pages/TripPlanner'
import ItineraryResults from './Pages/ItineraryResults'
import { Toaster } from 'react-hot-toast'
import DestinationPage from './Pages/DestinationPage'
import NotFoundPage from './Pages/NotFoundPage'
import ExperiencePage from './Pages/ExperiencePage'
import HowToReachPage from './Pages/HowToReachPage'
import WhereToGo from './Pages/WhereToGo'
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
      />`
      <Route path="/where-to-go" element={<WhereToGo />} />
      <Route path="/experiences" element={<ExperiencePage />} />

      <Route
        path="/planner/results"
        element={<ItineraryResults />}
      />
      <Route path="/destination/:id" element={<DestinationPage />} />

      <Route path='/destination/:id/how-to-reach' 
      element = {<HowToReachPage/>}
      />

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </>
  )
}

export default App
