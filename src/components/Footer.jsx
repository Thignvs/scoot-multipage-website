import React from 'react'
import logo from '../assets/logo.svg'
import facebookbadge from '../assets/icons/facebook.svg'
import instagrambadge from '../assets/icons/instagram.svg'
import twitterbadge from '../assets/icons/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='py-20 flex flex-col justify-center items-center bg-[#333A44] md:flex-row md:justify-normal md:px-10 md:py-5 lg:px-20'>
        <Link to="/"><img className='brightness-[300] ' src={logo} alt="logo" /></Link>
        <div>
            <ul className='flex flex-col gap-3 font-headings mt-10 my-10 md:flex-row md:ml-10'>
            <Link to="/about"><li className='text-DimGrey text-[15px] p-2 cursor-pointer text-center hover:text-Yellow'>About</li></Link>
            <Link to="/locations"><li className='text-DimGrey text-[15px] p-2 cursor-pointer text-center hover:text-Yellow'>Locations</li></Link>
            <Link to="/careers"><li className='text-DimGrey text-[15px] p-2 cursor-pointer text-center hover:text-Yellow'>Careers</li></Link>
            </ul>
        </div>
        <div className='flex gap-5 md:ml-auto'>
            <img className='cursor-pointer hover:brightness-[300]' src={facebookbadge} alt="facebookbadge" />
            <img className='cursor-pointer hover:brightness-[300]' src={twitterbadge} alt="facebookbadge" />
            <img className='cursor-pointer hover:brightness-[300]' src={instagrambadge} alt="facebookbadge" />
        </div>
        </div>
    )
}

export default Footer