let imageSlider = document.querySelector('.slides');
let eachSlide = document.querySelectorAll('.slider-content')
let count = 1;
let width = eachSlide[0].clientWidth;
let interval = 3000;

// So the slider is responsive and work on all devices.
window.addEventListener("resize", function(){
    width = eachSlide[0].clientWidth;
})

setInterval(function(){
    slides();
},interval);

function slides(){
    imageSlider.style.transform = "translate("+(-width*count)+ "px)";
    count ++;
}
