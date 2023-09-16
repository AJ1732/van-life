import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
       <nav className='text-grey | bg-bg-orange py-8 px-7 | flex gap-8'>
        <Link to={"/host"}>Dashboard</Link>
        <Link to={"/income"}>Income</Link>
        <Link to={"/reviews"}>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout