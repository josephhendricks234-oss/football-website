const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


// Mobile menu

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// Navbar changes slightly when scrolling

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.style.background = "rgba(7, 9, 9, 0.96)";
    } else {
        navbar.style.background = "rgba(7, 9, 9, 0.8)";
    }

});