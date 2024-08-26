// Dark Mode Switcher
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

// Collapsible
const collapsible = document.querySelectorAll(".collapsible");
const openAll = document.querySelector(".openAll");
const collapseAll = document.querySelector(".collapseAll");

openAll.addEventListener("click", () => {
    collapsible.forEach((section) => {
        section.classList.add("active");
        section.nextElementSibling.style.display = "inline-block";
    });
});

collapseAll.addEventListener("click", () => {
    collapsible.forEach((section) => {
        section.classList.remove("active");
        section.nextElementSibling.style.display = "none";
    });
});

collapsible.forEach((section) => {
    section.addEventListener("click", () => {
        section.classList.toggle("active");
        var content = section.nextElementSibling;
        if (content.style.display === "inline-block")
            content.style.display = "none";
        else content.style.display = "inline-block";
    });
});

