import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import arrow from '../files/back_arrow.svg'


const VansHostDetail = () => {
  const { id } = useParams()
  const [vansHost, setVansHost] = useState([])
  const vansHostLength = Object.keys(vansHost).length;
  // Object.keys( the object to check).length is used to check if an object is empty by check its length

  async function getVansHost() {
    const data = await fetch(`/api/host/vans/${id}`)
    const dataObj = await data.json()
    setVansHost(dataObj.vans);
  }

  useEffect(() => {
    getVansHost()
  }, [id]);

  const { name, price, imageUrl } = vansHost

  // console.log(vansHostLength);

  
  const vanHostElement = (
    <div className='flex gap-5'>
      <img className='w-40 h-40 rounded-md' src={imageUrl} alt="VansImage" />
      <div className='flex flex-col justify-center items-start'>
        <h2 className='text-black text-2xl font-bold'>{name}</h2>
        <p className='text-grey text-base font-medium'>
          <span className="text-black font-bold">${price}</span>/day
        </p>
      </div>
    </div>
  )
  
  console.log();
  return (
    <div className='bg-bg-orange | flex flex-col gap-10 | py-11 px-7'>
      <Link to={`/host/vans`} className='flex justify-start items-center gap-2.5'>
        <img className='w-3' src={arrow} alt="back" />
        <p className='underline font-medium'>Back to all vans</p>
      </Link>

      <div className='bg-white p-6 rounded-md'>
        <div>
          <div>
          
            {
              vansHostLength > 0?
              vanHostElement:
              <h2 className='text-center text-2xl p-20'>Loading...</h2>
            }

            {/* className={
                  ({isActive}) => isActive? "text-black font-bold underline": "hover:text-black"} */}

            <div className='text-grey font-medium | flex gap-5 py-6 '>
              <NavLink>
                  Details
              </NavLink>

              <NavLink>
                  Price
              </NavLink>

              <NavLink>
                  Photos
              </NavLink>
            </div>
          </div>

          <div>
            Content Here
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default VansHostDetail