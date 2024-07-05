import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const DiscoverSection = () => {
    return (
        <section className="bg-[#F4FBF8] flex justify-center">
            <div className="flex flex-col items-center lg:max-w-6xl md:py-[100px] py-10">
                <h2
                    className="pt-8 mb-6 font-sans text-[30px] lg:text-[48px] font-medium leading-none tracking-wide px-4 lg:mx-12 text-center text-[#0F241B]"

                >
                    Discover the possibilities
                </h2>
                <div className="flex flex-col items-center md:flex-row lg:pt-8">
                    <Link
                        to="#"
                        className="text-white rounded-full px-8 bg-[#FF5E0E] hover:bg-[#307457] inline-flex items-center justify-left w-full h-14 mb-3 font-medium tracking-wide my-btns"
                    >
                        <span
                            className="mr-4 uppercase font-bold text-[16px]"

                        >
                            Talk to Us
                        </span>
                        <GoArrowRight className='text-2xl' />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
