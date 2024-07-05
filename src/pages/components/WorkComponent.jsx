import React from 'react';

import Image1 from "../../assets/images/new-home/VibrantShowcase 2.svg"
import Image2 from "../../assets/images/new-home/SmartFarm2 4.svg"
import Image3 from "../../assets/images/new-home/Podii Website (13) 1.svg"
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const WorkSection = () => {
    const works = [
        {
            imgSrc: Image1,
            link: '#',
            description: 'An Enterprise resource managing system.',
        },
        {
            imgSrc: Image2,
            link: '#',
            description: 'A custom project management software.',
        },
        {
            imgSrc: Image3,
            link: '#',
            description: 'An educative cyber security game.',
        },
    ];

    return (
        <div className="bg-[#F4FBF8]">
            <section className="px-4 py-8 mx-auto container md:px-24 lg:px-8 lg:py-[100px]" id="work">
                <div className="lg:flex justify-between lg:mb-[30px]">
                    <h3 className="text-3xl lg:text-[40px] mb-4 lg:mb-0 text-[#303030]">
                        See our <span className="text-[#FF5E0E]">work</span>
                    </h3>
                    <a href="#" className="lg:flex items-center gap-4 text-[#307457] hover:text-orange-600 py-4 lg:py-0 hidden">
                        <span className="text-xl">DISCOVER ALL</span>
                        <GoArrowRight className='text-2xl' />
                    </a>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                    {works.map((work, index) => (
                        <div key={index}>
                            <img src={work.imgSrc} alt="" className="w-full object-cover mb-4" />
                            <Link to={work.link} className="text-lg lg:text-2xl underline mont-regular">
                                {work.description}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WorkSection;
