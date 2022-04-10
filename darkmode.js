// Selectors
const main = document.querySelector("#changecolor");
const section = document.querySelector("#changecolor1");
const div = document.querySelector("#changecolor2");
const footer = document.querySelector("#changecolor3");
const button = document.querySelector("#mode-selector");

const darkModeClass = "dark-mode";

// Events
button.addEventListener("click", changeMode);

// Functions
function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  main.classList.toggle(darkModeClass);
  section.classList.toggle(darkModeClass);
  div.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if (changecolor.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    return;
  }
  button.innerHTML = darkMode;
}
