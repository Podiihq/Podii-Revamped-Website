import gsap from "gsap";

export const animateHeroTitle = () => {
    const animateTexts = [...document.querySelectorAll("[data-text-animation]")]
    const tl = gsap.timeline({
        ease: "power3.in",
        duration: 2,
        stagger: 0.04

    });


    animateTexts.forEach(item => {
        tl.fromTo(item,
            {
                y: 32,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            }, "<30%")
    })


    return tl;
}

