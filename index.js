// Automatic carousel slide show with manual controls
// https://codepen.io/mirandalwashburn/pen/GRggrBz
// https://www.sliderrevolution.com/resources/automatic-slideshow/

var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);


/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
  slideIndexCurrent = n;
  slideIndex = n;
  showSlidesCurrent(slideIndexCurrent);

}

function showSlidesCurrent(n) {
  //var slideIndex = 1;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexCurrent = 1}   

  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexCurrent-1].style.display = "block";  
  dots[slideIndexCurrent-1].className += " active";
  slideIndexCurrent++;
}


/*** SHOW SLIDE with timer ***/
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 2000); // Change image every x seconds
}














// Code for Google MediaCapabilities
let map;

async function initMap() {
  // The location of Villas
  const position = { lat: 35.52196293836762, lng: 23.860975326736174 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Pyrgos Psilonerou
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "AIzaSyAnkt4tps4vHrWgONAKaAo9AeNWW5IAARM",
  });

  // The marker, positioned at Pyrgos Psilonerou
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Villas",
  });
}

initMap();





