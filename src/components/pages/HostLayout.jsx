import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
       <nav className='text-grey | bg-bg-orange py-8 px-7 | flex gap-8'>
        <NavLink 
          to={"."} 
          end
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
          Dashboard
        </NavLink>

        <NavLink 
          to={"income"} 
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
          Income
        </NavLink>

        <NavLink 
          to={"vans"} 
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
          Vans
        </NavLink>

        <NavLink 
          to={"reviews"} 
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default HostLayout