import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const VansHost = () => {
  const [vansHostList, setVansHostList] = useState([])

  async function getVansHost() {
    const data = await fetch("/api/host/vans")
    const dataObj = await data.json()
    setVansHostList(dataObj.vans);
  }

  useEffect(() => {
    getVansHost()
  }, []);

  const vansHostListElement = vansHostList.map( (vansHost) => (
    <Link 
      to={vansHost.id} // Because vanHost.id is already a string from the API
      key={vansHost.id} 
      className='bg-white | h-24 p-6 | flex items-center gap-4 | rounded-md'>
      
      <img className='w-16 h-16 rounded-md' src={vansHost.imageUrl} alt="Van Host Image" />
      <div className='flex flex-col justify-center items-start'>
        <h2 className='text-black text-xl font-semibold'>{vansHost.name}</h2>
        <p className='text-grey text-base font-medium'>${vansHost.price}/day</p>
      </div>
    </Link>
  ))

  return (
    <div className='bg-bg-orange | w-full | flex flex-col gap-8 | py-12 px-7'>
      <h1 className='text-black text-3xl font-bold'>Your listed vans</h1>
      <div className='flex flex-col gap-4'>
        { 
          vansHostList.length > 0?
          vansHostListElement:
          <h2 className='text-center text-2xl p-20'>Loading...</h2> 
        }
        
      </div>
    </div>
  )
}

export default VansHost