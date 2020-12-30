tbutton = document.getElementById("top");

window.onscroll = function() {scrollWindow()};

function scrollWindow() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    tbutton.style.display = "block";
  } else {
    tbutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
