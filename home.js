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
    