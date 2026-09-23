```javascript
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ========================================
// PLAY BUTTONS
// ========================================

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Highlight video coming soon! Replace this area with your match footage."
        );

    });

});


// ========================================
// NAVBAR EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7, 9, 9, 0.97)";
    } else {
        navbar.style.background = "rgba(7, 9, 9, 0.85)";
    }

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .attribute-card, .style-item, .video-card, .about-main, .about-details"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


console.log("Football website loaded successfully ⚽");
```
