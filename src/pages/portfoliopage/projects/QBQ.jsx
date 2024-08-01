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



import Image1 from "../../../assets/images/updated/gif/Largeqbq.gif"
import Image2 from "../../../assets/images/updated/Heros/qbq.png"
import Image3 from "../../../assets/images/updated/featured/1.svg"
import Image4 from "../../../assets/images/updated/featured/2.svg"
import { ProjectImageComponent } from './SmartFarm';
import Footer from '../../../global-components/Footer';
import ProjectComponent from '../Components/ProjectComponent';
import ContactMiniForm from '../../../global-components/ContactMiniForm';
import gsap from 'gsap';
import { animateHeroTitle } from '../../../global-animations/animation';

const QBQ = () => {
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
                                    Quad Block Quiz
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                    A captivating game concept by Duncan Sparrel that we executed to teach cybersecurity in a fun and educational way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div>
                        <div className="py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                            <div className="ml-4">
                                <div className="px-4 lg:flex justify-between text-center gap-10 lg:gap-20">
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <div className="mt-4 lg:mt-0">
                                            <div className="flex justify-center mb-2">
                                                <img src={Icon1} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                            </div>
                                            <p className="text-base lg:text-[24px] font-semibold">Challenge</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">We craft mobile apps that run seamlessly on any device, delivering exceptional user experiences.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <div className="mt-4 lg:mt-0">
                                            <div className="flex justify-center mb-2">
                                                <img src={Icon2} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                            </div>
                                            <p className="text-base lg:text-[24px] font-semibold">Services</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Game Development, custom software development, DevOps, WebApp.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start" data-text-animation>
                                        <div className="mt-4 lg:mt-0">
                                            <div className="flex justify-center mb-2">
                                                <img src={Icon3} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                            </div>
                                            <p className="text-base lg:text-[24px] font-semibold">Solution</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">A real-time game centered around Tetris, with real-life trivia challenges related to supply chain security.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-4 py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8' data-text-animation>
                            <ProjectImageComponent image={Image1} alt="" myClassName="w-full h-full rounded-lg border-2 border-[#307457]" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="px-4 lg:px-20">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457]">ABOUT QUAD BLOCK QUIZ</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">
                            Duncan Sparrel created the Quad Block Quiz (QBQ) to help protect against cyber threats. It’s a real-time game that teaches cybersecurity while you play. As you move Tetris blocks, you learn how to defend against digital attacks. The game has increased cybersecurity awareness and prepared us for a safer digital future.
                        </p>
                    </div>
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#FF5E0E]">The challenge</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">
                            Duncan Sparrel, a cybersecurity expert, recognized a critical challenge concerning the vulnerability of software systems to malicious cyberattacks. To address this, he required a conference tool that could educate participants interactively and fun, all while addressing these vulnerabilities within the game.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white">
                    <div className="px-4 py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                            <ProjectImageComponent image={Image2} alt="" myClassName="w-full" />
                            <div>
                                <div className="">
                                    <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 tracking-wide text-[#307457]">The Solution</h3>
                                    <p className="text-base lg:text-[20px] lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold">A real-time game,</span> designed to educate players on cyber security while entertaining them. It’s an epic quest for safety in our increasingly connected world, that, turns players into cyber guardians. As you navigate through this digital adventure, you’re not just playing, you’re learning how to protect yourself in the digital world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-10 lg:gap-36">
                            <img src={Icon4} alt="" />
                            <img src={Icon5} alt="" />
                            <img src={Icon6} alt="" />
                            <img src={Icon7} alt="" />
                            <img src={Icon8} alt="" />
                            <img src={Icon9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white'>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8 ">
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457] mb-2">IMPACT</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mt-8 mont-regular">
                            The Real-Time Game Application has made a significant impact. It’s not just a game, but an educational tool that increases cybersecurity awareness. Users are not only having fun but also learning about cybersecurity threats. This game has successfully engaged users, educated them, and promoted better cyber hygiene practices. It’s more than a game; it’s a journey towards becoming more cyber-resilient. The knowledge gained from this game is helping users to navigate the digital world safely.
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
                <div className='grid grid-cols-2 gap-10'>
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

export default QBQ