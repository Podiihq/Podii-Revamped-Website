import React from 'react';
import Image1 from "../../assets/images/new-home/speach-marks.svg"


const ClientTestimonialsSection = () => {
    const testimonials = [
        {
            text: 'Working with Sigu and Podii is fantastic. He has the professional skills. His projects always come in under budget and with good quality, and interactions are respectful.',
            name: 'Bruce Tate',
            title: 'Managing Director, Groxio',
        },
        {
            text: 'The team at Podii was efficient, effective, exceptional, and very helpful in turning my vision into reality - a game to teach supply chain cybersecurity. And not just in the fun stuff of creating, but also in the not-as-fun stuff like GitHub alerts, patches, and updating to stay current. This is particularly important with today\'s ever-increasing cyber threats.',
            name: 'Duncan Sparrell',
            title: 'QBQ',
        },
    ];

    return (
        <section className="px-4 py-8 container mx-auto lg:px-8 lg:py-[100px]">
            <p
                className="text-3xl lg:text-[40px] lg:mb-0 text-[#303030]"
            >
                What our <span className="text-[#FF5E0E]">clients </span> say?
            </p>
            <div className="grid lg:grid-cols-2 mt-8 lg:mt-[30px] gap-2 lg:gap-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border py-12 px-6 rounded-xl flex flex-col">
                        <div className="flex lg:justify-between items-center mb-4">
                            <img src={Image1} alt="" />
                        </div>
                        <p className="font-light text-lg lg:text-xl mt-2 mont-regular">{testimonial.text}</p>
                        <div className="flex-1"></div>
                        <div className="mt-4 flex">
                            <div className="flex gap-2 items-center">
                                <div className="w-4 h-1 bg-[#307457]"></div>
                                <p className="text-md lg:text-xl">
                                    <span className="font-medium">{testimonial.name},</span> {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientTestimonialsSection;
