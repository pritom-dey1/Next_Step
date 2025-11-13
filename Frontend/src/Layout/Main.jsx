import React from 'react'
import Navbar from '../Components/Home/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Home/Footer'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main