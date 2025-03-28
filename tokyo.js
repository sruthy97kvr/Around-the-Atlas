let tl = gsap.timeline(); //no camel casing
tl.from(".section .discover",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5

});

// tl.from(".section .heading",{
//     x:500,
//     opacity:0,
//     duration:1,
//     delay:0.5

// });
tl.to(".japan-path", {
    strokeDashoffset: 0, 
    duration: 4.5, 
    ease: "power1.inOut" 
});

tl.from(".imgflag",{
    x:100,
    opacity:0,
    duration: 0.5,  
    // delay: 0.2 
})

tl.from(".img1",{
    x: -100,
    opacity:0,
    duration: 0.5,  
    // delay: 0.2 
})




gsap.from(".box1", {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    stagger: { amount: 1, grid: "auto", from: "center" },
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".grid",  
        start: "top 80%",  
        toggleActions: "play none none none"
    }
});


gsap.from(".gallery-container img", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    stagger: 0.2, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".gallery-container",  
        start: "top 80%",  
        toggleActions: "play none none none"
    }
});

gsap.from(".foodcontent1",{
    y:-100,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".foodcontent1",  
        start: "top 60%",  
        toggleActions: "play none none none"
    }
    
})

gsap.from(".food2content",{
    x:-100,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".food2content",  
        start: "top 60%",  
        toggleActions: "play none none none"
    }
    
})
gsap.from(".p3",{
    x:100,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".contents",  
        start: "top 100%",  
        toggleActions: "play none none none"
    }
    
})



gsap.utils.toArray(".card").forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".card",
            start: "top 60%",  
            toggleActions: "play none none none"
        },
        delay: index * 0.2 
});
});