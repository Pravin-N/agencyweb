const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
gsap.registerPlugin(ScrollTrigger);

tl.to(".anim-span", 1, { y: "0%", stagger: 0.3, delay: 0.2 });
tl.to(".cover", 1, { y: "-100%", ease: Power1.easeIn, delay: 0.4 });
tl.to(".intro-text", 0.19, { color: "transparent" }, "-=0.19");
tl.to(".intro", 0, { display: "none" });
tl.to(".cover", 0, { display: "none" });

gsap.to(".reveal-1", {
  opacity: 1,
  duration: 1.2,
  scrollTrigger: ".reveal-1",
  ease: "power1.out",
  stagger: 0.3,
});

gsap.to(".reveal-2", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: ".reveal-2",
  ease: "power1.out",
  stagger: 0.3,
});

gsap.to(".reveal-3", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: ".reveal-3",
  ease: "power1.out",
  stagger: 0.3,
});

gsap.to(".reveal-4", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: ".reveal-4",
  ease: "power1.out",
  stagger: 0.3,
});

gsap.to(".reveal-5", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: ".reveal-5",
  ease: "power1.out",
  stagger: 0.3,
});

gsap.to(".reveal-6", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: ".reveal-6",
  ease: "power1.out",
  stagger: 0.3,
});
