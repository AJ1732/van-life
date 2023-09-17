import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import VanHostDetailHeader from './VanHostDetailHeader';
import arrow from '../files/back_arrow.svg'


const VansHostDetail = () => {
  const { id } = useParams()
  const [vansHost, setVansHost] = useState([])
  const vansHostLength = Object.keys(vansHost).length;
  // Object.keys( the object to check).length is used to check if an object is empty by check its length
  // console.log(vansHostLength);

  async function getVansHost() {
    const data = await fetch(`/api/host/vans/${id}`)
    const dataObj = await data.json()
    setVansHost(dataObj.vans);
  }

  useEffect(() => {
    getVansHost()
  }, [id]);

  const { name, price, type, imageUrl } = vansHost
  console.log(vansHost);

  console.log();
  return (
    <div className='bg-bg-orange | flex flex-col gap-10 | py-11 px-7'>
      <Link 
        to={`..`} 
        relative='path'
        className='flex justify-start items-center gap-2.5'>
          <img className='w-3' src={arrow} alt="back" />
          <p className='underline font-medium'>Back to all vans</p>
      </Link>

      <div className='bg-white | rounded-md | py-7 px-6 '>
        {
          vansHostLength > 0?
          (
            <div>
              <VanHostDetailHeader 
                name={name}
                price={price}
                type={type}
                imageUrl={imageUrl}/>

              <Outlet context={vansHost}/>
            </div>
          ):
          <h2 className='text-center text-2xl p-20'>Loading...</h2>
        }
      </div>
      
    </div>
  )
}

export default VansHostDetail