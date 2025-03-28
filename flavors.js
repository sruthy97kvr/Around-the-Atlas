gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({ default: { duration: 1 } });
t1.from(".navbar", { y: -30, opacity: 0, duration: 0.8 })
  .from(".logo", { x: -20, opacity: 0, stager: 0.1 })
  .from([".link1", ".link2", ".link3", ".link4", ".link5"], {
    opacity: 0,
    stagger: 0.3,
  })
  .from(".main-text h1", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })
  .from(".gif1", {
    y: "10vh",
    opacity: 0,
    rotate: 360,
    ease: "ease-in",
    duration: 0.5,
  })
  .from(".main-img", { y: -20, opacity: 0, duration: 0.5 });

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s1",
    start: "top 80%",
    markers: false,
  },
});

t2.from(".mainHeading2", {
  y: -20,
  opacity: 0,
  scale: 1.1,
  duration: 0.8,
  ease: "slow",
})
  .from(".text-end", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.8,
    ease: "slow",
  })
  .from(".p1", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.9,
    ease: "slow",
  })

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s2",
    start: "top 60%",
    markers: false,
  },
});

t3.from(".subHeading1", {
    y: -8,
    opacity: 0,
    duration: 1,
    ease: "slow",
  })
  .from(".icon1", {
    y: 30,
    opacity: 0,
    rotate: 360,
    duration: 1,
    ease: "ease-in",
  })
  .from(".p2", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.5,
    ease: "slow",
  })
  .from(".img1", {
    x: 20,
    opacity: 0,
    duration: 1,
    ease: "easeInOutQuart",
  })

  let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s3",
    start: "top 80%",
    markers: false,
  },
});

t4.from(".subHeading2", {
    y: -8,
    opacity: 0,
    duration: 1,
    ease: "slow",
  })
  .from(".p3", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.5,
    ease: "slow",
  })
  .from(".img2", {
    x: -20,
    opacity: 0,
    duration: 1,
    ease: "easeInOutQuart",
  })

  let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s4",
    start: "top 80%",
    markers: false,
  },
});

t5.from(".subHeading3", {
    y: -8,
    opacity: 0,
    duration: 1,
    ease: "slow",
  })
  .from(".p4", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.5,
    ease: "slow",
  })
  .from(".img3", {
    x: 20,
    opacity: 0,
    duration: 1,
    ease: "easeInOutQuart",
  })

  let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s5",
    start: "top 80%",
    markers: false,
  },
});

t6.from(".subHeading4", {
    y: -8,
    opacity: 0,
    duration: 1,
    ease: "slow",
  })
  .from(".p5", {
    y: -20,
    opacity: 0,
    scale: 1.1,
    duration: 0.5,
    ease: "slow",
  })
  .from(".img4", {
    x: -20,
    opacity: 0,
    duration: 1,
    ease: "easeInOutQuart",
  });
