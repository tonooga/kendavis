import React from 'react'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Route>
    )
  ) 

  return <>
    <RouterProvider router={router} />
  </>
};

export default App
