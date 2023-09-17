import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-bg-orange py-8 px-7 | flex justify-between'>
      <NavLink to={"/"} className='text-2xl font-black'>#VANLIFE</NavLink>

      <nav className='text-grey flex gap-3.5 transition-all'>
        <NavLink 
          to={"/host"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
          Host
        </NavLink>

        <NavLink 
          to={"/about"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
          About
        </NavLink>

        <NavLink 
          to={"/vans"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
            Vans
          </NavLink>
      </nav>
    </header> 
  )
}

export default Navbar