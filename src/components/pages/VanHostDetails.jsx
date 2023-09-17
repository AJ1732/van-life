import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanHostDetails = () => {
  const { name, type, description } = useOutletContext()
  
  return (
    <div className='text-black font-sm font-bold | flex flex-col gap-4'>
      <p>
        Name: <span className='font-medium'> {name}</span>
      </p>
      <p>
        Category: <span className='font-medium capitalize'> {type}</span>
      </p>
      <p>
        Description: <span className='font-medium'>{description}</span>
      </p>
      <p>
        Visibilty: <span className='font-medium'> Public</span>
      </p>
    </div>
  )
}

export default VanHostDetails