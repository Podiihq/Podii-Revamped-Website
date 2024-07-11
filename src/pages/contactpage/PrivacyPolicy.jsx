import React, { useEffect } from 'react'
import Navbar from '../../global-components/NavBar'
import Footer from '../../global-components/Footer'
import Lenis from 'lenis';

const PrivacyPolicy = () => {
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
    return (
        <div>
            <Navbar />
            <section className="lg:pt-8 text-[#0F241B]">
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-8 pt-8 lg:pt-32">
                    <div className="max-w-4xl mb-6 mt-16 md:mt-4 md:text-left">
                        <h2
                            className="mb-3 lg:mb-8 font-sans text-3xl lg:text-[48px] font-semibold tracking-wide sm:leading-none text-[#307457]">
                            Privacy Policy
                        </h2>
                        <p className="text-xl">
                            Users are responsible for any third-party Personal Data obtained, published or shared through Podii Website.
                        </p>
                        <p className="font-semibold text-xl mt-6">Information We Collect</p>
                        <p className="text-xl mont-regular">
                            We may collect and process the following types of information:
                        </p>
                        <p className="font-semibold text-xl mt-6">Personal Information</p>
                        <p className="text-xl mont-regular">
                            Contact Information: We may collect your name, email address, phone number, and other contact details when you provide them through our contact forms or when you reach out to us.
                        </p>
                        <p className="text-xl mt-2 mont-regular">
                            This information may be used to address your inquiries and provide assistance.
                        </p>
                        <p className="font-semibold text-xl mt-6">Cookies and Tracking</p>
                        <p className="text-xl mont-regular">
                            We use cookies and similar tracking technologies to enhance your experience on our Website and for analytical purposes. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                        </p>
                        <p className="font-semibold text-xl mt-6">How We Use Your Information</p>
                        <p className="text-xl mont-regular">We may use the information we collect for the following purposes:</p>
                        <ul className="mt-2">
                            <li className="text-xl list-disc ml-4 mont-regular">To provide and improve our services.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">To respond to your inquiries and requests.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">To monitor and analyze website usage.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">To comply with legal obligations.</li>
                        </ul>
                        <p className="font-semibold text-xl mt-6">
                            These are your rights regarding your personal information:
                        </p>
                        <ul className="mt-2 mont-regular">
                            <li className="text-xl list-disc ml-4 mont-regular">Access: You can request access to the personal information we hold about you.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">Rectification: You can request the correction of inaccurate or incomplete data.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">Erasure: You can request the deletion of your personal data.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">Data Portability: You can request the transfer of your data to another party.</li>
                            <li className="text-xl list-disc ml-4 mont-regular">Withdraw Consent: You can withdraw your consent for processing your data.</li>
                        </ul>
                        <p className="font-semibold text-xl mt-6">Security</p>
                        <p className="text-xl mont-regular">
                            We use reasonable and appropriate measures to protect your information, but please be aware that no data transmission over the internet can be guaranteed to be 100% secure.
                        </p>
                        <p className="font-semibold text-xl mt-6">Changes to this Privacy Policy</p>
                        <p className="text-xl mont-regular">
                            We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                        </p>
                        <p className="font-semibold text-xl mt-6">Contact Us</p>
                        <p className="text-xl mont-regular">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
                            <span className="underline font-semibold text-[#307457]">podii@podiihq.com</span>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy