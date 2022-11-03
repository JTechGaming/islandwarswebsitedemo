var navLinks = document.getElementById("navLinks");
var support = document.getElementById('contact-support-btn');
var contact = document.getElementById('chatbtn');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

if(support != null) {
    support.addEventListener('click', function(){
        alert('click "ok" for "mental" support');
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
}

if(contact != null) {
  contact.addEventListener('click', function(){
      window.location.href="contact.html";
  });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();