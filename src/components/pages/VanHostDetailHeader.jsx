import React from 'react'
import { NavLink } from 'react-router-dom'

const VanHostDetailHeader = ({name, price, type, imageUrl}) => {
  return (
    <div>
      <div className='flex gap-5'>
        <img className='w-40 h-40 rounded-md' src={imageUrl} alt="VansImage" />
        <div className='flex flex-col justify-center items-start gap-2'>
          <button className={`text-white text-sm text-center capitalize font-semibold | bg-ft-black | w-20 h-10 rounded-md | py-2 px-3`}>{type}</button>
          <h2 className='text-black text-2xl font-bold'>{name}</h2>
          <p className='text-grey text-base font-medium'>
            <span className="text-black font-bold">${price}</span>/day
          </p>
        </div>
      </div>

      <div className='text-grey font-medium | flex gap-5 py-6 '>
        <NavLink
          to={`.`}
          end
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
            Details
        </NavLink>

        <NavLink
          to={`price`}
          className={
          ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
            Pricing
        </NavLink>

        <NavLink
          to={`photos`}
          className={
            ({isActive}) => isActive? "text-black font-bold": "hover:text-black"}>
            Photos
        </NavLink>
      </div>
    </div>
  )
}

export default VanHostDetailHeader