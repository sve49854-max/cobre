const loginView = document.getElementById("portal-login");
const homeView = document.getElementById("portal-home");
const form = document.getElementById("login-form");
const userInput = document.getElementById("usuario");
const passInput = document.getElementById("password");
const userField = userInput.closest(".field");
const clearUser = document.getElementById("clear-user");
const togglePass = document.getElementById("toggle-pass");
const panels = document.querySelectorAll("[data-panel]");

function showPanel(name) {
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== name;
  });
}

document.querySelectorAll("[data-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(link.dataset.open);
  });
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
  document.body.classList.add("is-in");
  loginView.hidden = true;
  homeView.hidden = false;
});

document.getElementById("logout").addEventListener("click", () => {
  document.body.classList.remove("is-in");
  homeView.hidden = true;
  loginView.hidden = false;
  showPanel("login");
  form.reset();
  userField.classList.remove("is-error");
});
