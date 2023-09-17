import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import arrow from '../files/back_arrow.svg'


const VansHostDetail = () => {
  const { id } = useParams()
  const [vansHost, setVansHost] = useState([])

  async function getVansHost() {
    const data = await fetch(`/api/host/vans/${id}`)
    const dataObj = await data.json()
    setVansHost(dataObj.vans);
  }

  useEffect(() => {
    getVansHost()
  }, [id]);

  // const { name, price, description, type, imageUrl } = vansHost

  console.log(vansHost);

  return (
    <div className='bg-bg-orange | flex flex-col gap-10 | py-11 px-7'>
      <Link to={`/host/vans`} className='flex justify-start items-center gap-2.5'>
        <img className='w-3' src={arrow} alt="back" />
        <p className='underline font-medium'>Back to all vans</p>
      </Link>

      <div className='bg-white p-6 rounded-md'>
        <div className=''>

        </div>

      </div>
      
    </div>
  )
}

export default VansHostDetail