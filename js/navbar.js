// Declaring DOM Elements
let [navbar] = document.getElementsByClassName("navbar");
let [toggler] = document.getElementsByClassName("navbar-toggler");
let [navShow] = document.getElementsByClassName("navbar-collapse");
let logo = document.getElementById("logo");

//Listener to control the Navbar on Scroll
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-white");
        navbar.classList.add("navbar-shadow");
        logo.src = "./assets/splogodark.png";
    } else {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-white");
        navbar.classList.remove("navbar-shadow");
        logo.src = "./assets/splogolight.png";
    }
});

// Listener to control navbar background onClick for mobile devices
toggler.addEventListener("click", () => {
    if (!navShow.classList.contains("show")) {
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-white");
    }
});