import { useEffect, useRef, useState } from "react";

import Icon1 from "../../../assets/images/updated/service/web-icon.svg"
import Icon2 from "../../../assets/images/updated/service/mobile-icon.svg"
import Icon3 from "../../../assets/images/updated/service/design.svg"
import Icon4 from "../../../assets/images/updated/service/testing.svg"
import Icon5 from "../../../assets/images/updated/service/cloud.svg"
import Icon6 from "../../../assets/images/updated/service/devops.svg"
import Icon7 from "../../../assets/images/updated/service/database.svg"
import Icon8 from "../../../assets/images/updated/service/custom-icon.svg"

import Image1 from "../../../assets/images/services/Vibrant.svg"
import Image2 from "../../../assets/images/services/SmartFarm.svg"

import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ImageComponent } from "../../components/MarqueeSection";
import { animateHeroTitle } from "../../../global-animations/animation";
import gsap from "gsap";


export const ServicesItem = ({ title, icon, projectImage, projectDescription, projectName, subTitle, description, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const heroRef = useRef(null);
    const timeline = useRef(gsap.timeline());
    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;

            tl
                .add(animateHeroTitle(), "=+10%")

        }, heroRef);
        return () => context.revert();
    }, []);

    return (
        <div ref={heroRef} className="w-full  hover:bg-[#F4FBF8] border-b" data-text-animation>
            <button className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-center p-4 lg:p-6">
                    <div className="flex justify-center items-center gap-4">
                        <div className="">
                            {icon}
                        </div>
                        <p className="text-2xl lg:text-[40px] font-semibold text-[#0F241B] w-full">{title}</p>
                    </div>
                    <div className="leading-none text-sm text-right transform transition-transform duration-300">
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
            link: "/vibrant",
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
            link: "/smart-farm",
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
        {
            title: "Testing & QA",
            icon: <><img src={Icon4} alt="" className="w-15 h-15" /></>,
            subTitle: "BULLETPROOF SOFTWARE",
            description: <div>
                <p className="mont-regular">We ensure your software operates flawlessly, just like your reliable morning alarm.</p>
                <p className="mont-regular mt-4">Quality assurance is the backbone of successful software development. We leave no stone unturned in scrutinizing every component of your application, ensuring flawless functionality.</p>
                <p className="mont-regular mt-4">Our meticulous testing processes guarantee that your software, developed with various ‘programming languages’, operates seamlessly, providing a reliable experience to your users.</p>
            </div>,
            projectImage: "",
            projectDescription: "",
            projectName: "",
            link: "",
        },
        {
            title: "Cloud computing",
            icon: <><img src={Icon5} alt="" className="w-15 h-15" /></>,
            subTitle: "EFFICIENT DATA MANAGEMENT",
            description: <div>
                <p className="mont-regular">We empower you with flexible and accessible data solutions. Have your data accessible from anywhere, just like your favorite e-book that you can read on any device.</p>
                <p className="mont-regular mt-4">Empower your organization with flexible and scalable cloud computing solutions. Whether you need Software as a Service (SaaS), Platform as a Service (PaaS), or Infrastructure as a Service (IaaS), we're equipped to configure and manage cloud solutions tailored to your unique requirements. Harness the power of the cloud to streamline data storage and accessibility.</p>
            </div>,
            projectImage: "",
            projectDescription: "",
            projectName: "",
            link: "",
        },
        {
            title: "DevOps",
            icon: <><img src={Icon6} alt="" className="w-15 h-15" /></>,
            subTitle: "STREAMLINED SOFTWARE DELIVERY",
            description: <div>
                <p className="mont-regular">We accelerate software delivery and optimization. Our practices make sure your software reaches its destination faster and with fewer hiccups.</p>
                <p className="mont-regular mt-4">Streamline your software development life cycle with our DevOps practices. We merge software development and IT operations to accelerate delivery, enhance software quality, and foster continuous improvement.</p>
                <p className="mont-regular mt-4">Our integrated approach, aligned with Agile principles and ‘various programming languages’, optimizes your software development processes for efficiency and excellence.</p>
                <p className="mont-regular"></p>
            </div>,
            projectImage: "",
            projectDescription: "",
            projectName: "",
            link: "",
        },
        {
            title: "Database Design",
            icon: <><img src={Icon7} alt="" className="w-15 h-15" /></>,
            subTitle: "SMART DATA ORGANIZATION",
            description: <div>
                <p className="mont-regular">We efficiently organize and manage your data, like a well-organized library. You can find any book (or data) you need in an instant.</p>
                <p className="mont-regular mt-4">Effective database design is the backbone of a well-functioning application. Our database design services focus on creating efficient, scalable, and secure database systems. We employ data modeling, indexing, and query optimization, ensuring your application's data management, utilizing ‘various programming languages’, is robust and reliable.</p>
                <p className="mont-regular"></p>
            </div>,
            projectImage: "",
            projectDescription: "",
            projectName: "",
            link: "",
        },
        {
            title: "Custom Offers",
            icon: <><img src={Icon8} alt="" className="w-15 h-15" /></>,
            subTitle: "YOUR UNIQUE SOFTWARE",
            description: <div>
                <p className="mont-regular ">We create software solutions to fit you perfectly—bet no one else in the world has one quite like it</p>
                <p className="mont-regular mt-4">Recognizing the uniqueness of every business, we offer custom solutions tailored precisely to your needs. Our collaborative approach involves deeply understanding your business objectives, challenges, and vision. Based on this knowledge, we craft bespoke software solutions that address your specific requirements, whether you're launching a groundbreaking startup or optimizing an established enterprise.</p>
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
                    link={item.link}
                />
            ))}
        </div>
    );
};