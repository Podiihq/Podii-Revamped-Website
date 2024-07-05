import Image1 from "../../assets/images/new-home/update01/1.svg"
import Image2 from "../../assets/images/new-home/update01/2.svg"
import Image3 from "../../assets/images/new-home/update01/3.svg"
import Image4 from "../../assets/images/new-home/update01/4.svg"
import Image5 from "../../assets/images/new-home/update01/5.svg"
import Image6 from "../../assets/images/new-home/update01/6.svg"
import Image7 from "../../assets/images/new-home/update01/7.svg"

import Marquee from "react-fast-marquee";


export const MarqueeSection = () => {
    return (
        <section>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl">
                <Marquee speed={30} pauseOnHover>
                    <MarqueeSectionImage image={Image1} />
                    <MarqueeSectionImage image={Image2} />
                    <MarqueeSectionImage image={Image3} />
                    <MarqueeSectionImage image={Image4} />
                    <MarqueeSectionImage image={Image5} />
                    <MarqueeSectionImage image={Image6} />
                    <MarqueeSectionImage image={Image7} />
                </Marquee>
            </div>
        </section>
    );
};


export const MarqueeSectionImage = ({ image }) => {
    return (
        <div className="relative group hover:-translate-y-2 duration-300 cursor-pointer">
            <div className="overlay w-full h-full bg-black bg-opacity-50 rounded-lg absolute inset-0 z-10 flex items-center justify-center transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">View</p>
            </div>
            <img src={image} alt="" className="h-[200px] lg:min-h-[350px] object-cover" />
        </div>
    );
}
