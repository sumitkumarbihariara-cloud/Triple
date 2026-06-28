// ==========================
// LOADER
// ==========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1200);
    }
});

// ==========================
// TYPING EFFECT
// ==========================

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Student",
    "UI Designer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    } else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.onclick = function(){

document.body.classList.toggle("dark");

};

}

// ==========================
// SCROLL TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

if(topBtn){

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ==========================
// ACTIVE MENU
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// CONTACT FORM
// ==========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

form.reset();

});

}

// ==========================
// SIMPLE REVEAL
// ==========================

const reveal=document.querySelectorAll(".card,.project-card,.timeline-item");

function revealAnimation(){

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-80){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="0.8s";

});

window.addEventListener("scroll",revealAnimation);

revealAnimation();
nav ul li a.active{
color:#38bdf8;
font-weight:bold;
}

body.dark{
background:#000;
color:#fff;
}
