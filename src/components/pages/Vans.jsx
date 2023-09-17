import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [vansList, setVansList] = useState([])

  async function getVans() {
    const data = await fetch("/api/vans")
    const dataObj = await data.json()
    setVansList(dataObj.vans);
  }

  useEffect(() => {
    getVans()
  }, []);

  // console.log(vansList);

  // Vans List 
  const VanListElement = vansList.map( (van) => (
    <Link to={`/vans/${van.id}`} key={van.id} className='flex flex-col '>
      <img className='w-56 h-56 rounded-md | object-cover' src={van.imageUrl} alt="van image" />
      <div className='mt-4 | flex flex-row justify-between items-start gap-2'>
        <h3 className='text-black text-lg font-semibold'>{van.name}</h3>
        <h3 className='text-right | flex flex-col gap-0'>
          <span className='text-black text-lg font-semibold'>${van.price}</span>
          <span className='text-sm'>/day</span>
        </h3>
      </div>

      {/* bg-${van.type} */}
      <button className={`text-white text-center font-semibold | bg-ft-black | w-24 h-10 rounded-md | py-2 px-5`}>{van.type}</button>
    </Link>
  ))

  return (
    <div className='bg-bg-orange | w-full | flex flex-col | py-12 px-7'>
      <h2 className='text-black text-3xl font-bold'>Explore our van options</h2>
      <div className="filters"></div>

      <div className='mt-14 | grid grid-cols-2 gap-8'>
        {
          vansList.length > 0? 
          VanListElement: 
          <h2 className='text-center text-2xl p-20'>Loading...</h2>
        }
      </div>
      
    </div>
  )
}

export default Vans