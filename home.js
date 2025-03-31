
// Intersection Observer API for animations on scroll
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing after it appears
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

//Swiper JS cards swiper configurations
var swiper = new Swiper(".mySwiper", {
  effect: "cards", //apply stacking cards effect
  grabCursor: true, //change cursor to grab
  autoplay: {
    delay: 3000, //delay the cards swipe motion
    disableOnInteraction: false, //to avoid stopping autoplay on user interaction
  },
  loop: true, //for infinite loop
});

//chat bot
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotModal = document.getElementById("chatbotModal");
const closeChatbot = document.getElementById("closeChatbot");
const chatInput = document.getElementById("chatInput");
const chatBody = document.querySelector(".chatbot-body");
const sendBtn = document.getElementById("sendBtn");

// Toggle chatbot modal visibility
chatbotToggle.addEventListener("click", () => {
  chatbotModal.style.display =
    chatbotModal.style.display === "block" ? "none" : "block";
});

// Close chatbot modal
closeChatbot.addEventListener("click", () => {
  chatbotModal.style.display = "none";
});

// Send message
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (userMessage === "") return;

  // Add user message to chat
  chatBody.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;
  chatInput.value = "";

  // Auto-reply from bot
  setTimeout(() => {
    chatBody.innerHTML += `<p><b>Bot:</b> Thanks for your message! 😊</p>`;
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to latest message
  }, 1000);
}

//homepage animations
gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({ default: { duration: 1 } });
t1.from(".navbar", { y: -30, opacity: 0, duration: 0.8 })

  .from("#videoCarousel", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".editor-choice",
    start: "top 80%",
    markers: false,
  },
});

t2.from(".editor-choice h1", {
  y: "-10vh",
  opacity: 0,
  ease: "ease-in",
  duration: 0.5,
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".article-section",
    start: "top 85%",
    markers: false,
  },
});

t3.from(".article-section h1", {
  y: "-10vh",
  opacity: 0,
  ease: "ease-in",
  duration: 1,
})

  .from(".gallery .c1", {
    y: "10",
    rotate: 45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.7,
    
  })
  .from(".gallery .c2", {
    y: "10",
    rotate: -45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.7,
  })
  .from(".gallery .c3", {
    y: "10",
    rotate: 45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.7,
  })
  .from(".gallery .c4", {
    y: "-10vh",
    rotate: -45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.7,
  });


  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".collage-section",
      start: "top 80%",
      markers: false,
    },
  });

t4.from(".collage-section h1", {
  y: "-10vh",
  opacity: 0,
  ease: "ease-in",
  duration: 1,
});


let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".foodArticle-section",
    start: "top 90%",
    markers: false,
  },
});

t5.from(".foodArticle-section h1", {
  y: "-10vh",
  opacity: 0,
  ease: "ease-in",
  duration: 1,
})

  .from(".gallery .c5", {
    y: "10",
    rotate: 45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  })
  .from(".gallery .c6", {
    y: "10",
    rotate: -45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  })
  .from(".gallery .c7", {
    y: "10",
    rotate: 45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  })
  .from(".gallery .c8", {
    y: "-10vh",
    rotate: -45,
    scale: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  });


  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".info-section",
      start: "top 80%",
      markers: false,
    },
  });

  t6.from(".info-section .travel-tips-section .head1", {
     x: "-10vw",
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  });

  t6.from(".info-section .travel-essentials-section .head2", {
    x: "10vw",
    opacity: 0,
    ease: "ease-in",
    duration: 0.8,
  });
  t6.from(".info-section .travel-tips-section p", {
     y: "10vh",
    opacity: 0,
    ease: "ease-in",
    duration: 0.4,
  });

  t6.from(".info-section .travel-essentials-section p", {
    y: "10vh",
    opacity: 0,
    ease: "ease-in",
    duration: 0.4,
  });

 
let t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".quiz-section",
    start: "top 80%",
    markers: false,
  },
});

t7.from(".quiz-container", {
  y: "40vh",
  opacity: 0,
  ease: "ease-in",
  duration: 0.6,
});