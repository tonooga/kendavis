import React from 'react'
import { Outlet } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
// import ViewAllBooks from '../components/ViewAllBooks'

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout