import React from 'react'
import RestaurantFood from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {

  return (
    <div className='mx-auto max-w-7xl max-h-[400px] p-4 sm:p-6 lg:p-8 md:flex justify-between'>
      <div className='flex flex-col justify-between'>
        <div className='my-4 '>
          <h1 className='text-[#F4CE14] text-5xl lg:text-7xl my-5'>Little Lemon</h1>
          <h4 className='text-3xl lg:text-5xl text-white my-5'>Chicago</h4>
          <p className='my-2 text-white max-w-md my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <Link to={"/reservations"} className="bg-[#F4CE14] hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">Reserve a table</Link>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className=''>
          <img src={RestaurantFood} alt='Little lemon restaurant food' className=' max-w-[375] max-h-[420px] rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Hero