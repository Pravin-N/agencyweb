const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".anim-span", 1.2,  {y: "0%", stagger: 0.3});
tl.to(".cover", 1, {y: "-100%", ease:Power1.easeIn, delay: 0.8});
tl.to(".intro-text", 0.19, {color: "transparent"}, '-=0.19');
tl.to(".intro", 0, {display: "none"})
tl.to(".cover", 0, {display: "none"})
