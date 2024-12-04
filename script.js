// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Swiper.js Initialization
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Contact Form Submission
document.querySelector("#contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://api.example.com/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert("Bericht verzonden!");
        } else {
            alert("Er is een fout opgetreden.");
        }
    } catch (error) {
        alert("Kon geen verbinding maken met de server.");
    }
});
