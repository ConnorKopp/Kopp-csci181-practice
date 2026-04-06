const darkToggle = document.querySelector("#dark-toggle");
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark");
}
function changeToggleText() {
  if (body.classList.contains("dark")) {
    darkToggle.textContent = "Light Mode";
  } else {
    darkToggle.textContent = "Dark Mode";
  }
}
darkToggle.addEventListener("click", toggleDarkMode);
darkToggle.addEventListener("click", changeToggleText);
