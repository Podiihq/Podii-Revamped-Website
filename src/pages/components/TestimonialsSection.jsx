import React from 'react';
import Image1 from "../../assets/images/new-home/speach-marks.svg"
import Marquee from 'react-fast-marquee';


const ClientTestimonialsSection = () => {
    const testimonials = [
        {
            text: 'Working with Sigu and Podii is fantastic. He has the professional skills. His projects always come in under budget and with good quality, and interactions are respectful.',
            name: 'Bruce Tate',
            title: 'Managing Director, Groxio',
        },
        {
            text: 'The MEL platform developed by Podii has greatly contributed to the ongoing digital transformation in the data, M&E, and project management field. Their professionalism and expertise towards delivering quality product was quite impressive.',
            name: 'Donald Odhiambo',
            title: 'CEO, Tectona Group',
        },
        {
            text: 'The team at Podii was efficient, effective, exceptional, and very helpful in turning my vision into reality - a game to teach supply chain cybersecurity. And not just in the fun stuff of creating, but also in the not-as-fun stuff like GitHub alerts, patches, and updating to stay current. This is particularly important with today\'s ever-increasing cyber threats.',
            name: 'Duncan Sparrell',
            title: 'sFractal Consulting',
        },

    ];

    return (
        <section className="py-8 lg:py-[100px]">
            <p className="text-3xl lg:text-[40px] lg:mb-0 text-[#303030] container mx-auto px-4 lg:px-10">
                What our <span className="text-[#FF5E0E]">clients </span> say?
            </p>
            <Marquee speed={30}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border p-6 rounded-xl flex flex-col w-[400px] h-[380px] lg:w-[600px] lg:h-[300px] mx-2 mt-8">
                        <div className="flex lg:justify-between items-center mb-4">
                            <img src={Image1} alt="" />
                        </div>
                        <div>
                            <p className="font-light text-lg mt-2 mont-regular">{testimonial.text}</p>
                        </div>
                        <div className="flex-1"></div>
                        <div className="mt-4">
                            <div className="flex gap-2 items-center">
                                <div className="w-4 h-1 bg-[#307457]"></div>
                                <p className="text-md lg:text-xl">
                                    <span className="font-medium">{testimonial.name},</span> {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ClientTestimonialsSection;
