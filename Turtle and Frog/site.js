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
  var dots = document.getElementsByClassName("dot");
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
}

function validateForm() {
  if( document.myForm.enterName.value == "") {
    alert("Please provide your name.");
    document.myForm.enterName.focus();
    return false;
  }

  if(document.myForm.yourEmail.value == "") {
    alert("Please provide your email.");
    document.myForm.yourEmail.focus();
    return false;
  }

  if(document.myForm.yourPhone.value == "") {
    alert("Please provide your phone number.");
    document.myForm.yourPhone.focus();
    return false;
  }

  return true;
  
}

