import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <img 
        className='w-full h-64 | object-cover' 
        src={`https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1695600000&Signature=hkuZwgTNyHVwPbJAbTgcXWgJadSXpp5kIPm9T-DRxLjpu1ORxsvMkk6aYfEr0r4FtT0cBQrg7qZh2PnjdrfhFQf8hzVFTpxo5hcE~rC7IY-BMNKgcyodHyDQBJ0mKZqWiiDjw5XoVpbFxDvojupWeZWupcm3neYjxhgKoahbOhwtLSOKzQ4zKXMAho62VxbMWS9feRO9mkrALA3pY7483y3Mn0BkmzH0tJXoMsgg~iBBcoUng18VXq-RwMvZYy78UYwksUnc7luCwidb9QEXU~21oG5wAa~2fYuXihsKv91NrWjh95DqfgGdfJ1mRc73wiobUUNDlj9ulU93Trbrjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`} 
        alt="Homepage image" />

      <section className='text-black | py-12 px-7 | flex flex-col gap-8'>
        <h2 className='text-3xl font-black'>Don’t squeeze in a sedan when you could relax in a van.</h2>

        <p className='font-medium'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>

        <p className='font-medium'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className='bg-ac-orange | flex flex-col gap-4 | max-w-104 h-48 rounded-sl | py-8 px-9'>
          <h2 className='text-2xl font-black | w-80'>Your destination is waiting. Your van is ready.</h2>

          <Link to={"/vans"} className='text-white text-center font-black | w-44 py-3 px-5 rounded-lg | bg-black'>Explore our vans</Link>
        </div>
      </section>
    </div>
  )
}

export default About