const pastShowToggler = document.querySelector(".past-shows");
const mixCloudContainer = document.querySelector(".toggler");

pastShowToggler.addEventListener("click", function() {
    mixCloudContainer.classList.toggle("open");
})