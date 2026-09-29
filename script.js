function showSection(id){


let sections=document.querySelectorAll(".content-section");


sections.forEach(section=>{

section.style.display="none";

});



document.getElementById(id).style.display="block";


}



// Default page

window.onload=function(){

showSection("overview");

}



let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide-dot");
  
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex - 1].classList.add("active");  
  dots[slideIndex - 1].classList.add("active");
}