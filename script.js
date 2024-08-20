const body = document.querySelector("body");
const switcher = document.querySelector(".modeSwitcher");

let mode = localStorage.getItem("currMode");

const loadDisplay = () => {
    if (mode == "light") {
        switcher.innerText = "🌙";
        body.classList.remove("darkMode");
    } else {
        switcher.innerText = "☀️";
        body.classList.add("darkMode");
    }
};
loadDisplay();

switcher.addEventListener("click", () => {
    if (mode === "light") {
        switcher.innerText = "☀️";
        body.classList.add("darkMode");
        localStorage.setItem("currMode", "dark");
    } else {
        switcher.innerText = "🌙";
        body.classList.remove("darkMode");
        localStorage.setItem("currMode", "light");
    }
    mode = localStorage.getItem("currMode");
});
