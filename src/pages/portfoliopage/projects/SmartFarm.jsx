import React, { useEffect, useState } from 'react'
import Navbar from '../../../global-components/NavBar'

import Icon1 from "../../../assets/images/updated/service/error.svg"
import Icon2 from "../../../assets/images/updated/service/web-icon.svg"
import Icon3 from "../../../assets/images/updated/service/tick.svg"

import Icon4 from "../../../assets/images/updated/stack/elixir.svg"
import Icon5 from "../../../assets/images/updated/stack/flutter.svg"
import Icon6 from "../../../assets/images/updated/stack/graph.svg"
import Icon7 from "../../../assets/images/updated/stack/sql.svg"
import Icon8 from "../../../assets/images/updated/stack/tailwind.svg"
import Icon9 from "../../../assets/images/updated/stack/docker.svg"



import Image1 from "../../../assets/images/updated/Heros/smart-farm3.svg"
import Image2 from "../../../assets/images/updated/Heros/smart-farm.svg"

import Lenis from 'lenis'
import Footer from '../../../global-components/Footer'
import { PortfolioImageComponent } from '../Components/ProjectComponent'
import Skeleton from 'react-loading-skeleton'

const SmartFarm = () => {
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <div className='bg-[#F4FBF8]'>
            <Navbar />
            <section className='lg:pt-20 pt-10'>
                <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                    <div className="flex items-center justify-center lg:flex-row">
                        <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]"
                                >
                                    Smart Farm
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular">
                                    Smart farm is a mobile application designed to help large and small scale chicken farmers efficiently store data and get real time insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div>
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center py-8 overflow-hidden">
                            <div className="ml-4 xl:ml-48">
                                <div className="px-4 flex flex-col gap-10">
                                    <div className="lg:flex gap-8 items-start">
                                        <img src={Icon1} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Challenge</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Outdated manual record-keeping, causing time inefficiency and restricted data accessibility in remote locations.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start">
                                        <img src={Icon2} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Services</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Mobile development, web development, IoT development, DB design, Testing and QA.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start">
                                        <img src={Icon3} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Solution</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Streamline chicken farming with real-time feed, vaccination, egg production and health tracking and monitoring tools to enhance efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProjectImageComponent image={Image1} alt="" myClassName="w-full lg:h-[600px] ml-4 lg:ml-0" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="px-4 lg:px-20">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457]">About Smart Farm</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">This project addresses large and small-scale chicken farmers' challenges including labor-intensive manual record-keeping, outdated methods, and limited real-time insights, emphasising the need for efficient, technology-driven data management.</p>
                    </div>
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#FF5E0E]">The challenge</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Challenges included manual record-keeping inefficiencies and limited technology access in rural areas. The project's response involved delivering the Smart Farm Mobile Platform and IoT integration, following a systematic process informed by research and user feedback.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div className="px-4 py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 items-center">
                            <ProjectImageComponent image={Image2} alt="" myClassName="w-[80%]" />
                            <div>
                                <div className="">
                                    <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 tracking-wide text-[#307457]">The Solution</h3>
                                    <p className="text-base lg:text-[20px] lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold">An app</span> that revolutionizes chicken farming with its suite of features. Farmers can efficiently monitor feed type and quantity, vaccination schedules, egg production trends, and chicken health. This comprehensive tracking empowers farmers to make informed decisions, reduce errors, and enhance the efficiency of their operations. </p>
                                    <p className="text-base lg:text-[20px] mt-8 lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold ">The IOT</span> for Real-time Insights: By incorporating cutting-edge IoT technology, Smart Farm brings real-time data collection and analysis to chicken farming. Sensors and connectivity devices enable instant data access, while data analysis provides actionable insights. This integration allows farmers to optimize their practices swiftly and make data-driven decisions, resulting in improved productivity and resource allocation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 lg:grid-cols-7 gap-x-20 gap-y-10 lg:gap-36">
                            <img src={Icon4} alt="" />
                            <img src={Icon5} alt="" />
                            <img src={Icon5} alt="" />
                            <img src={Icon6} alt="" />
                            <img src={Icon7} alt="" />
                            <img src={Icon8} alt="" />
                            <img src={Icon9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white relative">
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8 ">
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457] mb-2">IMPACT</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">The Smart Farm project showcased impressive metrics. It achieved a <span className="text-[#FF5E0E]"> 30% reduction</span> in manual effort and a <span className="text-[#FF5E0E]">20% decrease </span>  in data errors,
                            resulting in significant time savings for farmers. Moreover, a  <span className="text-[#FF5E0E]"> 25% boost</span>  in overall productivity and a <span className="text-[#FF5E0E]"> 15% increase</span> in farmers' income underscored its impact,
                            while a  <span className="text-[#FF5E0E]"> 20% improvement</span>  in work-life balance lightened the workload, enabling farmers to focus on various aspects of their lives and farming. </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SmartFarm




export const ProjectImageComponent = ({ image, myClassName }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#F4FBF8" highlightColor="#d1dbd7" className="w-full h-[300px] lg:h-[500px]" />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${myClassName}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}