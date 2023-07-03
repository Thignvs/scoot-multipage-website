import React from 'react'
import whitecircles from '../../assets/patterns/white-circles.svg'

const CareersHeader = () => {
    return (
        <div className='py-20 relative bg-[url("./src/assets/images/careers-location-hero-mobile.jpg")] md:justify-start flex items-center justify-center bg-no-repeat bg-cover bg-center md:bg-[url("./src/assets/images/careers-locations-hero-tablet.jpg")] lg:bg-[url("./src/assets/images/careers-locations-hero-desktop.jpg")] overflow-hidden'>
            <h5 className='font-headings text-Snow text-4xl font-bold md:px-20'>Careers</h5>
            <img className='hidden md:block absolute -right-10' src={whitecircles} alt="whitecircleimage" />
        </div>
    )
}

export default CareersHeader