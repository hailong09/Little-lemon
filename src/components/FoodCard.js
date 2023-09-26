import React from 'react'
import { TruckIcon } from '@heroicons/react/24/outline'

const FoodCard = ({ special }) => {
    const { src, title, price, description } = special


    return (
        <div className="max-w-2xl lg:max-w-sm rounded-lg overflow-hidden shadow-lg my-14">
            <img className="w-full max-h-56" src={src} alt={title} />
            <div className="px-6 py-4">
                <div className="flex justify-between flex-wrap">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <div className="text-[#EE9972]">$ {price}</div>
                </div>
                <p className="text-gray-700 text-base min-h-[150px]">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                <button className='font-bold flex justify-between'>
                    <p className='pr-2'>Order a delivery</p>
                    <TruckIcon className="block h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

export default FoodCard