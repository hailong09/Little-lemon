import React from 'react'
import Hero from "../components/Hero"
import Specials from '../components/Specials'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <main>
                <div className='bg-[#495E57] '>
                    <Hero />
                </div>
                <div>
                    <Specials />
                </div>
            </main>
            <footer className='bg-[#F4CE14]'>
                <Footer />
            </footer>
        </>
    )
}

export default Home