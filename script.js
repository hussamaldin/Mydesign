let fadeleft=document.getElementsByClassName("ani-fadeleft");
let faderight=document.getElementsByClassName("ani-faderight");
let fadeup=document.getElementsByClassName("ani-fadeup");
let zoomin=document.getElementsByClassName("ani-zoomin");
let fadenow=document.getElementsByClassName("ani-fadenow");
let clickh=document.getElementsByClassName("clickh")[0];
let navlink=document.querySelectorAll('#mylist li')
var y;
window.addEventListener('scroll', () => {

  for (y = 0; y < fadeleft.length; y++) {
    let placeitem=fadeleft[y].getBoundingClientRect().top;
     if (placeitem<= 300) {
      fadeleft[y].classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__fast") 
    fadeleft[y].classList.add("is-visible");
  }
  }
    for (y = 0; y < faderight.length; y++) {
    let placeitem=faderight[y].getBoundingClientRect().top;
     if (placeitem<= 300) {
      faderight[y].classList.add("animate__animated" ,"animate__fadeInRight" ,"animate__fast") 
    faderight[y].classList.add("is-visible");
  }
  }
      for (y = 0; y < fadeup.length; y++) {
    let placeitem=fadeup[y].getBoundingClientRect().top;
     if (placeitem<= 300) {
      fadeup[y].classList.add("animate__animated" ,"animate__fadeInUp" ,"animate__fast") 
    fadeup[y].classList.add("is-visible");
  }
  }
      for (y = 0; y < zoomin.length; y++) {
    let placeitem=zoomin[y].getBoundingClientRect().top;
     if (placeitem<= 300) {
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
 clickh.addEventListener('click', () => {
    // Toggle the 'is-open' class on both the button and the menu
    const navmainh=document.getElementsByClassName("navmainh")[0];
    if (clickh.classList.contains("active")) {

        navmainh.style.display="none";
    clickh.classList.remove("bi-x");
    clickh.classList.add("bi-list");
    clickh.classList.remove("active");
    }
    else{
    navmainh.style.display="block";
    clickh.classList.remove("bi-list");
    clickh.classList.add("bi-x");
    clickh.className += " active";
    }
      });

      navlink.forEach(element => {
         element.addEventListener('click', () => {
    // Toggle the 'is-open' class on both the button and the menu
    const navmainh=document.getElementsByClassName("navmainh")[0];
    console.log("jj");
  if(navmainh.classList.contains("none")){

  }
  else{
    navmainh.style.display="none";
    clickh.classList.remove("bi-x");
    clickh.classList.add("bi-list");
    clickh.classList.remove("active");
  }
      });
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