import React from 'react'
import Navbar from '../global-components/NavBar'
import { MarqueeSection } from './components/MarqueeSection'
import ServicesSection from './components/ServicesComponent'
import WorkSection from './components/WorkComponent'
import PartnerWithUsSection from './components/PartnerWithUsSection'
import ClientTestimonialsSection from './components/TestimonialsSection'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <section className="px-4 pt-20 lg:pt-4 pb-10 container mx-auto lg:px-8 mt-8 text-[#303030]">
                <div className="items-center lg:mt-32 md:mt-4">
                    <div>
                        <h1 className="mb-4 lg:mb-0 text-4xl lg:text-[56px] leading-tight text-center">
                            Creating your <span className="text-[#FF5E0E]">vision</span><br /> with innovative{' '}
                            <span className="text-[#FF5E0E]">Software.</span>
                        </h1>
                    </div>
                    <div className="mx-auto lg:w-1/2">
                        <p className="text-lg lg:text-2xl mt-2 text-center mont-regular">
                            We deliver exceptional digital solutions on time and foster collaboration to ensure your organization's success.
                        </p>
                    </div>
                </div>
            </section>
            <MarqueeSection />
            <ServicesSection />
            <WorkSection />
            <PartnerWithUsSection />
            <ClientTestimonialsSection />
        </div>
    )
}

export default HomePage