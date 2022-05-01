//accessed the user's machine theme
localStorage.getItem('theme');
// dark

const toggle = document.getElementById("toggle");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");
if (theme === "dark") toggle.checked = true

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme = theme === "dark" ? "light" : "dark"
  if (theme === "dark") {
    window.localStorage.setItem("theme", "dark");
  } else window.localStorage.setItem("theme", "light");
});
