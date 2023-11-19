// Code for multilingual display of text
// set initial language according to browser language, or default Lang if this none of site languages
const default_language = 'en',
  language_selector = document.getElementById('language_selector'),
  htmlTag = document.querySelector('html'),
  language_elements = [...document.querySelectorAll('*[lang]')],
  docTitle =
  {
    en: 'English document title',
    gr: 'Ελληνικός Τίτλος '
  }

 switch_Language();

function switch_Language()  // IIFE
{
  // remove <html lang="en"> from langElms
  let i_html = language_elements.findIndex(el => el === htmlTag)
  if (i_html > -1) language_elements.splice(i_html, 1);

  // set initial language according to browser language, or default Lang if this none of site languages
  let initial_language = (navigator.language || navigator.userLanguage || default_language).substring(0, 2)
  if (!docTitle[initial_language]) {
    initial_language = default_language;
  }

  language_selector.value = initial_language;

  showLang();

  function showLang() {
    let selected_language = language_selector.value;
    
    console.log("The language selected is " + selected_language);
    htmlTag.lang = selected_language
    document.title = docTitle[selected_language]

    language_elements.forEach(el => {
      if (el.lang === selected_language) {
        console.log("el.lang:" + el.lang + " " + " Selected language:" + selected_language + " Hiding element " + el.innerHTML);
        el.classList.remove("noDisplay");
      }
      else {
        console.log("el.lang:" + el.lang + " " + " Selected language:" + selected_language + " Showing element " + el.innerHTML);
        el.classList.add("noDisplay")
      }

    })
  }


  // the final touch !
  language_selector.onchange = showLang;
}
// **************** End of Tabsheet Code



// ******************* Slide Show Code
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// The below code is for the automatic slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}


// This is the code for the tabsheets
// *************************************

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTabsheet(evt, tabsheetName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabsheetName).style.display = "block";
  evt.currentTarget.className += " active";
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



