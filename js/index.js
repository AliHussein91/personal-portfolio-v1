// Getting Document Elements
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const collapseBtn = document.querySelector('[data-bs-toggle="collapse"]');
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const returnToTop = document.querySelector(".return-to-top");

// Adding black background to navbar on md, sm displays when expanded
collapseBtn.addEventListener("click", () => {
    if (!collapseBtn.classList.contains("collapsed")) {
        navbar.classList.add("bg-black");
    } else {
        navbar.classList.remove("bg-black");
    }
});


// Creating scroll spy effect and adding a back to top when scrolling down
window.addEventListener("scroll", (event) => {
    const navbarBounds = Math.round(
        Math.abs(document.querySelector("#home").getBoundingClientRect().top)
    );

    if (navbarBounds >= 80) {
        navbar.classList.add("bg-black");
        returnToTop.classList.remove("inactive");
    } else {
        navbar.classList.remove("bg-black");
        returnToTop.classList.add("inactive");
    }

    sections.forEach((section) => {
        if (
            section.getBoundingClientRect().top <= 70 &&
            section.getBoundingClientRect().bottom >= 70
        ) {
            navLinks.forEach((link) => {
                if (link.getAttribute("href") == `#${section.id}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
});
