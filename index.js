// Automatic carousel slide show with manual controls
// https://codepen.io/mirandalwashburn/pen/GRggrBz
// https://www.sliderrevolution.com/resources/automatic-slideshow/

var slideIndex = 0;
var slideIndexCurrent = 0;


showSlides();

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

  setTimeout(showSlides, 4500); // Change image every x seconds
}






// **************** START Code for animating images when user scrolls them into view
var images_to_amimate = document.querySelectorAll('.animate_side_img'); //get all elements with the .scroll class

document.onscroll = function() { //when scrolling the screen...
  images_to_amimate.forEach(images_to_amimate => { //each element with class .animate_side_img...
  var image_to_animate_position = images_to_amimate.getBoundingClientRect(); //gets values from element position
  var alturaEl = image_to_animate_position.top; //take distance from the top of the screen
  
  if(alturaEl < 500) { //if the distance from the top is less than 500
    images_to_amimate.classList.add('animate_side_img--show'); //add the .scroll--show class
  }
 });
}
// **************** END Code for animating images when user scrolls them into view





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





