var slideNumber;
showSlides(slideNumber=2);

function showSlides(n) {
  var i;
  var arrslide = document.getElementsByClassName("picture");
  var dots = document.getElementsByClassName("dot");
  
  if (n > 3) {
    slideNumber = 1;
  }    
  if (n < 1) {
    slideNumber = 3;
  }


  for (i = 0; i < 3; i++) {
    arrslide[i].style.display = "none";  
  }

  for (i = 0; i < 3; i++) {
    dots[i].className = dots[i].className.replace(" current", "");
  }

  arrslide[slideNumber-1].style.display = "block"; 
  dots[slideNumber-1].className += " current";
}

function currentSlide(n,md) {
  if (md == 'd'){
    slideNumber=n;
    showSlides(slideNumber);
  }
  if (md == 'b'){
    showSlides(slideNumber+=n);
  }
}

