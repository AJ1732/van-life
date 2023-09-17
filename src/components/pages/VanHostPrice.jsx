import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanHostPrice = () => {
  const { price } = useOutletContext()

  return (
    <div>
      <h2 className='text-grey text-base font-medium'>
        <span className='text-black text-2xl'>${price}.00</span>/day
      </h2>
    </div>
  )
}

export default VanHostPrice