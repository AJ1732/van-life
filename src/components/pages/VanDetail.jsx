// import React from 'react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../files/back_arrow.svg'

const VanDetail = () => {
  const { id } = useParams()
  const [vans, setVans] = useState([])

  async function getVans() {
    const data = await fetch(`/api/vans/${id}`)
    const dataObj = await data.json()
    setVans(dataObj.vans);
  }

  useEffect(() => {
    getVans()
  }, [id]);

  const { name, price, description, type, imageUrl } = vans
  console.log(vans);

  return (
    <div className="bg-bg-orange flex flex-col">
      <Link 
        to={`..`} 
        relative='path'
        className='flex justify-start items-center gap-2.5 px-7'>
          <img className='w-3' src={arrow} alt="back" />
          <p className='underline font-medium'>Back to all vans</p>
      </Link>

      {
        vans.length !== 0 ?
        (<div className='flex flex-col justify-center items-center | py-12 px-7'>
          <img className='w-104 h-104 rounded-md | object-cover' src={imageUrl} alt="Van image" />

          <div className="w-full | flex flex-col items-left gap-4 | mt-12">
            <button className={`text-white text-center capitalize font-semibold | bg-ft-black | w-24 h-10 rounded-md | py-2 px-5`}>{type}</button>
            <h2 className='text-black text-3xl font-bold'>{name}</h2>

            <div>
              <span className='text-black text-lg font-semibold'>${price}</span>
              <span className='text-sm'>/day</span>
            </div>

            <p className='text-black text-base font-medium'>{description}</p>

            <button className={`text-white text-center font-semibold | bg-orange | rounded-md | mt-3 py-2 px-5`}>Rent this Van</button>
          </div>
        </div>):
        (<h2 className='text-center text-2xl p-20'>Loading...</h2>)
      } 
    </div>
  )
}

export default VanDetail