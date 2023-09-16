import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className='bg-bg-orange'>
      <div className="img-bg | text-white | flex flex-col gap-4 | w-full h-96 | py-16 px-7">
        <h2 className='text-4xl font-extrabold'>You got the travel plans, we got the travel vans.</h2>

        <p className='text-base font-medium'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

        <Link to={"/vans"} className='bg-orange | text-center font-bold | mt-8 py-4 px-40 | rounded-md'>Find your van</Link>
      </div>
    </div>
  )
}

export default HomePage