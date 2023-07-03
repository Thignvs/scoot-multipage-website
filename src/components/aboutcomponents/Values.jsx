import React from 'react'
import ourTech from '../../assets/images/our-tech.jpg'
import ourIntegrity from '../../assets/images/our-integrity.jpg'
import ourCommunity from '../../assets/images/our-community.jpg'

const Values = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-DarkNavy font-headings text-4xl md:text-5xl'>Our values</p>
            <div className='flex flex-col lg:flex-row lg:justify-around'>
                <div className='px-5 text-center flex flex-col items-center'>
                    <div className='relative'>
                        <img className='my-20 rounded-full' src={ourTech} alt="techimage" />
                        <p className='absolute font-headings bottom-10 left-[75px] text-2xl text-DarkNavy bg-Yellow p-8 rounded-full'>01</p>
                    </div>
                    <p className='text-DarkNavy font-headings text-2xl mb-5'>Our tech</p>
                    <p className='text-DimGrey px-5 lg:w-2/3'>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>
                <div className='px-5 text-center flex flex-col items-center'>
                    <div className='relative'>
                        <img className='my-20 rounded-full' src={ourIntegrity} alt="integrityimage" />
                        <p className='absolute font-headings bottom-10 left-[75px] text-2xl text-DarkNavy bg-Yellow p-8 rounded-full'>02</p>
                    </div>
                    <p className='text-DarkNavy font-headings text-2xl mb-5'>Our Integrity</p>
                    <p className='text-DimGrey px-5 lg:w-2/3'>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>
                <div className='px-5 text-center flex flex-col items-center'>
                    <div className='relative'>
                        <img className='my-20 rounded-full' src={ourCommunity} alt="communityimage" />
                        <p className='absolute font-headings bottom-10 left-[75px] text-2xl text-DarkNavy bg-Yellow p-8 rounded-full'>03</p>
                    </div>
                    <p className='text-DarkNavy font-headings text-2xl mb-5'>Our community</p>
                    <p className='text-DimGrey px-5 lg:w-2/3'>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
            </div>
        </div>
    )
}

export default Values