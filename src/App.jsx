import React from 'react'
import {Route, createBrowserRouter ,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import IndexLayout from './layouts/IndexLayout'
import HomePage from './pages/HomePage'
import FleetPage from './pages/FleetPage'
import PrivateToursPage from './pages/PrivateToursPage'
import GroupToursPage from './pages/GroupToursPage'
import TransfersPage from './pages/TransfersPage'
import ContactPage from './pages/ContactPage'
import BoatPage from './pages/BoatPage'
import PrivateTourPage from './pages/PrivateTourPage'
import GroupTourPage from './pages/GroupTourPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    //Inside this route put anything that uses IndexLayout
    <Route path='/' element={<IndexLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/fleet' element={<FleetPage />} />
      <Route path='/privateTours' element={<PrivateToursPage />} />
      <Route path='/groupTours' element={<GroupToursPage />} />
      <Route path='/transfers' element={<TransfersPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path="/fleet/:id" element={<BoatPage />} />      
      <Route path="/privateTour/:id" element={<PrivateTourPage />} />      
      <Route path="/groupTour/:id" element={<GroupTourPage />} />      

    </Route>,
  
  
  
  
  
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App