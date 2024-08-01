import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react'
import Navbar from '../../../global-components/NavBar';

import Icon1 from "../../../assets/images/updated/service/error.svg"
import Icon2 from "../../../assets/images/updated/service/web-icon.svg"
import Icon3 from "../../../assets/images/updated/service/tick.svg"

import Icon4 from "../../../assets/images/updated/stack/elixir.svg"
import Icon5 from "../../../assets/images/updated/stack/postgresql.svg"
import Icon6 from "../../../assets/images/updated/stack/graph.svg"
import Icon7 from "../../../assets/images/updated/stack/sql.svg"
import Icon8 from "../../../assets/images/updated/stack/tailwind.svg"
import Icon9 from "../../../assets/images/updated/stack/docker.svg"

import Image1 from "../../../assets/images/updated/Heros/tectona.svg"
import Image2 from "../../../assets/images/updated/Heros/tectona2.svg"
import Image3 from "../../../assets/images/updated/featured/1.svg"
import Image4 from "../../../assets/images/updated/featured/2.svg"
import { ProjectImageComponent } from './SmartFarm';
import Footer from '../../../global-components/Footer';
import ProjectComponent from '../Components/ProjectComponent';
import ContactMiniForm from '../../../global-components/ContactMiniForm';
import gsap from 'gsap';
import { animateHeroTitle } from '../../../global-animations/animation';

const Tectona = () => {
    const heroRef = useRef(null);
    const timeline = useRef(gsap.timeline());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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


    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;

            tl
                .add(animateHeroTitle(), "=+10%")

        }, heroRef);
        return () => context.revert();
    }, []);
    return (
        <div className='bg-[#F4FBF8]' ref={heroRef}>
            <Navbar />
            <section className='lg:pt-20 pt-10'>
                <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                    <div className="flex items-center justify-center lg:flex-row">
                        <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]" data-text-animation>
                                    Tectona MEL system
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                    Tectona, an impact investment firm, overcame manual data analysis challenges by developing the MEL Platform, revolutionising project management.
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
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <img src={Icon1} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Challenge</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Tectona struggled with manual data analysis inefficiencies, hampering project management effectiveness.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <img src={Icon2} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Services</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">UX/UI Design, Mobile development, Web development, DB design, DevOps, Testing and QA</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <img src={Icon3} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Solution</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Automating data analysis for precise results across diverse organisations using the MEL platform.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-text-animation>
                                <ProjectImageComponent image={Image1} alt="" myClassName="w-full lg:h-[600px] ml-4 lg:ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="px-4 lg:px-20">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457]">ABOUT TECTONA MEL</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Tectona, an impact investment firm supporting emerging market enterprises, faced hurdles in labor-intensive, error-prone manual data analysis, affecting project management efficiency. To combat these issues, they initiated the transformative MEL Platform development for automated, standardized data analysis, revolutionizing project management.</p>
                    </div>
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#FF5E0E]">The challenge</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">The primary challenges facing Tectona were associated with the labor-intensive and error-prone nature of manual data analysis processes. Relying on these methods not only consumed valuable time and resources but also introduced the risk of inaccuracies in impact analysis. These challenges called for a fundamental shift in the approach to project management, paving the way for the development of the MEL Platform.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div className="lg:py-16 py-8">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                            <ProjectImageComponent image={Image2} alt="" myClassName="w-[80%]" />
                            <div>
                                <div className="mr-4 xl:mr-48 px-4">
                                    <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 tracking-wide text-[#307457]" tyle="font-family: 'Montserrat';">The Solution</h3>
                                    <p className="text-base lg:text-[20px] lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold">MEL platform,</span> a system designed to automate data analysis. This innovative platform efficiently collects and validates data from diverse organizations, each with unique logistics and datasets, ultimately delivering precise impact analysis upon project completion. The MEL Platform leverages advanced technologies to eliminate time-consuming manual work, enabling a standardized approach to data analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-10 lg:gap-20 items-center">
                            <img src={Icon4} alt="" />
                            <img src={Icon6} alt="" />
                            <img src={Icon7} alt="" />
                            <img src={Icon8} alt="" />
                            <img src={Icon5} alt="" />
                            <img src={Icon9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white'>
                <div className="py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8 ">
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457] mb-2">IMPACT</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">The introduction of the MEL Platform has significantly enhanced efficiency and resulted in substantial time and resource savings. Tectona can now make well-informed investment decisions by precisely measuring the impact of their investments, ensuring resources are effectively allocated.
                        </p>
                        <p className="text-base lg:text-[20px] lg:leading-8 mt-8 mont-regular">
                            The platform enables cross-project comparisons, allowing Tectona to identify best practices and continually refine their investment strategy. With accurate, real-time impact data at their fingertips, project managers can make data-driven decisions, ultimately leading to more successful projects.
                        </p>

                    </div>
                </div>
            </section>
            <section className='bg-white relative'>
                <ContactMiniForm />
                <div className="py-32 bg-[#F4FBF8] absolute bottom-0 w-full">
                </div>
            </section>
            <section className='px-4 py-8 container mx-auto  lg:px-8 lg:py-20'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <ProjectComponent
                        image={Image3}
                        link={"/portfolio/smart-farm"}
                        description={"a mobile app allowing large-scale chicken farmers to digitize all farm records"}
                        title={"Smart Farm"}
                    />
                    <ProjectComponent
                        image={Image4}
                        link={"/portfolio/vibrant"}
                        description={"Enterprise resource managing system for an NGO in western Kenya"}
                        title={"ERP"}
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Tectona