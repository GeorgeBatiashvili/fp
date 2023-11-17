let burger = document.querySelector(".burger_image");
let xMark = document.querySelector(".X_image");
let nav = document.querySelector(".header_common_nav");

burger.addEventListener("click", () => {
    burger.style.display = "none";
    xMark.style.display = "block";
    nav.classList.add("show");
})

xMark.addEventListener("click", () => {
burger.style.display = "block";
xMark.style.display = "none";
nav.classList.remove("show");
})