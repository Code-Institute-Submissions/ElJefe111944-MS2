let btn = document.getElementById('menu');
let navLinks = document.getElementById('links');
let counter = 0;

btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (counter == 0) {
        navLinks.className = ("links two")
        counter = 1;
    } else {
        navLinks.classList.remove("two")
        navLinks.className = ("links one")
        counter = 0;
    }
})

