
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
showSlides(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slide');
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 2;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  const currentIndex = slideIndex % Math.ceil(slides.length / 2) * 2;

  slides[currentIndex].style.display = 'block';
  slides[currentIndex + 1].style.display = 'block';

  const stockNames = ['AAPL', 'GOOGL', 'MSFT', 'AMZN']; // Example stock names
  for (let i = 0; i < slides.length; i += 2) {
    const stockIndex = (currentIndex + i) / 2;
    slides[i].querySelector('.placeholder').textContent = stockNames[stockIndex % stockNames.length];
    slides[i + 1].querySelector('.placeholder').textContent = stockNames[(stockIndex + 1) % stockNames.length];
  }
}




  
  
  
  