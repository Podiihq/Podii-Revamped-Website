
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})






// Hero Marquee

const off = 10;
let l = off;
const marqueeElements = Array.from(document.querySelectorAll('.marquee img'));
const speed = 0.5;
const stack = [];
let pause = false;

marqueeElements.forEach(element => {
    const width = element.offsetWidth + off;
    element.style.left = `${l}px`;
    l += width;
    stack.push(element);
});

function moveMarquee() {
    if (!pause) {
        marqueeElements.forEach(element => {
            const currentLeft = parseFloat(getComputedStyle(element).left);
            const newLeft = currentLeft - speed;
            element.style.left = `${newLeft}px`;

            if (newLeft + element.offsetWidth < -130) {
                const firstElement = stack.shift();
                const lastElement = stack[stack.length - 1];
                element.style.left = `${parseFloat(getComputedStyle(lastElement).left) + lastElement.offsetWidth + off}px`;
                stack.push(element);
            }
        });
    }
    requestAnimationFrame(moveMarquee);
}

requestAnimationFrame(moveMarquee);

const marqueeContainer = document.querySelector('.marquee');
marqueeContainer.addEventListener('mouseover', () => {
    pause = true;
});
marqueeContainer.addEventListener('mouseout', () => {
    pause = false;
});
