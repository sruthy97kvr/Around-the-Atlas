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


    
    //chat bot
        const chatbotToggle = document.getElementById("chatbotToggle");
        const chatbotModal = document.getElementById("chatbotModal");
        const closeChatbot = document.getElementById("closeChatbot");
        const chatInput = document.getElementById("chatInput");
        const chatBody = document.querySelector(".chatbot-body");
        const sendBtn = document.getElementById("sendBtn");

        // Toggle chatbot modal visibility
        chatbotToggle.addEventListener("click", () => {
            chatbotModal.style.display = chatbotModal.style.display === "block" ? "none" : "block";
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
   