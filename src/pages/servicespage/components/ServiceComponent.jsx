import { useRef, useState } from "react";

import Icon1 from "../../../assets/images/updated/service/web-icon.svg"
import Icon2 from "../../../assets/images/updated/service/mobile-icon.svg"
import Icon3 from "../../../assets/images/updated/service/custom-icon.svg"
import Icon4 from "../../../assets/images/updated/service/design.svg"
import Icon5 from "../../../assets/images/updated/service/testing.svg"
import Icon6 from "../../../assets/images/updated/service/cloud.svg"

import Image1 from "../../../assets/images/services/Vibrant.svg"
import Image2 from "../../../assets/images/services/SmartFarm.svg"

import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ImageComponent } from "../../components/MarqueeSection";


export const ServicesItem = ({ title, icon, projectImage, projectDescription, projectName, subTitle, description, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="w-full  hover:bg-[#F4FBF8] border-b">
            <button className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-center p-4 lg:p-6">
                    <div className="flex justify-center items-center gap-4">
                        <div className="">
                            {icon}
                        </div>
                        <p className="text-2xl lg:text-[40px] font-semibold text-[#0F241B] w-full">{title}</p>
                    </div>
                    <div className="leading-none text-xl text-right transform transition-transform duration-300">
                        {isOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                    </div>
                </div>
            </button>
            <div
                ref={contentRef}
                className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
            >
                <div className="pl-4 lg:pl-10 mb-10 flex flex-col lg:flex-row">
                    <div className="">
                        <p className="text-[18px] lg:text-[24px] uppercase font-semibold my-4 text-[#307457] mb-4">{subTitle}</p>
                        <div className="lg:w-10/12">
                            <p className="text-base lg:text-xl text-[#0F241B] mont-regular">{description}</p>
                        </div>
                    </div>
                    <div className="px-4 py-4 shadow-md rounded-lg duration-300 transform hover:-translate-y-2 lg:mx-4 mt-4">
                        <Link to={link} className="flex gap-4 items-center lg:block">
                            <div>
                                {projectImage}
                            </div>
                            <p className="text-base lg:text-md lg:mt-4 w-full leading-tight mont-regular">{projectDescription}
                                <span className="italic underline text-[#307457]">{projectName}</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;

export const ServicesComponent = () => {
    const faqs = [
        {
            title: "Web Development",
            icon: <><img src={Icon1} alt="" className="w-15 h-15" /></>,
            subTitle: "YOUR ONLINE TOOLS & SYSTEMS",
            description: <div>
                <p className="mont-regular">We tailor your web apps to make your work easier. It's like a perfect tool for every job, designed uniquely for your business needs.</p>
                <p className="mont-regular mt-4">At Podii, we excel in crafting robust web applications and corporate systems using a wide range of ‘programming languages’, including HTML/CSS and JavaScript. These applications are tailored seamlessly to your unique needs, from dynamic e-commerce platforms to internal management systems.</p>
                <p className="mont-regular mt-4">Our expert team collaborates closely with you throughout the entire journey, from conceptualization to development, making your web application aspirations a reality.</p>
            </div>,
            projectImage: <ImageComponent image={Image1} alt="" myClassName={"lg:w-full rounded-lg w-24"} />,
            projectDescription: "Learn more about how we approach web development with the",
            projectName: "Vibrant Village case study",
            link: "#",
        },
        {
            title: "Mobile Development",
            icon: <><img src={Icon2} alt="" className="w-15 h-15" /></>,
            subTitle: "APPS FOR EVERY DEVICE",
            description: <div>
                <p className="mont-regular">We're all about crafting mobile apps that run smoothly on any device</p>
                <p className="mont-regular mt-4">Our mobile application development services revolve around creating user-friendly solutions that run seamlessly on various mobile devices. We specialize in iOS, Android, and cross-platform React Native apps.</p>
                <p className="mont-regular mt-4">Whether you're a startup with a groundbreaking concept or an established business expanding your mobile presence, we're here to bring your ideas to life.</p>
            </div>,
            projectImage: <ImageComponent image={Image2} alt="" myClassName={"lg:w-full rounded-lg w-24"} />,
            projectDescription: "Learn more about how we do mobile development with the",
            projectName: "Smart Farm case study",
            link: "#",
        },
        {
            title: "UX/UI Design",
            icon: <><img src={Icon3} alt="" className="w-15 h-15" /></>,
            subTitle: "INTUITIVE USER EXPERIENCES",
            description: <div>
                <p className="mont-regular">We design interfaces that provide a warm welcome and easy navigation.</p>
                <p className="mont-regular mt-4">User experience (UX) is at the heart of our UI/UX design philosophy. We believe in crafting interfaces that not only look appealing but also function intuitively. Our designs are rooted in usability, usefulness, and desirability.</p>
                <p className="mont-regular mt-4">When users interact with your application, they'll experience a seamless and delightful journey, leaving a lasting positive impression.</p>
            </div>,
            projectImage: "",
            projectDescription: "",
            projectName: "",
            link: "",
        },


    ];

    return (
        <div className="mt-4 lg:mt-8">
            {faqs.map((item, index) => (
                <ServicesItem key={index}
                    title={item.title}
                    icon={item.icon}
                    subTitle={item.subTitle}
                    description={item.description}
                    projectImage={item.projectImage}
                    projectDescription={item.projectDescription}
                    projectName={item.projectName}
                />
            ))}
        </div>
    );
};