import React from 'react'
import whitecircles from '../../assets/patterns/white-circles.svg'

const LocationsHeader = () => {
    return (
        <div className='py-20 relative bg-hero-careers-bg md:justify-start flex items-center justify-center bg-no-repeat bg-cover bg-center md:bg-hero-careers-bg-tablet lg:bg-hero-careers-bg-desktop overflow-hidden'>
            <h5 className='font-headings text-Snow text-4xl font-bold md:px-20'>Locations</h5>
            <img className='hidden md:block absolute -right-10' src={whitecircles} alt="whitecircleimage" />
        </div>
    )
}

export default LocationsHeader