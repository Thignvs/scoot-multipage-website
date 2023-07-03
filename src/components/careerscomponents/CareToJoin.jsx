import React from 'react'
import arrowRight from '../../assets/patterns/right-arrow.svg'
import joinUs from '../../assets/images/join-us.jpg'
import SayHello from '../buttons/SayHello'
import circle from '../../assets/patterns/circle.svg'
import upWardArrow from '../../assets/patterns/left-downward-arrow.svg'

const CareToJoin = () => {
    return (
        <div className='flex flex-col relative justify-center items-center my-20 lg:flex-row-reverse lg:justify-around overflow-hidden'>
            <div className='px-5 '>
                <img className='rounded-full' src={joinUs} alt="joinusimage" />
                <img className='absolute top-44 scale-x-[-1] md:hidden' src={arrowRight} alt="arrowrightsvg" />
                <img className='hidden md:block absolute top-64 right-0 z-10' src={upWardArrow} alt="upwardarrowsvg" />
                <img className='hidden md:block absolute top-0 -right-80 lg:-right-96' src={circle} alt="circleimage" />
            </div>
            <div className='px-5 flex flex-col my-20 lg:w-1/2'>
                <p className='text-DarkNavy text-3xl font-headings text-center md:px-20 lg:px-0 lg:text-start md:text-5xl'>Care to join our mission?</p>
                <p className='text-DimGrey text-center leading-7 my-10 md:px-14 lg:px-0 lg:text-start xl:w-2/4'>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                
                <div className='mx-auto lg:mx-0'>
                <SayHello /></div>
            </div>
        </div>
    )
}

export default CareToJoin