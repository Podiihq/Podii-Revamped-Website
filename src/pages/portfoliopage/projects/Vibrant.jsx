import Lenis from 'lenis';
import React, { useEffect } from 'react'

import Icon1 from "../../../assets/images/updated/service/error.svg"
import Icon2 from "../../../assets/images/updated/service/web-icon.svg"
import Icon3 from "../../../assets/images/updated/service/tick.svg"

import Icon4 from "../../../assets/images/updated/stack/elixir.svg"
import Icon5 from "../../../assets/images/updated/stack/flutter.svg"
import Icon6 from "../../../assets/images/updated/stack/graph.svg"
import Icon7 from "../../../assets/images/updated/stack/sql.svg"
import Icon8 from "../../../assets/images/updated/stack/tailwind.svg"
import Icon9 from "../../../assets/images/updated/stack/docker.svg"
import Navbar from '../../../global-components/NavBar';

import Image1 from "../../../assets/images/updated/Heros/Vibrant2.svg"
import Image2 from "../../../assets/images/updated/Heros/vibrant.svg"
import Image3 from "../../../assets/images/updated/featured/1.svg"
import Image4 from "../../../assets/images/updated/Heros/tecktona3.svg"
import { ProjectImageComponent } from './SmartFarm';
import Footer from '../../../global-components/Footer';
import ProjectComponent from '../Components/ProjectComponent';
import ContactMiniForm from '../../../global-components/ContactMiniForm';

const Vibrant = () => {
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
                                    Vibrant ERP System
                                </h2>

                                <p className="text-center text-xl md:text-2xl mont-regular">
                                    Elvs is an enterprise resource management system that seek to automate the management of day to day activities at Vibrant Village foundation.
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
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">Manual and labour intensive resource tracking, resulting in incomplete data, and inability to track all resources from people to tool to devices.</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start">
                                        <img src={Icon2} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Services</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">UX/UI Design, Mobile development, Web development, DB design, DevOps, Testing and QA</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-8 items-start">
                                        <img src={Icon3} alt="" className="w-10 h-10 lg:w-auto lg:h-auto" />
                                        <div className="mt-4 lg:mt-0">
                                            <p className="text-base lg:text-[24px] font-semibold">Solution</p>
                                            <p className="text-base lg:text-[20px] mt-4 lg:leading-8 mont-regular">A mobile app to collect data from the single source of truth and a web app to display the insights generated from the data collected</p>
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
                        <h3 className="text-base lg:text-[20px] font-semibold uppercase pb-3 text-[#307457]"
                        >About Vibrant erp</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Vibrant Villages, a US-based private foundation, partners with
                            non-profits in Africa and Latin America to manage community development programs. Elvs, an enterprise resource
                            management system sought to automate the day-to-day tasks of field officers, addressing the challenges of
                            manual record-keeping and the growing inefficiency associated with expanding data sets.</p>
                    </div>
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-semibold uppercase pb-3 text-[#FF5E0E]"
                        >The challenge</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">Organising data for 20 students in one school is
                            straightforward with a spreadsheet, but managing over 3000 students across 50 schools requires automation. Our
                            client faced this challenge, needing to manage a growing dataset for program decisions. To address this, we
                            focused on the data collection process. Tutors were manually recording student attendance and performance for
                            years, using a Kobo digital form and booklets. </p>
                        <p className="text-base lg:text-[20px] lg:leading-8 mt-4 mont-regular">Each school had a single tablet for attendance, and
                            transferring session data to the digital system was labor-intensive. We developed a web dashboard for
                            efficient data management, including student and teacher information, and an offline mobile app for real-time
                            attendance and performance tracking. This improved efficiency and accuracy, benefitting students in the
                            program.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white">
                    <div className="px-4 py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                            <ProjectImageComponent image={Image2} alt="" myClassName="w-[80%]" />
                            <div>
                                <div className="">
                                    <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 tracking-wide text-[#307457]">The Solution</h3>
                                    <p className="text-base lg:text-[20px] lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold">A web
                                        dashboard</span> for record keeping of student data, volunteers teachers data and the resources
                                        allocated to each school. An all in one place of everything that pertains to running the intervention
                                        program (program to help underperforming students to do better. </p>
                                    <p className="text-base lg:text-[20px] mt-8 lg:leading-8 mont-regular"><span className="text-[#FF5E0E] font-semibold ">An
                                        offline mobile app</span> to streamline attendance recording and student performance tracking for
                                        Partner schools in western Kenya. Collecting data at the source to reduce human error and inaccurate
                                        conversions of data.</p>
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

            <section className='bg-white'>
                <div className=" py-6 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mt-8 ">
                    <div className="px-4 lg:px-20 mt-8">
                        <h3 className="text-base lg:text-[20px] font-medium uppercase pb-3 text-[#307457] mb-2">IMPACT</h3>
                        <p className="text-base lg:text-[20px] lg:leading-8 mont-regular">The offline mobile app has been instrumental, enabling <span
                            className="text-[#FF5E0E]"> real-time data collection and reducing manual errors.</span> Volunteers and teachers
                            can now easily track attendance and student performance, enhancing resource allocation and interventions. This
                            mobile technology has
                            streamlined operations, <span className="text-[#FF5E0E]"> improving data accuracy and accessibility,</span> benefiting underperforming students.
                        </p>
                        <p className="text-base lg:text-[20px] lg:leading-8 mt-8 mont-regular">The dashboard design centralises<span
                            className="text-[#FF5E0E]"> data management for over 4,000 students, 100 trainers, and 50 schools.</span> It
                            simplifies
                            administrative processes and empowers administrators with data insights, particularly in the context of
                            attendance rates, enhancing educational department efficiency within the NGO.
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
                        link={"/smart-farm"}
                        description={"a mobile app allowing large-scale chicken farmers to digitize all farm records"}
                        title={"Smart Farm"}
                    />
                    <ProjectComponent
                        image={Image4}
                        link={"/tectona"}
                        description={"A custom software platform transforming the project management"}
                        title={"Tectona MEL Platfrom"}
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Vibrant