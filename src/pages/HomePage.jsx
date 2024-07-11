import React, { useEffect, useRef } from 'react'
import Navbar from '../global-components/NavBar'
import { MarqueeSection } from './components/MarqueeSection'
import ServicesSection from './components/ServicesComponent'
import WorkSection from './components/WorkComponent'
import PartnerWithUsSection from './components/PartnerWithUsSection'
import ClientTestimonialsSection from './components/TestimonialsSection'
import DiscoverSection from './components/DiscoverSection'
import Footer from '../global-components/Footer'
import Lenis from 'lenis'
import { animateHeroTitle } from '../global-animations/animation'
import gsap from 'gsap'

const HomePage = () => {
    const heroRef = useRef(null);
    const timeline = useRef(gsap.timeline());

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
        <div ref={heroRef}>
            <Navbar />
            <section className="px-4 pt-20 lg:pt-4 pb-10 container mx-auto lg:px-8 mt-8 text-[#303030]">
                <div className="items-center lg:mt-32 md:mt-4">
                    <div>
                        <h1 className="mb-4 lg:mb-0 text-4xl lg:text-[56px] leading-tight text-center" data-text-animation>
                            Creating your <span className="text-[#FF5E0E]">Vision</span><br /> with innovative{' '}
                            <span className="text-[#FF5E0E]">Software.</span>
                        </h1>
                    </div>
                    <div className="mx-auto lg:w-1/2" data-text-animation>
                        <p className="text-lg lg:text-2xl mt-2 text-center mont-regular">
                            We deliver exceptional digital solutions on time and foster collaboration to ensure your organization's success.
                        </p>
                    </div>
                </div>
            </section>
            <div data-text-animation>
                <MarqueeSection />
            </div>
            <div data-text-animation>
                <ServicesSection />
            </div>
            <WorkSection />
            <PartnerWithUsSection />
            <ClientTestimonialsSection />
            <DiscoverSection />
            <Footer />
        </div>
    )
}

export default HomePage