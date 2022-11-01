var navLinks = document.getElementById("navLinks");
var support = document.getElementById('contact-support-btn');

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