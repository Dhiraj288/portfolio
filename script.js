const text = "CSE - Data Science Student";

let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();
// Scroll Reveal Animation

const sections = document.querySelectorAll(
    "#about, #skills, #education, #learning, #projects, #contact"
);

sections.forEach(section => {
    section.classList.add("reveal");
});

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();
// Active Navbar Link

const navLinks = document.querySelectorAll("nav ul li a");
const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});
// Back To Top Button

const topButton = document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
