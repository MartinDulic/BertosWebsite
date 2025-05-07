import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navigation/Nav'

const NoFooterLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default NoFooterLayout