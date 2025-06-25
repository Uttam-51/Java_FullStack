import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
    return (
        <nav className="bg-emerald-950 text-white py-4 px-6 flex items-baseline shadow-md">
            <h1 className="text-2xl font-bold">ReactRouterDemo</h1>
            <div className="space-x-4 ml-8">
                <NavLink to="/" className="hover:text-teal-600">Home</NavLink>
                <NavLink to="/about" className="hover:text-teal-600">About</NavLink>
                <NavLink to="/contact" className="hover:text-teal-600">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Header