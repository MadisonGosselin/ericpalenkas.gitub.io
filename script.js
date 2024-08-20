const body = document.querySelector("body");
const switcher = document.querySelector(".modeSwitcher");

let mode = "light";

switcher.addEventListener("click", () => {
    if (mode === "light") {
        switcher.innerText = "☀️";
        body.classList.add("darkMode");
        mode = "dark";
    } else {
        switcher.innerText = "🌙";
        body.classList.remove("darkMode");
        mode = "light";
    }
});

const openResume = document.querySelector(".openResume");
const modal = document.querySelector(".modal");
const resume = document.querySelector(".resume");

openResume.addEventListener("click", () => {
    modal.style.display = "block";
});

resume.addEventListener("mouseleave", () => {
    modal.style.opacity = 0;
    modal.style.transition = "0.5s";
});
