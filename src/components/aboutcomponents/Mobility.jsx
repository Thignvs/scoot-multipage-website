import React from 'react'
import digitalEra from '../../assets/images/digital-era.jpg'
import betterLiving from '../../assets/images/better-living.jpg'
import donwnWardArrow from '../../assets/patterns/left-downward-arrow.svg'
import upWardArrow from '../../assets/patterns/left-upward-arrow.svg'
import arrowRight from '../../assets/patterns/right-arrow.svg'
import circle from '../../assets/patterns/circle.svg'

const Mobility = () => {
    return (
        <div className='py-20 flex flex-col justify-center overflow-hidden'>
            <div className='flex flex-col relative lg:flex-row-reverse lg:justify-around lg:px-20'>
                <div className='px-5'>
                    <img className='rounded-full md:mx-auto' src={digitalEra} alt="digitaleraimg" />
                    <img className='absolute top-36 -right-5 scale-x-[-1] scale-y-[-1] md:hidden' src={arrowRight} alt="arrowrightsvg" />
                    <img className='hidden md:block md:absolute md:top-64 right-0 z-10' src={upWardArrow} alt='upwardarrowsvg' />
                    <img className='hidden md:block absolute -right-80 top-0 lg:-right-96' src={circle} alt="circlepattern" />
                </div>
                <div className='px-5 md:px-20 lg:w-1/2'>
                    <p className='text-DarkNavy font-headings text-3xl text-center mt-10 mb-5 md:text-5xl lg:text-start'>Mobility for the digital era</p>
                    <p className='text-DimGrey text-center leading-7 lg:text-start lg:w-3/4'>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p></div>
            </div>
            <div className='flex flex-col mt-20 relative lg:flex-row lg:justify-around lg:px-20'>
                <div className='px-5'>
                    <img className='rounded-full md:mx-auto' src={betterLiving} alt="betterlivingimg" />
                    <img className='absolute top-0 -left-14 md:hidden' src={arrowRight} alt="arrowrightsvg" />
                    <img className='hidden md:block md:absolute md:top-0 md:scale-x-[-1] md:-left-36' src={donwnWardArrow} alt='upwardarrowsvg' />
                    <img className='hidden md:block absolute -left-80 lg:-left-96 top-0' src={circle} alt="circlepattern" />
                </div>
                <div className='px-5 md:px-20 lg:w-1/2'>
                    <p className='text-DarkNavy font-headings text-3xl px-3 text-center mt-10 mb-5 md:text-5xl lg:text-start'>Better urban living</p>
                    <p className='text-DimGrey text-center leading-7 lg:text-start lg:w-3/4'>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p></div>
            </div>
        </div>
    )
}

export default Mobility