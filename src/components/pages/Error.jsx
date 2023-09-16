import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-bg-orange py-28 px-4 | flex flex-col gap-'>
      <h2 className='text-black text-3xl font-bold | '>Sorry, the page you were looking for was not found.</h2>

      <Link to={"/vans"} className='bg-black | text-white text-center font-bold | mt-8 py-4 px-40 | rounded-md'>Return to home</Link>
    </div>
  )
}

export default Error