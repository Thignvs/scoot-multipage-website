import React from 'react'
import whitecircles from '../../assets/patterns/white-circles.svg'

const AboutHeader = () => {
    return (
        <div className='py-20 relative bg-hero-bg flex justify-center md:justify-start items-center bg-no-repeat bg-cover bg-center md:bg-[url("./src/assets/images/about-hero-tablet.jpg")] lg:bg-[url("./src/assets/images/about-hero-desktop.jpg")] overflow-hidden'>
            <h5 className='font-headings text-Snow text-4xl font-bold md:px-20'>About</h5>
            <img className='hidden md:block absolute -right-10' src={whitecircles} alt="whitecircleimage" />
        </div>
    )
}

export default AboutHeader