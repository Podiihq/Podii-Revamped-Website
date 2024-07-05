import React, { useEffect } from 'react'
import Navbar from '../../global-components/NavBar'
import { ServicesComponent } from './components/ServiceComponent'
import Footer from '../../global-components/Footer'
import DiscoverSection from '../components/DiscoverSection'
import Lenis from 'lenis'

const ServicesPage = () => {
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
            <section className=''>
                <div className="px-4 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32 text-[#303030]">
                    <div className="flex items-center justify-center lg:flex-row">
                        <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                <h2 className="text-center mb-8 font-sans text-3xl lg:text-[56px] font-semibold sm:leading-none text-[#307457]"
                                >
                                    Services
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular">
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
    )
}

export default ServicesPage