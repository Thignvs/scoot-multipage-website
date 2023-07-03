import React from 'react'
import donwnWardArrow from '../../assets/patterns/left-downward-arrow.svg'
import leftArrow from '../../assets/patterns/right-arrow.svg'
import telemetry from '../../assets/images/telemetry.jpg'
import nearyou from '../../assets/images/near-you.jpg'
import payment from '../../assets/images/payments.jpg'
import LearnMore from '../buttons/LearnMore'
import circle from '../../assets/patterns/circle.svg'


const UsePayment = () => {
    return (
        <div className='flex flex-col justify-center overflow-hidden py-20'>
            <div className='px-10 mb-10 relative lg:flex flex-row-reverse md:justify-around'>
                <img className='rounded-full md:mx-auto lg:mx-0' src={telemetry} alt='telemetryimage' />
                <img className='absolute top-48 scale-x-[-1] md:hidden' src={leftArrow} alt="upwardarrowsvg" />
                <img className='hidden md:block absolute top-64 z-10 md:right-0' src={donwnWardArrow} alt='arrowimagesvg' />
                <img className='hidden md:block absolute top-0 -right-80 lg:-right-96' src={circle} alt="circlepattern" />
                <div className='flex flex-col lg:w-2/4 xl:w-2/4'>
                <p className='font-headings text-DarkNavy text-center text-3xl my-10 md:text-5xl lg:text-start'>Easy to use riding telemetry</p>
                <p className='text-DimGrey text-center leading-7 text-[15px] lg:text-start'>The Scoot app is available with riding telemetry. This means it can show you your
                    average speed, how long you've been using the scooter, your traveling distance,
                    and many more things all in an easy to use app.</p>
                <div className='flex justify-center my-10 lg:self-start'>
                    <LearnMore />
                </div>
                </div>
            </div>
            <div className='px-10 mb-10 relative lg:flex md:justify-around'>
                <img className='rounded-full md:mx-auto lg:mx-0' src={nearyou} alt='nearyouimage' />
                <img className='absolute top-0 -left-36 md:hidden' src={leftArrow} alt="upwardarrowsvg" />
                <img className='hidden md:block absolute top-0 -left-60 transform scale-x-[-1] z-10' src={donwnWardArrow} alt='arrowimagesvg ' />
                <img className='hidden md:block absolute top-0 -left-80 lg:-left-96' src={circle} alt="circlepattern" />
                <div className='flex flex-col lg:w-2/4'>
                <p className='font-headings text-DarkNavy text-center text-3xl my-10 md:text-5xl lg:text-start'>Coming to a city near you</p>
                <p className='text-DimGrey text-center leading-7 text-[15px] lg:text-start'>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure
                    to let us know if you want to see us in your hometown. We’re aiming to let our
                    scooters loose on 23 cities over the coming year.</p>
                <div className='flex justify-center my-10 lg:self-start'>
                    <LearnMore />
                </div>
                </div>
            </div>
            <div className='px-10 mb-10 relative lg:flex flex-row-reverse md:justify-around'>
                <img className='rounded-full md:mx-auto lg:mx-0' src={payment} alt='paymentimage' />
                <img className='absolute top-48 scale-x-[-1] md:hidden' src={leftArrow} alt="upwardarrowsvg" />
                <img className='hidden md:block absolute top-0 -right-80 transform  z-10' src={donwnWardArrow} alt='arrowimagesvg' />
                <img className='hidden md:block absolute top-0 -right-80 lg:-right-96' src={circle} alt="circlepattern" />
                <div className='flex flex-col lg:w-2/4 xl:w-2/4'>
                <p className='font-headings text-DarkNavy text-center text-3xl my-10 md:text-5xl lg:text-start'>Zero hassle payments</p>
                <p className='text-DimGrey text-center leading-7 text-[15px] lg:text-start'>Our payment is as easy as one two three. We accept most credit cards and debit cards.
                    You can also link your PayPal account inside the app. Need to pay later? No worries!
                    You can defer payment for up to a month.</p>
                <div className='flex justify-center my-10 lg:self-start'>
                    <LearnMore />
                </div>
                </div>
            </div>
        </div>
    )
}

export default UsePayment