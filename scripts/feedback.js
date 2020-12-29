function validate() {
  if (window.confirm('Click "OK" to continue. ')) {
    alert("Feedback submitted. ")
    window.location = "thank_you.html"
    return true;
  }
  else {
    return false;
  }
}
