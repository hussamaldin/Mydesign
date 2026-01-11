  document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element by its ID
    const paragraphElement1 = document.getElementsByClassName("tablinks");
    const paragraphElement = document.getElementsByClassName("tabcontent");
      var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    
  }

    paragraphElement[0].style.display = "block";
    paragraphElement1[0].classList.add('active');
    // Add the 'highlight' class to the element
    
  });
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent2,tabcontent3;
    tabcontent3 = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].style.display = "none";
  }
  tabcontent2 = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].className =tabcontent2[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}