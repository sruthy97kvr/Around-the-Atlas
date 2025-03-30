 // Intersection Observer API for animations on scroll
        document.addEventListener("DOMContentLoaded", function () {
            const cards = document.querySelectorAll(".card");

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // Stop observing after it appears
                    }
                });
            }, { threshold: 0.2 });

            cards.forEach(card => {
                observer.observe(card);
            });
        });


//Swiper JS cards swiper configurations
  var swiper = new Swiper(".mySwiper", {
    effect: "cards", //apply stacking cards effect
    grabCursor: true,//change cursor to grab
    autoplay: {
      delay: 3000, //delay the cards swipe motion
      disableOnInteraction: false, //to avoid stopping autoplay on user interaction
    },
    loop: true, //for infinite loop
  });
