import React, { useEffect, useRef } from 'react'
import Navbar from '../../global-components/NavBar'
import { ServicesComponent } from './components/ServiceComponent'
import Footer from '../../global-components/Footer'
import DiscoverSection from '../components/DiscoverSection'
import Lenis from 'lenis'
import gsap from 'gsap'
import { animateHeroTitle } from '../../global-animations/animation'
import { Helmet } from 'react-helmet-async'

const ServicesPage = () => {
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
        <div>
            <Helmet>
                <title>Podii | Services</title>
                <meta property="og:url" content="https://podiihq.com/services" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Find Software Development Services for Businesses" />
                <meta property="og:description" content="Explore software development services in Mobile and Web Apps, DevOps, UX/UI Design, Database Design, Cloud Computing and Quality Assurance " />
                <meta property="og:image" content="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://podiihq.com/services" />
                <meta name="twitter:title" content="Find Software Development Services for Businesses" />
                <meta name="twitter:description" content="Explore software development services in Mobile and Web Apps, DevOps, UX/UI Design, Database Design, Cloud Computing and Quality Assurance" />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />

                <meta property="og:title" content="Find Software Development Services for Businesses" />
                <meta property="og:description" content="Explore software development services in Mobile and Web Apps, DevOps, UX/UI Design, Database Design, Cloud Computing and Quality Assurance" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
                <meta property="og:url" content="https://podiihq.com/services" />
            </Helmet>
            <div className='bg-[#F4FBF8]' ref={heroRef}>
                <Navbar />
                <section className='lg:pt-20 pt-10'>
                    <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                        <div className="flex items-center justify-center lg:flex-row">
                            <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                                <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                    <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]" data-text-animation>
                                        Services
                                    </h2>

                                    <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                        Explore our range of services, thoughtfully designed to provide tailored solutions for your unique
                                        digital goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='bg-white pb-16'>
                    <div className='container mx-auto mt-5 pt-4 w-full'>
                        <ServicesComponent />
                    </div>
                </div>
                <DiscoverSection />
                <Footer />
            </div>
        </div>

    )
}

export default ServicesPage