var modal =document.getElementById("myModal");
var modal1 = document.getElementById("myModal1")
var clicker = document.getElementById("imageClick")
var clicker1 = document.getElementById("imageClick1")
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

clicker.onclick = function() {
  modal.style.display = "block";
}

clicker1.onclick = function () {
    modal1.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
