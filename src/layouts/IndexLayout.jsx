import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navigation/Nav'
import Footer from '../components/Navigation/Footer'
import { ScrollRestoration } from 'react-router-dom';


const IndexLayout = () => {
  return (
    <>
      <ScrollRestoration/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default IndexLayout