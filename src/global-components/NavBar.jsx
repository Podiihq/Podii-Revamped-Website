import React, { useState, useEffect } from 'react';

import Logo from "../assets/images/updated/logo.png"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full flex flex-wrap items-center justify-between ${scrollPos > 10 ? 'bg-white shadow' : ''}`}
            id="header"
        >
            <div className="container lg:px-4 lg:mx-auto flex flex-wrap items-center justify-between pt-4">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-2">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black" href="/">
                        <img src={Logo} alt="" className="w-24 lg:w-36" />
                    </a>
                    <button
                        className="z-10 cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <IoMenu />
                    </button>
                </div>
                <div
                    className={`lg:flex flex-1 lg:flex-none items-center bg-white lg:bg-transparent lg:shadow-none ${navbarOpen ? 'block' : 'hidden'} h-screen lg:h-0 bg-[#F4FBF8]`}
                    id="example-collapse-navbar"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="my-4">
                            <a className="lg:text-black lg:hover:text-gray-300 text-gray-800 px-8 py-4 lg:py-2 text-lg" href="#">
                                <span className="ml-2 text-[#FF5E0E] mont-regular">Home</span>
                            </a>
                            <div className="h-2 rounded w-7 flex flex-grow items-center justify-start ml-10 bg-[#FF5E0E]"></div>
                        </li>
                        <li className="my-4">
                            <a className="lg:text-black lg:hover:text-gray-300 text-gray-800 px-8 py-4 lg:py-2 text-lg" href="./services.html">
                                <span className="inline-block ml-2 mont-regular">Services</span>
                            </a>
                        </li>
                        <li className="my-4">
                            <a className="lg:text-black lg:hover:text-gray-300 text-gray-800 px-8 py-4 lg:py-2 text-lg" href="./portfolio.html">
                                <span className="inline-block ml-2 mont-regular">Portfolio</span>
                            </a>
                        </li>
                        <li className="my-4 lg:hidden">
                            <a className="lg:text-black lg:hover:text-gray-300 text-gray-800 px-8 py-4 lg:py-2 text-lg" href="./contact-us.html">
                                <span className="inline-block ml-2 mont-regular">Contact us</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block" style={{ fontFamily: 'Montserrat' }}>
                    <a href="./contact-us.html" className="py-4 px-8 border-2 border-[#FF5E0E] hover:bg-orange-600 text-[#FF5E0E] hover:text-white rounded-full text-lg font-bold uppercase">
                        Get in Touch
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
