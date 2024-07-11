import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Navbar from '../../global-components/NavBar';
import Lenis from 'lenis';
import Footer from '../../global-components/Footer';
import { useNavigate } from 'react-router';
import gsap from 'gsap';
import { animateHeroTitle } from '../../global-animations/animation';

const ContactForm = () => {
    const heroRef = useRef(null);
    const timeline = useRef(gsap.timeline());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;

            tl
                .add(animateHeroTitle(), "=+10%")

        }, heroRef);
        return () => context.revert();
    }, []);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        country: '',
        budget: '',
        other: '',
        services: [],
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => {
                const newServices = checked
                    ? [...prevData.services, value]
                    : prevData.services.filter((service) => service !== value);
                return { ...prevData, services: newServices };
            });
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.userName) formErrors.userName = 'Name is a required field.';
        if (!formData.email) formErrors.email = 'Email is a required field.';
        if (!validateEmail(formData.email)) formErrors.email = 'Please enter a valid email address!';
        if (!formData.country) formErrors.country = 'Country is a required field.';
        if (!formData.other) {
            formErrors.other = 'Please add a few details about your project';
        } else {
            const wordCount = formData.other.trim().split(/\s+/).length;
            if (wordCount < 20) formErrors.other = 'Please enter at least 20 words.';
        }
        if (!formData.budget) formErrors.budget = 'Budget is a required field.';
        if (formData.services.length === 0) formErrors.services = 'Select at least one option.';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendMail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        const params = {
            userName: formData.userName,
            email: formData.email,
            country: formData.country,
            other: formData.other,
            budget: formData.budget,
            services: formData.services.join(', '),
        };

        const serviceID = 'service_15dz7io';
        const templateID = 'template_kl4mi9m';


        emailjs
            .send(serviceID, templateID, params, {
                publicKey: '_su5rzwBk-LUIbTdL'
            })
            .then((res) => {
                setFormData({
                    userName: '',
                    email: '',
                    country: '',
                    budget: '',
                    other: '',
                    services: [],
                });
                setLoading(false);
                navigate('/success');
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <>
            <div className='bg-[#F4FBF8]' ref={heroRef}>
                <Navbar />
                <section className='pt-10 lg:pt-20'>
                    <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                        <div className="flex items-center justify-center lg:flex-row">
                            <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                                <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                    <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]" data-text-animation>
                                        Tell us about your project
                                    </h2>

                                    <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                        We do custom software right and can't wait to work with you. Your project will shine with our expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div className="space-y-10 divide-y divide-gray-900/10">
                    <div className="flex justify-center">
                        <form className="md:col-span-2 bg-white" id="contact_form" onSubmit={sendMail}>
                            <div className="px-4 py-6 sm:p-8">
                                <div className="flex flex-col gap-5">
                                    <div className="sm:col-span-8">
                                        <label htmlFor="userName" className="block text-lg leading-6 text-gray-900" data-text-animation>
                                            Your full name? *
                                        </label>
                                        <div className="mt-2" data-text-animation>
                                            <input
                                                type="text"
                                                required
                                                id="userName"
                                                name="userName"
                                                placeholder="John Doe"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5E0E] sm:text-sm sm:leading-6"
                                                value={formData.userName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.userName && <div className="error-message text-red-500">{errors.userName}</div>}
                                    </div>

                                    <div className="sm:col-span-8" data-text-animation>
                                        <label htmlFor="email" className="block mb-2 text-lg leading-6 text-gray-900">
                                            Your email? *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            id="email"
                                            placeholder="email@email.com"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5E0E] sm:text-sm sm:leading-6"
                                            value={formData.email}
                                            onChange={handleChange}
                                            data-text-animation
                                        />
                                        {errors.email && <div className="error-message text-red-500">{errors.email}</div>}
                                    </div>

                                    <div className="sm:col-span-8">
                                        <label htmlFor="country" className="block mb-2 text-lg leading-6 text-gray-900" data-text-animation>
                                            Your Country? *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            name="country"
                                            id="country"
                                            placeholder="Kenya"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5E0E] sm:text-sm sm:leading-6"
                                            value={formData.country}
                                            onChange={handleChange}
                                            data-text-animation
                                        />
                                        {errors.country && <div className="error-message text-red-500">{errors.country}</div>}
                                    </div>

                                    <div className="sm:col-span-8">
                                        <label htmlFor="checkboxGroup" className="block text-lg leading-6 text-gray-900 mb-4" data-text-animation>
                                            What solutions do you need today?*
                                        </label>
                                        {[
                                            'Web-app-development',
                                            'Mobile app development',
                                            'Intuitive User Experiences(UI/UX)',
                                            'Bulletproof Software (Testing and QA)',
                                            'Efficient Data Management (Cloud Computing)',
                                            'Smart Data Organization (DB Design)',
                                            'Streamlined Software Delivery (DevOps)',
                                            'Other (Your Unique Software)',
                                        ].map((service, index) => (
                                            <div className="flex items-center gap-3 mb-2" key={index} data-text-animation>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox${index + 1}`}
                                                    name="checkboxGroup"
                                                    value={service}
                                                    className="h-5 w-5 text-[#307457] focus:outline-none focus:ring-2 ring-[#307457]"
                                                    checked={formData.services.includes(service)}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`checkbox${index + 1}`} className="text-base lg:text-xl mont-regular">
                                                    {service}
                                                </label>
                                            </div>
                                        ))}
                                        {errors.services && <div className="error-message text-red-500">{errors.services}</div>}
                                    </div>

                                    <div className="col-span-8">
                                        <label htmlFor="other" className="block text-xl leading-6 text-gray-900" data-text-animation>
                                            Please describe your projects in a few words?*
                                        </label>
                                        <span className="italic text-gray-500" data-text-animation>(Minimum of 20 words)</span>
                                        <div className="mt-4" data-text-animation>
                                            <textarea
                                                id="other"
                                                required
                                                placeholder="Type something here..."
                                                name="other"
                                                rows="5"
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5E0E]sm:text-sm sm:leading-6"
                                                value={formData.other}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        {errors.other && <div className="error-message text-red-500">{errors.other}</div>}
                                    </div>

                                    <div className="col-span-8 relative w-full">
                                        <label htmlFor="budget" className="mb-4 block text-xl leading-6 text-gray-900" data-text-animation>
                                            What is your estimated budget for this project?*
                                        </label>
                                        <select
                                            id="budget"
                                            required
                                            name="budget"
                                            className="px-2 rounded-md text-xl h-10 w-full border-2 mont-regular border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:border-[#FF5E0E]"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            data-text-animation
                                        >
                                            <option value="" disabled selected className="text-gray-400 mont-regular">
                                                Select your budget range
                                            </option>
                                            <option value="$20,000 and above">$20,000 and above</option>
                                            <option value="$10,000">$10,000</option>
                                            <option value="$5000 and below">$5000 and below</option>
                                        </select>
                                        {errors.budget && <div className="error-message text-red-500">{errors.budget}</div>}
                                    </div>

                                    <div className="l:px-8 col-span-8">
                                        <button
                                            type="submit"
                                            id="loaderButton"
                                            className="relative text-white inline-flex items-center justify-center w-full h-16 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-[#FF5E0E] hover:bg-[#307457]"
                                        >
                                            <span id="buttonText">Talk to Us</span>
                                            {loading && (
                                                <div id="loader" className="absolute inset-0 items-center justify-center flex">
                                                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default ContactForm;
