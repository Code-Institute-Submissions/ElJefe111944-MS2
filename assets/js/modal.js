const landingImages = document.querySelectorAll(".landing-imgs img");
const modal = document.querySelector(".modal-background");
const modalFullImage = document.querySelector(".modalFullImage");
const modalCaption = document.querySelector(".modalCaption");


landingImages.forEach((landingImage) => {
    landingImage.addEventListener("click", () => {
        modal.classList.add("appear");
        modalFullImage.classList.add("appear");

// Text and Image 
const modalFullImageSrc = landingImage.getAttribute("data-original");
modalFullImage.src = modalFullImageSrc;
modalCaption.innerHTML = landingImage.alt;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-background")){
        modal.classList.remove("appear");
        modalFullImage.classList.remove("appear");
    } 
});