import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanHostPhotos = () => {
  const { imageUrl } = useOutletContext()

  return (
    <div>
      <img className='w-24 h-24 rounded-md' src={imageUrl} alt="van image" />
    </div>
  )
}

export default VanHostPhotos