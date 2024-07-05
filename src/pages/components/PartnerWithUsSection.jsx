import React from 'react';
import Image1 from "../../assets/images/new-home/why.svg"
import Image2 from "../../assets/images/new-home/tick.svg"

const PartnerWithUsSection = () => {
    const reasons = [
        'We excel in developing cutting-edge software solutions precisely tailored to your needs.',
        'We prioritize delivering maximum value for your investment with innovative approaches.',
        'We foster collaboration and provide support for long-term success with our software.',
    ];

    return (
        <section className="px-4 py-8 mx-auto container md:px-24 lg:px-8 lg:py-[100px]" id="">
            <div className="grid lg:grid-cols-2">
                <div className="place-self-center">
                    <p className="text-3xl lg:text-[40px] mb-4 lg:mb-10 text-[#303030]">
                        Why <span className="text-[#FF5E0E]">Partner</span> With Us?
                    </p>
                    {reasons.map((reason, index) => (
                        <div className="flex mt-3" key={index}>
                            <img src={Image2} alt="" />
                            <p className="text-lg lg:text-xl text-[#0F241B] mont-regular">{reason}</p>
                        </div>
                    ))}
                </div>
                <img src={Image1} alt="" className="w-full" />
            </div>
        </section>
    );
};

export default PartnerWithUsSection;
