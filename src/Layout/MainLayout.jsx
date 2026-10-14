import React from 'react'
import Navbar from '../components/NavAndFooter/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/NavAndFooter/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  )
}

export default MainLayout