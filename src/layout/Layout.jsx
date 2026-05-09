import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import Footer from '../common/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
