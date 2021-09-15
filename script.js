const ehfmShowToggler = document.querySelector(".ehfm-shows");
const hapticSelectsToggler = document.querySelector(".haptic-selects");
const mixCloudContainer = document.querySelector(".toggler");
const hapticContainer = document.querySelector(".haptic");
const exitIcons = document.querySelectorAll(".exit");

ehfmShowToggler.addEventListener("click", function() {
    mixCloudContainer.classList.add("open");
    hapticContainer.classList.remove("open");
})

hapticSelectsToggler.addEventListener("click", function() {
    mixCloudContainer.classList.remove("open");
    hapticContainer.classList.add("open");
})

exitIcons.forEach(item => {
    item.addEventListener("click", function() {
        mixCloudContainer.classList.remove("open");
        hapticContainer.classList.remove("open");
    })
})

/*const navList = document.querySelectorAll(".nav-list-item");

navList.forEach(item => {
    item.addEventListener("click", function() {
        mixCloudContainer.classList.toggle("open");
        hapticContainer.classList.toggle("open");
    })
})*/