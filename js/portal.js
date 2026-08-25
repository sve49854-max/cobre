const form = document.getElementById("login-form");
const userInput = document.getElementById("usuario");
const passInput = document.getElementById("password");
const userField = userInput.closest(".field");
const clearUser = document.getElementById("clear-user");
const togglePass = document.getElementById("toggle-pass");
const loader = document.getElementById("portal-loader");
const panels = document.querySelectorAll("[data-panel]");

function showPanel(name) {
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== name;
  });
}

function showSpinnerScreen() {
  loader.hidden = false;
}

document.querySelectorAll("[data-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(link.dataset.open);
  });
});

document.querySelectorAll("[data-hold-spinner]").forEach((button) => {
  button.addEventListener("click", showSpinnerScreen);
});

clearUser.addEventListener("click", () => {
  userInput.value = "";
  userInput.focus();
});

togglePass.addEventListener("click", () => {
  const hidden = passInput.type === "password";
  passInput.type = hidden ? "text" : "password";
  togglePass.setAttribute("aria-label", hidden ? "Ocultar contraseña" : "Mostrar contraseña");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emptyUser = !userInput.value.trim();
  userField.classList.toggle("is-error", emptyUser);
  if (emptyUser) {
    userInput.focus();
    return;
  }
  showSpinnerScreen();
});
