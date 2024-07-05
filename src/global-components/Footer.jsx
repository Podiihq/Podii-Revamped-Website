import React from 'react';
import Logo from "../assets/images/updated/footer_logo.svg"
import image1 from "../assets/images/footer/Screenshot 2024-07-03 at 17.55.09.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#0F241B]">
                <div className="px-4 pt-16 container mx-auto lg:px-8 md:px-24">
                    <div className="mb-8">
                        <div className="grid grid-cols-2 gap-10 row-gap-10 md:grid-cols-4">
                            <div className="hidden lg:block">
                                <div className="flex items-center pb-4">
                                    <img src={Logo} alt="" className="w-2/3" />
                                </div>
                            </div>
                            <div>
                                <p className="tracking-wide font-semibold uppercase" style={{ color: '#FFF5F0' }}>Explore</p>
                                <ul className="mt-4 space-y-2" style={{ color: '#FFF5F0' }}>
                                    <li>
                                        <a href="./index.html" className="mont-regular transition-colors duration-200 hover:text-orange-500">Home</a>
                                    </li>
                                    <li>
                                        <a href="./services.html" className="mont-regular transition-colors duration-200 hover:text-orange-500">Services</a>
                                    </li>
                                    <li>
                                        <a href="./portfolio.html" className="mont-regular transition-colors duration-200 hover:text-orange-500">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="./contact-us.html" className="mont-regular transition-colors duration-200 hover:text-orange-500">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="tracking-wide uppercase font-semibold" style={{ color: '#FFF5F0' }}>Contact</p>
                                <ul className="mt-4 space-y-2" style={{ color: '#FFF5F0' }}>
                                    <li>
                                        <a href="#" className="mont-regular transition-colors duration-300 hover:text-deep-purple-accent-200">0733 000003</a>
                                    </li>
                                    <li>
                                        <a href="mailto:podii@podiihq.com">
                                            <img src={image1} alt="" className="w-44" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="mont-regular transition-colors duration-300 hover:text-deep-purple-accent-200">Lutheran Kisumu, Kenya</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="tracking-wide uppercase mb-4 font-semibold" style={{ color: '#FFF5F0' }}>Find us on socials</p>
                                <div className="flex items-center mt-4 space-x-4 sm:mt-0" style={{ color: '#FFF5F0' }}>
                                    <a href="https://twitter.com/podiihq" className="transition-colors duration-200 hover:text-orange-500">
                                        <FaSquareXTwitter className='text-3xl' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/podiihq/" className="transition-colors duration-200 hover:text-orange-500">
                                        <FaLinkedin className='text-3xl' />
                                    </a>
                                </div>
                                <div className="mt-4 text-[#FFF5F0]">
                                    <a href="./privacy-policy.html" className="underline transition-colors duration-200 hover:text-orange-500">Privacy Policy</a>
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <div className="flex items-center pb-4">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 border-t border-gray-800"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
