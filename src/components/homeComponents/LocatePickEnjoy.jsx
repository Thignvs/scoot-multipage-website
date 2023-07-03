import React from 'react'
import locatesvg from '../../assets/icons/locate.svg'
import scootersvg from '../../assets/icons/scooter.svg'
import ridesvg from '../../assets/icons/ride.svg'

const LocatePickEnjoy = () => {
    return (
        <div className='py-20 flex flex-col items-center gap-5 md:gap-20 md:relative lg:flex-row lg:gap-5 lg:py-64 lg:px-20'>
            <hr className='hidden border-0 md:block absolute bg-Snow w-3 h-[550px] -top-1 -z-10 left-[123px] lg:h-3 lg:w-3/4 xl:w-[70%] lg:left-0 lg:top-72'></hr>
            <div className='px-10 flex flex-col items-center justify-center md:flex-row md:gap-5 md:justify-start md:items-start lg:flex-col lg:px-0'>
                <img className='my-5 md:ml-10 md:self-start md:my-0' src={locatesvg} alt="locateimagesvg" />
                <div className='flex flex-col items-center md:items-start md:pr-10 md:ml-5 lg:pr-0'>
                <p className='font-headings text-DarkNavy text-xl md:text-2xl'>Locate with app</p>
                <p className='text-DimGrey text-[15px] leading-7 mt-5 text-center md:text-start'>Use the app to find the nearest scooter to you. We are continuously placing scooters
                    in the areas with most demand, so one should never be too far away.</p></div>
            </div>
            <div className='px-10 flex flex-col items-center justify-center md:flex-row md:gap-5 md:justify-start md:items-start lg:flex-col lg:px-0'>
                <img className='my-5 md:ml-10 md:self-start md:my-0' src={scootersvg} alt="scooterimagesvg" />
                <div className='flex flex-col items-center md:items-start md:pr-10 md:ml-5 lg:pr-0'>
                <p className='font-headings text-DarkNavy text-xl md:text-2xl'>Pick your scooter</p>
                <p className='text-DimGrey text-[15px] leading-7 mt-5 text-center md:text-start'>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p></div>
            </div>
            <div className='px-10 flex flex-col items-center justify-center md:flex-row md:gap-5 md:justify-start md:items-start lg:flex-col lg:px-0'>
                <img className='my-5 md:ml-10 md:self-start md:my-0' src={ridesvg} alt="rideimagesvg" />
                <div className='flex flex-col items-center md:items-start md:pr-10 md:ml-5 lg:pr-0'>
                <p className='font-headings text-DarkNavy text-xl md:text-2xl'>Enjoy the ride</p>
                <p className='text-DimGrey text-[15px] leading-7 mt-5 text-center md:text-start'>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p></div>
            </div>
        </div>
    )
}

export default LocatePickEnjoy