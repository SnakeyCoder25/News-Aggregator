// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickybar()};

// Get the navbar
var menubar = document.getElementById("menubar");

// Get the offset position of the navbar
var sticky = menubar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickybar() {
  if (window.pageYOffset >= sticky) {
    menubar.classList.add("sticky")
  } else {
    menubar.classList.remove("sticky");
  }
}