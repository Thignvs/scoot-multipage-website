import React from 'react'
import NavMobile from './NavMobile'
import logo from '../assets/logo.svg'
import GetScootin from './buttons/GetScootin'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-center items-center lg:px-20'>
                <NavMobile />
                <div className='md:mr-auto flex'>
                    <Link to="/"><img className='mx-auto my-9 md:ml-10' src={logo} alt="logo" /></Link>
                    <ul className='hidden md:flex md:justify-center md:items-center md:ml-5'>
                    {/* <Link to="/"><li className='p-3 text-DimGrey font-headings text-xl cursor-pointer hover:text-Yellow'>Home</li></Link> */}
                    <Link to="/about"><li className='p-3 text-DimGrey font-headings text-xl cursor-pointer hover:text-Yellow'>About</li></Link>
                    <Link to="/locations"><li className='p-3 text-DimGrey font-headings text-xl cursor-pointer hover:text-Yellow'>Locations</li></Link>
                    <Link to="/careers"><li className='p-3 text-DimGrey font-headings text-xl cursor-pointer hover:text-Yellow'>Careers</li></Link>
                    </ul>
                </div>
                <div className='hidden md:block md:ml-auto md:mr-10'>
                    <GetScootin />
                </div>
        </div>
    )
}

export default NavBar