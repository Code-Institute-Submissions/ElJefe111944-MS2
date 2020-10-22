let slider = document.querySelector('.slider-container');
let eachSlide = document.querySelectorAll('.reviews');
let count = 0;
let sizeWidth = eachSlide[0].clientWidth;
let interval = 3000;

window.addEventListener("resize", function(){
    sizeWidth = eachSlide[0].clientWidth;
});

setInterval(function time (){
    slides();
}, interval);

function slides(){
    slider.style.transform = 'translate(' + (- sizeWidth * count) + 'px';
    slider.style.transition = 'tranform 5s';
    count++;

    if(count === eachSlide.length){
        count = 0;
    setInterval(function(){
      slider.style.transform = 'translate(' + (- sizeWidth * count) + 'px';
      slider.style.transition = 'tranform 5s';  
    }, interval);
    }
}

