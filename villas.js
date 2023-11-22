console.log("Inside villas.js")

switch_Language();

// This is the code for the tabsheets
// *************************************

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Display the clicked tabsheet
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




