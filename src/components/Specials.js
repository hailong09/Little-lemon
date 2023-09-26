import React from 'react'
import Button from './Button'
import FoodCard from './FoodCard'

const specials = [
    {
        src: "images/greek salad.jpg",
        title: "Greek salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
    },
    {
        src: "images/bruchetta.svg",
        title: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
    }, {
        src: "images/lemon dessert.jpg",
        title: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
]

const Specials = () => {
    return (
        <div className='mx-auto my-6 md:my-12 max-w-7xl lg:max-h-[720px] p-4 sm:p-6 lg:p-8'>
            <div className='flex justify-between flex-wrap'>
                <h1 className='text-3xl lg:text-5xl'>Specials</h1>
                <Button title={"Online Menu"} className={"bg-[#F4CE14] hover:bg-yellow-400 text-[#1E1E1E] font-bold py-2 px-4 rounded border border-[#1E1E1E]"} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 auto-cols-max place-items-center gap-3'>
                {specials.map(special => <FoodCard key={special.title} special={special} />)}

            </div>
        </div>
    )
}

export default Specials