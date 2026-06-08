// Scroll Navbar

window.addEventListener("scroll", function (){

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    } 

});


// Menu Toggle 

// Eta jodi ami use kori font awesome

// const menuToggle = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector("#nav-menu");
// const menuIcon = document.querySelector(".menu-toggle i");

// menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//     menuIcon.classList.toggle("fa-bars");
//     menuIcon.classList.toggle("fa-xmark");
// });


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});