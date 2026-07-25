/* ===========================================
                MENU TOGGLE
=========================================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

};

/* ===========================================
        ACTIVE NAVIGATION + STICKY HEADER
=========================================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');

        }

    });

    /* Sticky Header */

    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close Mobile Menu */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/* ===========================================
            TYPING ANIMATION
=========================================== */

const roles = [

    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "AI Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.querySelector(".multiple-text");

function typeEffect() {

    let current = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = current.substring(0, charIndex++);
    }
    else {

        typingText.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex++;

        if (roleIndex === roles.length) {

            roleIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/* ===========================================
        PROJECT CARD ANIMATION
=========================================== */

const cards = document.querySelectorAll('.project-box');

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

/* ===========================================
        SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================================
        BUTTON RIPPLE EFFECT
=========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        circle.style.position = "absolute";
        circle.style.width = "10px";
        circle.style.height = "10px";
        circle.style.borderRadius = "50%";
        circle.style.background = "white";
        circle.style.left = e.offsetX + "px";
        circle.style.top = e.offsetY + "px";
        circle.style.transform = "scale(0)";
        circle.style.opacity = "0.7";
        circle.style.transition = ".6s";

        this.appendChild(circle);

        setTimeout(() => {

            circle.style.transform = "scale(25)";
            circle.style.opacity = "0";

        }, 10);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/* ===========================================
        SCROLL TO TOP BUTTON
=========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

/* ===========================================
        PAGE LOADED
=========================================== */

window.onload = () => {

    console.log("Portfolio Loaded Successfully 🚀");

};