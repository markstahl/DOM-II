const logo = document.querySelector(".main-navigation h1");
window.onload = function() {logo.classList.add("blink")};

const header_p = document.querySelector(".intro > p");
header_p.addEventListener('click', (event) => event.target.style.color = '#878787');

header_p.addEventListener('dblclick',(event) => event.target.style.color = 'black');

window.addEventListener('wheel', function(event) {
    body.style.background = "blue"; 
});

imgs = document.querySelectorAll("img");
window.addEventListener('scroll', function(event) {
    imgs.forEach(img => img.style.border = "3px solid black "); 
});

header_p.addEventListener('click', (event) => {
    alert("DON'T EVER CLICK THIS!");
    event.stopPropagation();
});

imgs.addEventListener('click', (event) => {
    alert("Why'd you click this?");
    event.stopPropagation();// stop propagation to the body
});
body.addEventListener('click', (event) => alert("You clicked, sir?"));

imgs.addEventListener('click', (event) => {
    alert("Picture");
    event.stopPropagation();
});