import React from 'react'
import Navbar from '../../global-components/NavBar'

import Image1 from "../../assets/images/updated/success.svg"
import Image2 from "../../assets/images/updated/Vector.svg"
import Footer from '../../global-components/Footer'
import Lenis from 'lenis'

const Success = () => {
    // useEffect(() => {
    //     const lenis = new Lenis();
    //     lenis.on('scroll', (e) => {
    //         console.log(e);
    //     });

    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);
    //     return () => {
    //         lenis.destroy();
    //     };
    // }, []);
    return (
        <div>
            <div className='bg-[#F4FBF8]'>
                <Navbar />
                <section className='lg:pt-20 pt-10'>
                    <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                        <div className="flex items-center justify-center lg:flex-row">
                            <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                                <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                    <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]"
                                    >
                                        Tell us about your project
                                    </h2>

                                    <p className="text-center text-xl md:text-2xl mont-regular">
                                        We do custom software right and can't wait to work with you. Your project will shine with our expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='bg-white'>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 mt-8 lg:mt-16">
                    <div className="py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                            <div className="relative">
                                <img
                                    className="inset-0 object-bottom w-full lg:absolute hidden lg:block"
                                    src={Image1}
                                    alt=""
                                />
                            </div>
                            <div className="lg:py-6 lg:pr-16 px-4">
                                {[
                                    {
                                        step: 1,
                                        title: 'Confirmation Email',
                                        description:
                                            "You will receive an email confirming that we've received your message. Please check your inbox (and spam folder, just in case) for this confirmation.",
                                    },
                                    {
                                        step: 2,
                                        title: 'Our Team Will Review',
                                        description:
                                            "Our team is dedicated to providing a prompt response. Your inquiry is important to us, and we'll review it carefully to ensure we fully understand your needs.",
                                    },
                                    {
                                        step: 3,
                                        title: 'Response Time',
                                        description:
                                            'We typically respond within 5 business days during our regular business hours. If you have contacted us outside these hours, we will get back to you at the earliest opportunity.',
                                    },
                                    {
                                        step: 4,
                                        title: 'Stay Connected',
                                        description: (
                                            <>
                                                In the meantime, feel free to explore our website and learn more about our{' '}
                                                <span className="font-semibold underline text-[#307457]">
                                                    <a href="./services.html">solutions.</a>
                                                </span>
                                            </>
                                        ),
                                    },
                                ].map((item, index) => (
                                    <div className="lg:flex" key={index}>
                                        <div className="lg:flex flex-col items-center mr-4">
                                            <div>
                                                <div className="flex items-center justify-center w-10 h-10">
                                                    <img src={Image2} alt="" />
                                                    <h1 className="absolute" style={{ color: '#FF5E0E' }}>{item.step}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-1 pb-8">
                                            <p className="mb-2 text-xl lg:text-2xl font-semibold">
                                                {item.title}
                                            </p>
                                            <p className="text-lg lg:text-xl font-light text-[#140C00] mont-regular">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Success