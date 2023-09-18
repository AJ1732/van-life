import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Vans = () => {
  // To get Van List
  const [vansList, setVansList] = useState([])

  async function getVans() {
    const data = await fetch("/api/vans")
    const dataObj = await data.json()
    setVansList(dataObj.vans);
  }

  useEffect(() => {
    getVans()
  }, []);

  // console.log(vansList);

  // To Search
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type"); // This returns the query's value
  // console.log(searchParams);
  // Check URLSearchParams on other methods for searchParams

  const searchParamString = (key, value) => {
    setSearchParams( prevParams => {
      if (value == null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
      // value == null? prevParams.delete(key): prevParams.set(key, value);
    })
  }
  
  // console.log(searchParamString("type", "value"));

  // To select the Respective color class, bg-${van.type} wasn't working
  const bgType = (type) =>{
    switch(type) {
      case "simple":
        return "bg-simple";
        break;
      case "luxury":
        return "bg-luxury";
        break;
      case "rugged":
        return "bg-rugged";
        break;
    }
  }
  // console.log(bgType("rugged"));

  // Filtering Vans List
  const vanListElementFilter = 
    typeFilter? 
    vansList.filter(vans => vans.type === typeFilter): 
    vansList;

  // Vans List Result
  const vanListElement = vanListElementFilter.map( (van) => (
    <Link 
      to={van.id} // Because van.id is already a string from the API
      state={{ 
        search: `?${searchParams.toString()}`,
        type: typeFilter }}
      key={van.id} 
      className='flex flex-col m-auto '>

      <img className='w-56 h-56 rounded-md | object-cover' src={van.imageUrl} alt="van image" />

      <div className='max-w-s mt-4 | flex flex-row justify-between items-start gap-2'>
        <h3 className='text-black text-lg font-semibold'>{van.name}</h3>
        <h3 className='text-right | flex flex-col gap-0'>
          <span className='text-black text-lg font-semibold'>${van.price}</span>
          <span className='text-sm'>/day</span>
        </h3>
      </div>

      <button className={`text-white text-center capitalize font-semibold | ${bgType(van.type)} | w-24 h-10 rounded-md | py-2 px-5`}>{van.type}</button>
    </Link>
  ))

  return (
    <div className='bg-bg-orange | w-full | flex flex-col | py-12 px-7'>
      <h2 className='text-black text-2xl text-center sm:text-3xl sm:text-left font-bold'>Explore our van options</h2>

      <div className="text-grey | flex flex-wrap gap-5 justify-center sm:justify-between items-center | pt-6 transition-all">
        {/* TO FILTER THE VANS */}
        <div className='flex flex-wrap gap-3 sm:gap-5 justify-center items-center'>
          {/* <Link to={`?type=simple`} className='bg-txt-orange py-2 px-6 rounded-md'>Simple</Link>
          <Link to={`?type=luxury`} className='bg-txt-orange py-2 px-6 rounded-md'>Luxury</Link>
          <Link to={`?type=rugged`} className='bg-txt-orange py-2 px-6 rounded-md'>Rugged</Link> */}

          {/* OR we make use of the setSearchParams function using a string or object */}
          {/* <button onClick={() => setSearchParams("?type=simple")} className='bg-txt-orange py-2 px-6 rounded-md'>Simple</button>
          <button onClick={() => setSearchParams("?type=luxury")} className='bg-txt-orange py-2 px-6 rounded-md'>Luxury</button>
          <button onClick={() => setSearchParams("?type=rugged")} className='bg-txt-orange py-2 px-6 rounded-md'>Rugged</button> */}

          {/* <button onClick={() => setSearchParams({type: "simple"})} className='bg-txt-orange py-2 px-6 rounded-md'>Simple</button>
          <button onClick={() => setSearchParams({type: "luxury"})} className='bg-txt-orange py-2 px-6 rounded-md'>Luxury</button>
          <button onClick={() => setSearchParams({type: "rugged"})} className='bg-txt-orange py-2 px-6 rounded-md'>Rugged</button> */}

          {/* OR passing a custom function */}
          <button 
            onClick={() => setSearchParams({type: "simple"})} 
            className={
              `py-2 px-6 rounded-md | 
              ${typeFilter == "simple"? 
              "bg-simple text-white": 
              "bg-txt-orange hover:bg-simple hover:text-white"}`}>Simple</button>

          <button 
            onClick={() => setSearchParams({type: "luxury"})} 
            className={
            `py-2 px-6 rounded-md | 
            ${typeFilter == "luxury"? 
            "bg-luxury text-white": 
            "bg-txt-orange hover:bg-luxury hover:text-white"}`}>Luxury</button>

          <button 
            onClick={() => setSearchParams({type: "rugged"})} 
            className={
            `py-2 px-6 rounded-md | 
            ${typeFilter == "rugged"? 
            "bg-rugged text-white": 
            "bg-txt-orange hover:bg-rugged hover:text-white"}`}>Rugged</button>
        </div>

        {/* TO CLEAR FILTERS */}
        {/* By using "." or "" this takes us back to the current page */}
        {/* <Link to={`.`} className='text-base underline'>Clear filters</Link> */}
        {
          typeFilter? 
          <button onClick={() => setSearchParams({type: ''})} className='text-base underline'>Clear filters</button>:
          null
        }
      </div>

      <div className='mt-14 | grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {
          vansList.length > 0? 
          vanListElement: 
          <h2 className='text-center text-2xl p-20'>Loading...</h2>
        }
      </div>
      
    </div>
  )
}

export default Vans