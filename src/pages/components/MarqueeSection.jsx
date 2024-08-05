import { useState } from "react"
import Image1 from "../../assets/images/new-home/update01/1.svg"
import Image2 from "../../assets/images/new-home/update01/2.svg"
import Image3 from "../../assets/images/new-home/update01/3.svg"
import Image4 from "../../assets/images/new-home/update01/4.svg"
import Image5 from "../../assets/images/new-home/update01/5.svg"
import Image6 from "../../assets/images/new-home/update01/6.svg"
import Image7 from "../../assets/images/new-home/update01/7.svg"

import Marquee from "react-fast-marquee";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom"



export const MarqueeSection = () => {
    return (
        <section>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl">
                <Marquee speed={30} pauseOnHover>
                    <MarqueeSectionImage image={Image1} link={"/portfolio/vibrant"} />
                    <MarqueeSectionImage image={Image2} link={"/portfolio/vibrant"} />
                    <MarqueeSectionImage image={Image3} link={"/portfolio/smart-farm"} />
                    <MarqueeSectionImage image={Image4} link={"/portfolio/smart-farm"} />
                    <MarqueeSectionImage image={Image5} link={"/portfolio/vibrant"} />
                    <MarqueeSectionImage image={Image6} link={"/portfolio/vibrant"} />
                    <MarqueeSectionImage image={Image7} link={"https://budgetnke.com/"} />
                </Marquee>
            </div>
        </section>
    );
};


export const MarqueeSectionImage = ({ image, link }) => {

    return (
        <Link to={link}>
            <div className="relative group cursor-pointer duration-300 mx-1">
                <div
                    className="overlay w-full h-full bg-black bg-opacity-30 uppercase rounded-lg absolute inset-0 z-10 flex items-center justify-center transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white">View Project</p>
                </div>
                <ImageComponent image={image} myClassName={"h-[200px] lg:min-h-[350px] object-cover"} />
            </div>
        </Link>
    );
}



export const ImageComponent = ({ image, myClassName, link }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#F4FBF8" highlightColor="#d1dbd7" className="w-[300px] h-[200px] lg:w-[500px] lg:h-[350px]" />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${myClassName}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}