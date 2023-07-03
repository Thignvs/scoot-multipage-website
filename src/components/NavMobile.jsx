import React, { useState, useEffect } from 'react';
import GetScootin from './buttons/GetScootin';
import { Link } from 'react-router-dom';

const NavMobile = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isMenuIconActive, setMenuIconActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleMenuToggle = () => {
        setMenuVisible(!isMenuVisible);
        setMenuIconActive(isMenuIconActive);
        if (!isMenuVisible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

    };

    const handleMenuItemClick = (option) => {
        setMenuVisible(false);                                         //Auto Close Menu when an option is clicked
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuVisible(false);
                if (isMenuVisible) {
                    document.body.classList.remove('overflow-hidden');
                }
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        };

        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                setMenuVisible(false);
                document.body.classList.remove('overflow-hidden');
            }
        };

        const handleScroll = () => {
            if (isMenuVisible) {
                document.body.classList.add('overflow-hidden');
            }
            else {
                document.body.classList.remove('overflow-hidden')
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuVisible]);

    return (
        <div className='z-10'>
            <div className='absolute top-11 left-7 cursor-pointer md:hidden' onClick={handleMenuToggle}>
                <span className={`w-7 h-1 bg-Yellow block ${isMenuIconActive || !isMenuVisible ? '' : 'transition duration-300 rotate-45 translate-y-2'}`} />
                <span className={`w-7 h-1 my-1 bg-Yellow block ${isMenuIconActive || !isMenuVisible ? '' : 'transition duration-300 opacity-0'}`} />
                <span className={`w-7 h-1 bg-Yellow block ${isMenuIconActive || !isMenuVisible ? '' : 'transition duration-300 -rotate-45 -translate-y-2'}`} />
            </div>
            <div className={`flex flex-col justify-between bg-DarkNavy/75 w-full font-headings absolute top-24 py-5 mt-1 h-[calc(100vh-100px)] md:hidden transition-all duration-100 ${isMenuVisible ? 'left-0' : '-left-full'}`}>
                <div className={`flex flex-col justify-between bg-DarkNavy w-3/4 font-headings absolute top-0 py-5 h-[calc(100vh-100px)] md:hidden transition-all duration-500 ${isMenuVisible ? 'left-0' : '-left-full'}`}>
                    <div className={`${isMenuVisible ? '' : '-left-full'}`}>
                        <ul className='flex flex-col gap-2 pl-5'>
                            <Link to="/" onClick={() => handleMenuItemClick("about")}><li className='p-3 text-LightGrey text-xl cursor-pointer mt-10 hover:text-Yellow'>Home</li></Link>
                            <Link to="/about" onClick={() => handleMenuItemClick("about")}><li className='p-3 text-LightGrey text-xl cursor-pointer hover:text-Yellow'>About</li></Link>
                            <Link to="/locations" onClick={() => handleMenuItemClick("locations")}><li className='p-3 text-LightGrey text-xl cursor-pointer hover:text-Yellow'>Locations</li></Link>
                            <Link to="/careers" onClick={() => handleMenuItemClick("careers")}><li className='p-3 text-LightGrey text-xl cursor-pointer hover:text-Yellow'>Careers</li></Link>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <GetScootin />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavMobile;
