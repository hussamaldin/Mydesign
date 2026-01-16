let fadeleft=document.getElementsByClassName("ani-fadeleft");
let faderight=document.getElementsByClassName("ani-faderight");
let fadeup=document.getElementsByClassName("ani-fadeup");
let zoomin=document.getElementsByClassName("ani-zoomin");
let fadenow=document.getElementsByClassName("ani-fadenow");
var y;
window.addEventListener('scroll', () => {

  for (y = 0; y < fadeleft.length; y++) {
    let placeitem=fadeleft[y].getBoundingClientRect().top;
     if (placeitem<= 400) {
      fadeleft[y].classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__fast") 
    fadeleft[y].classList.add("is-visible");
  }
  }
    for (y = 0; y < faderight.length; y++) {
    let placeitem=faderight[y].getBoundingClientRect().top;
     if (placeitem<= 400) {
      faderight[y].classList.add("animate__animated" ,"animate__fadeInRight" ,"animate__fast") 
    faderight[y].classList.add("is-visible");
  }
  }
      for (y = 0; y < fadeup.length; y++) {
    let placeitem=fadeup[y].getBoundingClientRect().top;
     if (placeitem<= 400) {
      fadeup[y].classList.add("animate__animated" ,"animate__fadeInUp" ,"animate__fast") 
    fadeup[y].classList.add("is-visible");
  }
  }
      for (y = 0; y < zoomin.length; y++) {
    let placeitem=zoomin[y].getBoundingClientRect().top;
     if (placeitem<= 400) {
      zoomin[y].classList.add("animate__animated" ,"animate__zoomIn" ,"animate__fast") 
    zoomin[y].classList.add("is-visible");
  }
  }
 
});

  document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element by its ID
    const paragraphElement1 = document.getElementsByClassName("tablinks");
    const paragraphElement = document.getElementsByClassName("tabcontent");
      var i, tabcontent, tablinks;
          for (y = 0; y < fadenow.length; y++) {
    let placeitem=fadenow[y].getBoundingClientRect().top;
     if (placeitem<= 900) {
      fadenow[y].classList.add("animate__animated" ,"animate__fadeInUp" ,"animate__fast") 
    fadenow[y].classList.add("is-visible");
  }
}

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