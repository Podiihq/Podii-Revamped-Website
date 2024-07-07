import React from 'react';

import Image1 from "../../assets/images/updated/service/web-icon.svg"
import Image2 from "../../assets/images/updated/service/mobile-icon.svg"
import Image3 from "../../assets/images/updated/service/custom-icon.svg"
import Image4 from "../../assets/images/updated/service/design.svg"
import Image5 from "../../assets/images/updated/service/testing.svg"
import Image6 from "../../assets/images/updated/service/cloud.svg"
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    const services = [
        {
            imgSrc: Image1,
            title: 'Web Development',
            description: 'We tailor your web apps to your business needs, to make work easier for you.',
            link: '/services',
        },
        {
            imgSrc: Image2,
            title: 'Mobile Apps',
            description: 'We craft mobile apps that run seamlessly on any device, delivering exceptional user experiences.',
            link: '/services',
        },
        {
            imgSrc: Image3,
            title: 'Custom Software',
            description: 'We create software solutions to fit you perfectly—bet no one else in the world has one quite like it.',
            link: '/services',
        },
        {
            imgSrc: Image4,
            title: 'UX/UI Design',
            description: 'We believe in crafting interfaces that not only look appealing but also function intuitively.',
            link: '/services',
        },
        {
            imgSrc: Image5,
            title: 'Testing & QA',
            description: 'We ensure your software operates flawlessly, just like your reliable morning alarm.',
            link: '/services',
        },
        {
            imgSrc: Image6,
            title: 'Cloud Computing',
            description: 'Have your data accessible from anywhere, like your favorite e-book, readable from any device.',
            link: '/services',
        },
    ];

    return (
        <section className="my-[50px] lg:my-[100px] px-4 lg:px-0 text-[#303030]" id="services">
            <div className="lg:flex items-center justify-between container mx-auto lg:px-8 md:px-8">
                <h2 className="text-left text-[28px] lg:text-[40px] leading-none">
                    Our <span className="text-[#FF5E0E]">Services</span> and <span className="text-[#FF5E0E]">Capabilities</span>
                </h2>
                <div className="flex mt-4">
                    <Link to="/services" className="flex items-center gap-2 text-[#307457] hover:text-orange-600">
                        <p className="hover:underline text-base lg:text-xl uppercase">More Services</p>
                        <GoArrowRight className='text-2xl' />
                    </Link>
                </div>
            </div>
            <div className="py-4 mx-auto container lg:px-8 lg:pb-8 lg:pt-[30px]">
                <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="item px-6 py-8 rounded-lg border-[#F4FBF8] border-[2px]">
                            <img src={service.imgSrc} alt="" className="w-12 h-12" />
                            <p className="font-medium text-xl py-3 lg:py-6">
                                {service.title}
                            </p>
                            <p className="text-lg lg:text-xl font-light mont-regular">{service.description}</p>
                            <div className="mt-2 lg:mt-6">
                                <Link to={service.link} className="flex items-center gap-2 text-[#307457] hover:text-orange-600">
                                    <p className="underline text-base lg:text-xl">Learn More</p>
                                    <GoArrowRight className='text-2xl' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
