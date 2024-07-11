import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { useNavigate } from 'react-router';

const ContactMiniForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        services: '',
        budget: ''
    });

    const [errors, setErrors] = useState({
        userName: '',
        email: '',
        services: '',
        budget: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { userName, email, services, budget } = formData;
        let valid = true;
        let newErrors = { userName: '', email: '', services: '', budget: '' };

        if (userName === '') {
            newErrors.userName = 'Name is a required field.';
            valid = false;
        }

        if (email === '') {
            newErrors.email = 'Email is a required field.';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address!';
            valid = false;
        }

        if (services === '') {
            newErrors.services = 'Services is a required field.';
            valid = false;
        }

        if (budget === '') {
            newErrors.budget = 'Budget is a required field.';
            valid = false;
        }

        setErrors(newErrors);

        if (!valid) {
            return;
        }

        setLoading(true);

        const serviceID = 'service_15dz7io';
        const templateID = 'template_kl4mi9m';

        emailjs.send(serviceID, templateID, formData, {
            publicKey: '_su5rzwBk-LUIbTdL'
        })
            .then(res => {
                setFormData({
                    userName: '',
                    email: '',
                    services: '',
                    budget: ''
                });
                setLoading(false);
                navigate('/success');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };
    return (
        <div className="px-4 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative z-10">
            <section className="flex justify-center items-center">
                <div className="w-full">
                    <div className="px-4 bg-white p-10 lg:p-20 border-[#307457] border-2 rounded-3xl">
                        <div>
                            <h1 className="text-2xl lg:text-[32px] text-left font-medium">
                                Let your ideas shine too!
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="lg:py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 lg:flex items-center gap-20">
                                    <div className="relative mt-8 lg:mt-4 w-full">
                                        <input
                                            autoComplete="off"
                                            id="userName"
                                            name="userName"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-[#307457] text-gray-900 focus:outline-none"
                                            placeholder="Full Name"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label
                                            htmlFor="userName"
                                            className="absolute left-0 -top-3.5 text-[#A7B8B1] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Full Name
                                        </label>
                                        {errors.userName && <div className="error-message text-red-500">{errors.userName}</div>}
                                    </div>
                                    <div className="relative w-full mt-8">
                                        <input
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-[#307457] text-gray-900 focus:outline-none"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-[#A7B8B1] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email
                                        </label>
                                        {errors.email && <div className="error-message text-red-500">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="lg:flex gap-20">
                                    <div className="relative w-full">
                                        <select
                                            id="services"
                                            name="services"
                                            className="peer h-10 w-full border-b-2 border-[#307457] bg-transparent text-gray-900 focus:outline-none"
                                            value={formData.services}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled selected>Services</option>
                                            <option>Mobile App Development</option>
                                            <option>Web App Development</option>
                                            <option>Intuitive User Experiences (UI/UX)</option>
                                            <option>Bulletproof Software (Testing and QA)</option>
                                            <option>Efficient Data Management (Cloud Computing)</option>
                                            <option>Smart Data Organization (DB Design)</option>
                                            <option>Streamlined Software Delivery (DevOps)</option>
                                            <option>Other (Your Unique Software)</option>
                                        </select>
                                        {errors.services && <div className="error-message text-red-500">{errors.services}</div>}
                                    </div>
                                    <div className="relative w-full mb-6 mt-4 lg:mt-0">
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="peer h-10 w-full border-b-2 border-[#307457] bg-transparent text-gray-900 focus:outline-none"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled selected className="text-[#A7B8B1]">Budget</option>
                                            <option>$5000 and below</option>
                                            <option>$10,000</option>
                                            <option>$20,000 and above</option>
                                        </select>
                                        {errors.budget && <div className="error-message text-red-500">{errors.budget}</div>}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    id="loaderButton"
                                    className="relative text-white inline-flex items-center justify-center w-full h-12 lg:h-16 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-[#FF5E0E] hover:bg-[#307457]"
                                >
                                    <span id="buttonText" className={`${loading ? 'hidden' : ''}`}>Talk to Us</span>
                                    {loading && (
                                        <div id="loader" className="absolute inset-0 items-center justify-center flex">
                                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactMiniForm