/* declare for modal 1st recommended item */
var modal = document.getElementById("myModal");
var clicker = document.getElementById("imageClick");
var span = document.getElementsByClassName("close")[0];

/* this will call when the image of 1st item is clicked */
clicker.onclick = function() {
  modal.style.display = "block";
}

/* this will close the modal when the close button clicked */
span.onclick = function() {
  modal.style.display = "none";
}

/* this will close the modal when the cursor clicked anywhere other than the modal */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* declare for modal 1st recommended item */
var modal1 = document.getElementById("myModal1");
var clicker1 = document.getElementById("imageClick1");
var span1 = document.getElementsByClassName("close1")[0];

/* this will call when the image of 2nd item is clicked */
clicker1.onclick = function () {
    modal1.style.display = "block";
}

/* this will close the modal when the close button clicked */
span1.onclick = function() {
  modal1.style.display = "none";
}

/* this will close the modal when the cursor clicked anywhere other than the modal */
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
