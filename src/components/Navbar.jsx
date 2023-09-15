import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-bg-orange py-8 px-4 | flex justify-between'>
      <Link to={"/"} className='text-2xl font-black'>#VANLIFE</Link>

      <nav className='flex gap-3.5'>
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </nav>
    </header> 
  )
}

export default Navbar