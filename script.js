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

