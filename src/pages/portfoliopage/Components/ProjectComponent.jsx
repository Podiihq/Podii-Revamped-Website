import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

import Image1 from "../../../assets/images/updated/featured/1.svg"
import Image2 from "../../../assets/images/updated/featured/2.svg"
import Image3 from "../../../assets/images/updated/Heros/tecktona3.svg"
import Image4 from "../../../assets/images/updated/Heros/qbqthumb.svg"
import { ImageComponent } from '../../components/MarqueeSection'
import Skeleton from 'react-loading-skeleton'

const ProjectComponent = ({ image, link, description, title }) => {
    return (
        <div>
            <div>
                <PortfolioImageComponent image={image} alt="" myClassName="object-cover w-full" />
                <p className="text-base lg:text-2xl font-light mt-4 mont-regular"><span className="font-semibold">{title} -</span> {description}</p>
                <div className='flex'>
                    <Link to={link}
                        className="flex items-center gap-2 text-[#307457] hover:text-orange-600 mt-4">
                        <span className="text-base lg:text-xl underline">Read the case study</span>
                        <GoArrowRight className='text-2xl' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ProjectComponent



export const Projects = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            <ProjectComponent
                image={Image1}
                link={"/smart-farm"}
                description={"A mobile app allowing large-scale chicken farmers to digitize all farm records"}
                title={"Smart farm"}
            />
            <ProjectComponent
                image={Image2}
                link={"/vibrant"}
                description={"Enterprise resource managing system for an NGO in western Kenya"}
                title={"ERP"}
            />
            <ProjectComponent
                image={Image3}
                link={"#"}
                description={"A custom software platform transforming the project management"}
                title={"Tectona MEL Platform"}
            />
            <ProjectComponent
                image={Image4}
                link={"#"}
                description={"A real-time game, designed to educate players on cyber security while entertaining them."}
                title={"QBQ"}
            />
        </div>
    )
}



export const PortfolioImageComponent = ({ image, myClassName }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#F4FBF8" highlightColor="#d1dbd7" className="w-full h-[400px]" />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${myClassName}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}