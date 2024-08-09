import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

import Image1 from "../../assets/images/logos/Ako Advocates (1).svg"
import Image2 from "../../assets/images/logos/Baselink Logo (1).svg"
import Image3 from "../../assets/images/logos/Chicken Basket Logo (1).svg"
import Image4 from "../../assets/images/logos/Ecofinder Logo.svg"
import Image5 from "../../assets/images/logos/Frenet Logo (1).svg"
import Image6 from "../../assets/images/logos/VV-logo-Color 1.svg"
import Image7 from "../../assets/images/logos/Gizlogo.svg"
import Image8 from "../../assets/images/logos/Onsoko Logo (1).svg"
import Image9 from "../../assets/images/logos/Open FN Logo (1).svg"
import Image10 from "../../assets/images/logos/S Fractal Consulting.svg"
import Image11 from "../../assets/images/logos/Sabatia Logo (1).svg"
import Image12 from "../../assets/images/logos/Tectona Group Logo.svg"
import Image13 from "../../assets/images/logos/Ungaranged Logo (1).svg"


const ClientLogos = () => {
    const [showAll, setShowAll] = useState(false);

    const logos = [
        Image11, Image12, Image13, Image1, Image2, Image7, Image6, Image8, Image9, Image3, Image5, Image10, Image4
    ];

    const handleLoadMore = () => {
        setShowAll(true);
    };

    const handleHide = () => {
        setShowAll(false);
    };

    return (
        <div className='mx-auto py-16 container group px-4'>
            <div className='pb-10'>
                <p className="text-3xl lg:text-[40px] lg:mb-0 text-[#303030] container mx-auto px-4 lg:px-10">
                    Our <span className="text-[#FF5E0E]">Happy</span> customers.
                </p>
            </div>
            <div className='relative md-px-4 lg:px-10 hidden lg:block'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-y-12 items-center transition-all duration-300 overflow-hidden">
                    {logos.map((logo, index) => (
                        <LogoImageComponent image={logo} imageClassName={"place-self-center w-32 lg:w-auto mx-auto lg:mx-0"} key={index} />
                    ))}
                </div>
                <div className='absolute inset-0 z-30 flex items-end justify-center bg-gradient-to-b from-transparent to-[#FFF]' />
            </div>
            <div className='relative md:px-4 lg:px-10 lg:hidden'>
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-y-12 items-center transition-all duration-300 overflow-hidden ${showAll ? 'max-h-screen' : 'max-h-[200px]'}`}>
                    {logos.slice(0, showAll ? logos.length : 10).map((logo, index) => (
                        <LogoImageComponent image={logo} imageClassName={"place-self-center w-32 lg:w-auto mx-auto lg:mx-0"} key={index} />
                    ))}
                </div>
                {!showAll ? (
                    <div className='absolute inset-0 z-30 flex items-end justify-center bg-gradient-to-b from-transparent to-[#FFF]'>
                        <button onClick={handleLoadMore} className=' mb-4 px-4 py-2 bg-[#949494] text-white rounded-full'>
                            See more
                        </button>
                    </div>
                ) : (
                    <div className='absolute inset-0 z-30 flex items-end justify-center bg-gradient-to-b from-transparent to-[#FFF]'>
                        <button onClick={handleHide} className='mb-4 px-4 py-2 bg-[#949494] text-white rounded-full'>
                            Hide
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientLogos


export const LogoImageComponent = ({ image, imageClassName }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#F4FBF8" highlightColor="#d1dbd7" className="w-[170px] h-[100px] lg:w-[250px] lg:h-[150px]" />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${imageClassName}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}