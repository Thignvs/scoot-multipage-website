import React from 'react'
import Apply from '../buttons/Apply'

const Jobs = () => {
    return (
        <div className='flex flex-col px-5 gap-5 py-20 mb-20 md:px-20 xl:px-32'>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>General Manager</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>Jakarta, Indonesia</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>UI/UX Designer</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>Yokohama, Japan</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>Blog Content Copywriter</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>New York, United States</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>Graphic Designer</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>New York, United States</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>Fleet Supervisor</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>Jakarta, Indonesia</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-between bg-Snow px-5 py-10 md:flex-row lg:px-20'>
                <div className='flex flex-col items-center'>
                    <p className='font-headings text-DarkNavy text-lg  font-bold'>UX Analyst</p>
                    <p className='text-DarkNavy pb-7 pt-2 md:pb-0'>London, United Kingdom</p>
                </div>
                <div>
                    <Apply />
                </div>
            </div>
        </div>
    )
}

export default Jobs