import React from 'react'
import mapmobile from '../../assets/images/world-map-mobile.png'
import maptablet from '../../assets/images/world-map-tablet.png'
import mapdesktop from '../../assets/images/world-map-desktop.png'
import MessageUs from '../buttons/MessageUs'

const CityList = () => {
    return (
        <div className='flex flex-col md:items-center md:justify-center py-20 gap-5'>
            <img className='px-5 md:hidden lg:hidden' src={mapmobile} alt="mapimagemobile" />
            <div className='flex flex-col relative items-center'>
                <img className='px-5 hidden  md:block lg:hidden ' src={maptablet} alt="mapimagetablet" />
                <img className='px-5 hidden md:hidden lg:block' src={mapdesktop} alt="mapimagedesktop" />
                <div className='hidden md:block w-0 h-0 border-t-[20px] border-t-Yellow border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-transparent absolute md:left-[21%] md:top-[24%] lg:left-[20%] lg:top-[28%]'></div>
                <div className='hidden md:block w-0 h-0 border-t-[20px] border-t-Yellow border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-transparent absolute md:left-[43%] md:top-[15%] lg:left-[42%] lg:top-[15%]'></div>
                <div className='hidden md:block w-0 h-0 border-t-[20px] border-t-Yellow border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-transparent absolute md:left-[80%] md:top-[26%] lg:left-[83%] lg:top-[27%]'></div>
                <div className='hidden md:block w-0 h-0 border-t-[20px] border-t-Yellow border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-transparent absolute md:left-[75%] md:top-[56%] lg:left-[77%] lg:top-[59%]'></div>
                <p className='hidden md:block absolute md:bg-Yellow md:px-9 md:py-3  md:top-[10%] md:left-[13%] md:text-DarkNavy md:font-headings lg:top-[20%] lg:left-[15%]'>New York</p>
                <p className='hidden md:block absolute md:bg-Yellow md:px-9 md:py-3  md: md:top-[1%] md:left-[36%] md:text-DarkNavy md:font-headings lg:top-[7%] lg:left-[38%]'>London</p>
                <p className='hidden md:block absolute md:bg-Yellow md:px-9 md:py-3  md:top-[13%] md:right-[7%] md:text-DarkNavy md:font-headings lg:top-[19%] lg:right-[9%]'>Yokohama</p>
                <p className='hidden md:block absolute md:bg-Yellow md:px-9 md:py-3  md:bottom-[43%] md:right-[13%] md:text-DarkNavy md:font-headings lg:right-[15%] lg:bottom-[40%]'>Jakarta</p>
            </div>
            <div className='flex flex-col items-center px-5 mt-10 cursor-pointer md:hidden'>
                <p className='text-DarkNavy bg-LightYellow py-5 w-full text-center font-headings font-bold text-2xl'>New York</p>
            </div>
            <div className='flex flex-col items-center px-5  cursor-pointer md:hidden'>
                <p className='text-DarkNavy bg-LightYellow py-5 w-full text-center font-headings font-bold text-2xl'>London</p>
            </div>
            <div className='flex flex-col items-center px-5 cursor-pointer md:hidden'>
                <p className='text-DarkNavy bg-LightYellow py-5 w-full text-center font-headings font-bold text-2xl'>Jakarta</p>
            </div>
            <div className='flex flex-col items-center px-5 cursor-pointer md:hidden'>
                <p className='text-DarkNavy bg-LightYellow py-5 w-full text-center font-headings font-bold text-2xl'>Yokohama</p>
            </div>
            <div className='flex flex-col px-5 my-10 text-center items-center'>
                <p className='text-DarkNavy font-headings text-3xl md:text-5xl md:w-3/4'>Your City Not Listed?</p>
                <p className='leading-7 text-DimGrey my-10 text-[15px] md:w-3/4'>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <MessageUs />
            </div>
        </div>
    )
}

export default CityList