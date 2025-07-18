import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import logo from '../assets/images/books_icon.ico'
// import logo from '../assets/images/literature-xxl.png'
import logo from '../assets/images/home_1_1kd-33-ed.jpg'
// import logo from '../assets/images/logo_kdlogonew1-02_crop.jpg'

import { useParams } from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'   

    return (
    <nav className="bg-black border-b fixed top-0 right-0 left-0">
        {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
        <div className="max-w-[1056px] mx-auto max-w-7xl px-2 sm:px-3 lg:px-3">
            <div className="py-4 flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4"
                to="/">
                <img className="h-10 w-auto"
                src={logo}
                alt="Kenneth Davis Works of Art Ltd."
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">Kenneth Davis (Works of Art) Ltd.</span>
            </NavLink>
            <div className="md:ml-auto">
                <div className="flex space-x-2">
                <NavLink
                    to="/"
                    className= { linkClass }
                    >Home
                </NavLink >
                <NavLink
                    to="/services"
                    className= { linkClass }
                    >Services
                </NavLink >
                <NavLink
                    to="/contact"
                    className= { linkClass }
                    >Contact
                </NavLink >
                <NavLink
                    to="/about"
                    className= { linkClass }
                    >About
                </NavLink >


                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar