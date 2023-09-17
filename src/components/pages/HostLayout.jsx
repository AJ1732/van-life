import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
       <nav className='text-grey | bg-bg-orange py-8 px-7 | flex gap-8'>
        <NavLink 
          to={"/host"} 
          className={
            ({isActive}) => isActive? "text-black font-bold ": "hover:text-black"}>
          Dashboard
        </NavLink>

        <NavLink 
          to={"/host/income"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
          Income
        </NavLink>

        <NavLink 
          to={"/host/vans"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
          Vans
        </NavLink>

        <NavLink 
          to={"/host/reviews"} 
          className={
            ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout