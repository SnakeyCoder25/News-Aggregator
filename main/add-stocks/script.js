
function updateLocaldata() {
let x1 = document.getElementById("msg1").value;
localStorage.setItem("1", x1);
let x2 = document.getElementById("msg2").value;
localStorage.setItem("2", x2);
let x3 = document.getElementById("msg3").value;
localStorage.setItem("3", x3);
let x4 = document.getElementById("msg4").value;
localStorage.setItem("4", x4);
}
//localStorage.getElementById = document.getElementById("One");

//GPT CODE
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}
