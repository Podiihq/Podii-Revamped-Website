import gsap from 'gsap';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react'
import Navbar from '../../../global-components/NavBar';
import { animateHeroTitle } from '../../../global-animations/animation';

import Icon1 from "../../../assets/images/updated/service/error.svg"
import Icon2 from "../../../assets/images/updated/service/web-icon.svg"
import Icon3 from "../../../assets/images/updated/service/tick.svg"
import Icon4 from "../../../assets/images/updated/stack/tailwind.svg"
import Icon5 from "../../../assets/images/updated/stack/react-2.svg"

import Image1 from "../../../assets/images/updated/Heros/Ungaraged-Image1.svg"
import Image4 from "../../../assets/images/updated/Heros/ungaraged-Image4.png"
import Image2 from "../../../assets/images/updated/featured/2.svg"
import Image3 from "../../../assets/images/updated/Heros/qbqthumb.svg"
import { ProjectImageComponent } from './SmartFarm';
import Footer from '../../../global-components/Footer';
import ProjectComponent from '../Components/ProjectComponent';
import ContactMiniForm from '../../../global-components/ContactMiniForm';

const Ungaraged = () => {
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
                                    Ungaraged
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                    A dedicated website we designed for Ungaraged to showcase their car tuning services, improve customer engagement and expand their online presence
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
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular"> Lack of a dedicated website, leading to frequent, repetitive inquiries and time-consuming customer interactions limited to their social media and messaging platforms</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <img src={Icon2} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Services</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Website design and development</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <img src={Icon3} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Solution</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Developed an informative website to centralize information, with an extensive FAQ section and integrated live chat for immediate support</p>
                                            <p className='text-base mt-4 lg:text-[20px] lg:leading-8 mont-regular'>Visit Website : <a href="https://ungaraged.com/" className='underline text-[#FF5E0E]'>ungaraged.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-text-animation>
                                <ProjectImageComponent image={Image1} alt="" myClassName="lg:ml-16 w-full h-full ml-4 lg:ml-0 rounded-tl-xl rounded-bl-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="px-4 lg:px-20">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457]">About Ungaraged</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Ungaraged is a car tuning company based in Nairobi, Kenya, specializing in enhancing car performance for enthusiasts and everyday car owners. The company focuses on providing top-notch tuning services to optimize vehicle performance, handling, and overall driving experience.</p>
                    </div>
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#FF5E0E]">The challenge</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Ungaraged relied solely on social media and messaging platforms for customer interaction. This led to a lack of readily accessible information about their services, resulting in frequent repetition of the same questions and time-consuming customer exchanges.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div className="px-4 py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <ProjectImageComponent image={Image4} alt="" myClassName="w-full h-full rounded-xl" />
                            <div>
                                <div className="">
                                    <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 tracking-wide text-[#307457]">The Solution</h3>
                                    <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">To address these challenges, we implemented a comprehensive website for Ungaraged with:</p>
                                    <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">
                                        <span className="text-[#FF5E0E] font-semibold ">Service Information: </span>
                                        We created a website featuring detailed information about Ungaraged’s tuning services, expertise, and contact details. This centralized platform allows potential customers to easily find and understand the full range of services offered, helping them make informed decisions.
                                    </p>
                                    <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">
                                        <span className="text-[#FF5E0E] font-semibold ">FAQ Section: </span>
                                        Developed an extensive FAQ section to address common questions about their services. This not only reduces repetitive inquiries but also empowers customers by providing them with quick answers to their most pressing questions.
                                    </p>
                                    <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">
                                        <span className="text-[#FF5E0E] font-semibold ">Live Chat Integration: </span>
                                        Implemented a live chat feature using tawk.to, enabling immediate customer support and feedback. This real-time interaction capability is crucial for a business like Ungaraged, where customers often have specific and technical questions that require prompt and accurate responses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 items-center">
                            <img src={Icon4} alt="" className='w-12' />
                            <img src={Icon5} alt="" className='w-12' />
                        </div>
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
                        image={Image2}
                        link={"/vibrant"}
                        description={"Enterprise resource managing system for an NGO in western Kenya"}
                        title={"ERP"}
                    />
                    <ProjectComponent
                        image={Image3}
                        link={"/qbq"}
                        description={"A real-time game, designed to educate players on cyber security while entertaining them."}
                        title={"QBQ"}
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Ungaraged