"use strict";

let homeEl = document.querySelector(".home");
let servicesEl = document.querySelector(".services");
let worksEl = document.querySelector(".works");
let aboutEl = document.querySelector(".about");
let bookUsEl = document.querySelector(".book-us");

let active = false;

function removeActive() {
  if (active === true) {
    homeEl.classList.remove("active");
    servicesEl.classList.remove("active");
    worksEl.classList.remove("active");
    aboutEl.classList.remove("active");
    bookUsEl.classList.remove("active");
  }
}

homeEl.addEventListener("click", function () {
  active = true;
  removeActive();
  homeEl.classList.add("active");
});
servicesEl.addEventListener("click", function () {
  active = true;
  removeActive();
  servicesEl.classList.add("active");
});
worksEl.addEventListener("click", function () {
  active = true;
  removeActive();
  worksEl.classList.add("active");
});
aboutEl.addEventListener("click", function () {
  active = true;
  removeActive();
  aboutEl.classList.add("active");
});
bookUsEl.addEventListener("click", function () {
  active = true;
  removeActive();
  bookUsEl.classList.add("active");
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}