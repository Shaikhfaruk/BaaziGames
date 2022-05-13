let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Automatic Slideshow - change image every 3 seconds
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// accordion Start here

const accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("activeAccor");
  });
}

// testimonials_cards slider

let slideIndexTest = 1;
showSlidesTest(slideIndexTest);

// Next/previous controls
function plusSlides(n) {
  showSlidesTest((slideIndexTest += n));
}

function currentSlide(n) {
  showSlidesTest((slideIndexTest = n));
}

function showSlidesTest(card) {
  let i;
  let slides = document.getElementsByClassName("testimonials_card");
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";

    slides[i].classList.remove("card--left");
    slides[i].classList.remove("card--center");
    slides[i].classList.remove("card--right");
  }
  slides[card].classList.add("card--center");
  if (card == 0) {
    slides[2].classList.add("card--left");
    slides[1].classList.add("card--right");
  }
  if (card == 1) {
    slides[0].classList.add("card--left");
    slides[2].classList.add("card--right");
  }
  if (card == slides.length - 1) {
    slides[1].classList.add("card--left");
    slides[0].classList.add("card--right");
  }

  // slideIndexTest++;
  // if (slideIndexTest > slides.length) {
  //   slideIndexTest = 1;
  // }
  // slides[slideIndexTest - 1].style.display = "flex";
  // slides[slideIndexTest - 1].classList.add("fade-in-right");

  setTimeout(showSlidesTest, 2000); // Change image every 4 seconds
}
