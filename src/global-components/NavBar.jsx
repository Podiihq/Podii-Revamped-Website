import React, { useState, useEffect } from 'react';

import Logo from "../assets/images/updated/logo.png"
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const location = useLocation();

    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 z-50 w-full flex flex-wrap items-center justify-between ${scrollPos > 10 ? 'bg-white' : ''}`}
            id="header"
        >
            <div className="container lg:px-4 lg:mx-auto flex flex-wrap items-center justify-between pt-4">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-2">
                    <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                        <img src={Logo} alt="Logo" className="w-24 lg:w-36" />
                    </Link>
                    <button
                        className="z-10 flex items-center text-[#FF5E0E] gap-1 cursor-pointer text-3xl leading-none py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <IoMenu />
                        {/* <p className='text-xl uppercase'>Menu</p> */}
                    </button>
                </div>
                <div
                    className={`lg:flex flex-1 lg:flex-none items-center bg-[#fff] lg:bg-transparent lg:shadow-none ${navbarOpen ? 'block' : 'hidden'} h-screen lg:h-0 bg-[#F4FBF8]`}
                    id="example-collapse-navbar"
                >
                    <ul className="flex flex-col lg:flex-row list-none">
                        <li className="my-4">
                            <Link
                                to="/"
                                className={`lg:hover:text-[#FF5E0E] text-lg px-2 mx-4 py-4 lg:py-2 relative mont-regular ${isActive('/') ? 'text-[#FF5E0E] mont-medium' : 'text-[#303030] '}`}
                            >
                                <span className="uppercase ml-2 lg:ml-0">Home</span>
                                {isActive('/') && <div className="h-2 hidden lg:block bg-[#FF5E0E] absolute bottom-0 left-0 right-0 top-9 mx-4 rounded-lg"></div>}
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link
                                to="/services"
                                className={`uppercase lg:hover:text-[#FF5E0E] text-center text-lg px-2 mx-4 py-4 lg:py-2 relative mont-regular ${isActive('/services') ? 'text-[#FF5E0E] mont-medium' : 'text-[#303030]'}`}
                            >
                                <span className="inline-block ml-2 lg:ml-0">Services</span>
                                {isActive('/services') && <div className="h-2 hidden lg:block bg-[#FF5E0E] absolute bottom-0 left-0 right-0 top-9 mx-4 rounded-lg"></div>}
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link
                                to="/portfolio"
                                className={`uppercase lg:hover:text-[#FF5E0E] text-lg px-2 mx-4 py-4 lg:py-2 relative mont-regular ${isActive('/portfolio') ? 'text-[#FF5E0E] mont-medium' : 'text-[#303030]'}`}
                            >
                                <span className="inline-block ml-2 lg:ml-0">Portfolio</span>
                                {isActive('/portfolio') && <div className="h-1 hidden lg:block bg-[#FF5E0E] absolute bottom-0 left-0 right-0 top-9 mx-4 rounded-lg"></div>}
                            </Link>
                        </li>
                        <li className="my-4 lg:hidden">
                            <Link
                                to="/contact-us"
                                className={`lg:hover:text-[#FF5E0E] text-lg px-2 mx-4 py-4 lg:py-2 relative mont-regular ${isActive('/contact-us') ? 'text-[#FF5E0E] mont-medium' : 'text-[#303030]'}`}
                            >
                                <span className="inline-block ml-2 lg:ml-0 uppercase">Contact us</span>
                                {isActive('/contact-us') && <div className="h-1 hidden lg:block bg-[#FF5E0E] absolute bottom-0 left-0 top-9 right-0 mx-4"></div>}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <Link to="/contact-us" className="py-4 px-8 border-2 border-[#FF5E0E] hover:bg-orange-600 text-[#FF5E0E] hover:text-white rounded-full text-lg uppercase">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
