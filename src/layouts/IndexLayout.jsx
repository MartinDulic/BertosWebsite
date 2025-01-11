import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navigation/Nav'
import Footer from '../components/Navigation/Footer'



const IndexLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default IndexLayout