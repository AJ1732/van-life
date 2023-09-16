import React from 'react'
import reviewStar from '../files/review_star.svg'

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-bg-orange py-9 px-7 | flex flex-col gap-8'>
        <h1 className='text-black text-4xl font-bold'>Welcome!</h1>
        <div className="flex justify-between ">
          <p className='text-grey font-base font-medium'>Income last <span className='font-bold'>30 days</span></p>
          <p className='text=base font-medium'>Details</p>
        </div>
        <p className='text-black text-5xl font-extrabold'>$2,260</p>
      </div>

      <div className='bg-ac-orange | py-11 px-7 | flex justify-between items-center'>
        <div className='flex gap-3 '>
          <h1 className='text-2xl font-bold '>Review Score</h1>
          <span className='flex justify-center items-center gap-2'>
            <img src={reviewStar} alt="review star" />
            <p className='text-grey'><span className='text-black font-bold'>5.0</span>/5</p>
          </span>
        </div>
        <p className='text=base font-medium'>Details</p>
      </div>
    </div>
  )
}

export default Dashboard