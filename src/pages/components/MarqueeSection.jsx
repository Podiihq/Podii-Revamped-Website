import { useState } from "react"
import Image1 from "../../assets/images/new-home/update01/1.svg"
import Image2 from "../../assets/images/new-home/update01/2.svg"
import Image3 from "../../assets/images/new-home/update01/3.svg"
import Image4 from "../../assets/images/new-home/update01/4.svg"
import Image5 from "../../assets/images/new-home/update01/5.svg"
import Image6 from "../../assets/images/new-home/update01/6.svg"
import Image7 from "../../assets/images/new-home/update01/7.svg"

import Marquee from "react-fast-marquee";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



export const MarqueeSection = () => {
    // const [loading, setLoading] = useState(true);
    // const [progress, setProgress] = useState(0);
    // const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];


    // useEffect(() => {
    //     const loadImages = async () => {
    //         const promises = images.map((src, index) => {
    //             return new Promise((resolve, reject) => {
    //                 const img = new Image();
    //                 img.src = src;
    //                 img.onload = () => {
    //                     setProgress(((index + 1) / images.length) * 100);
    //                     resolve();
    //                 };
    //                 img.onerror = reject;
    //             });
    //         });

    //         try {
    //             await Promise.all(promises);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Failed to load images', error);
    //         }
    //     };

    //     loadImages();
    // }, [images]);

    // if (loading) {
    //     return <Loader progress={Math.round(progress)} />;
    // }
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
        <div className="relative group  cursor-pointer duration-300 mx-1">
            <div
                className="overlay w-full h-full bg-black bg-opacity-30 uppercase rounded-lg absolute inset-0 z-10 flex items-center justify-center transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">View Project</p>
            </div>
            <ImageComponent image={image} myClassName={"h-[200px] lg:min-h-[350px] object-cover"} />
            {/* <img src={image} alt="" className="h-[200px] lg:min-h-[350px] object-cover" /> */}
        </div>
    );
}



export const ImageComponent = ({ image, myClassName }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#F4FBF8" highlightColor="#d1dbd7" className="w-[300px] h-[200px] lg:w-[500px] lg:h-[350px]" />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${myClassName}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}