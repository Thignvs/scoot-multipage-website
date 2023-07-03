import React from 'react'
import GetScootin from '../buttons/GetScootin'
import rightArrow from '../../assets/patterns/right-arrow.svg'
import circles from '../../assets/patterns/white-circles.svg'
import line from '../../assets/patterns/line.svg'


const HeroHome = () => {
    return (
        <div className="bg-hero-bg bg-cover bg-no-repeat py-20 flex flex-col relative z-0 pb-[90px] md:py-[120px] md:bg-hero-bg-tablet lg:bg-hero-bg-desktop overflow-hidden">
            <h1 className='font-headings text-[40px] text-Snow px-6 text-center md:text-[56px] md:px-10 md:leading-[56px] lg:text-start lg:px-20 lg:ml-20 lg:w-3/5 xl:w-2/5'>Scooter sharing made simple</h1>
            <h2 className='text-center text-Snow px-7 my-5 text-[15px] leading-7 md:px-20 lg:text-start lg:ml-48 lg:mt-20 lg:w-3/5 xl:w-[30%]'>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                locations in each of our cities. Use our app to locate the nearest bike, unlock
                it with a tap, and you’re away!
            </h2>
            <div className='mx-auto mt-5 mb-20 lg:mx-64 xl:mx-[270px]'>
                <GetScootin />
            </div>
            <img className='absolute -left-[280px] bottom-0 mb-5 md:-left-[150px] lg:top-80 lg:left-[900px] xl:left-[40%]' src={rightArrow} alt="rightarrowpattern " />
            <img className='hidden md:block md:absolute md:-right-10 md:bottom-10 xl:top-96' src={circles} alt="circlespatternsvg" />
            <img className='hidden lg:block lg:absolute lg:top-80 xl:top-80' src={line} alt="linesvg" />
        </div>
    )
}

export default HeroHome