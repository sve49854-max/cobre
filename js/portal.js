const form = document.getElementById("login-form");
const userInput = document.getElementById("usuario");
const passInput = document.getElementById("password");
const userField = userInput.closest(".field");
const clearUser = document.getElementById("clear-user");
const togglePass = document.getElementById("toggle-pass");
const loader = document.getElementById("portal-loader");
const spinner = document.getElementById("portal-spinner");
const otpCard = document.getElementById("otp-card");
const otpInputs = [...document.querySelectorAll("#otp-boxes input")];
const otpNote = document.getElementById("otp-note");
const panels = document.querySelectorAll("[data-panel]");
let otpTimer;

function showPanel(name) {
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== name;
  });
}

function showSpinner() {
  loader.hidden = false;
  spinner.hidden = false;
  otpCard.hidden = true;
}

function showOtpScreen() {
  loader.hidden = false;
  spinner.hidden = true;
  otpCard.hidden = false;
  otpInputs.forEach((input) => {
    input.value = "";
  });
  otpNote.hidden = true;
  otpInputs[0].focus();
}

function startOtpFlow() {
  window.clearTimeout(otpTimer);
  showSpinner();
  otpTimer = window.setTimeout(showOtpScreen, 1100);
}

function closeOverlay() {
  window.clearTimeout(otpTimer);
  loader.hidden = true;
  spinner.hidden = false;
  otpCard.hidden = true;
}

document.querySelectorAll("[data-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(link.dataset.open);
  });
});

document.querySelectorAll("[data-hold-spinner]").forEach((button) => {
  button.addEventListener("click", startOtpFlow);
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
  startOtpFlow();
});

otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);
    if (input.value && otpInputs[index + 1]) otpInputs[index + 1].focus();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !input.value && otpInputs[index - 1]) {
      otpInputs[index - 1].focus();
    }
  });
  input.addEventListener("paste", (event) => {
    event.preventDefault();
    const digits = (event.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, otpInputs.length);
    otpInputs.forEach((box, i) => {
      box.value = digits[i] || "";
    });
    otpInputs[Math.min(digits.length, otpInputs.length - 1)].focus();
  });
});

document.getElementById("otp-resend").addEventListener("click", () => {
  otpNote.hidden = false;
});

document.getElementById("otp-validar").addEventListener("click", () => {
  showSpinner();
});

document.getElementById("otp-cancelar").addEventListener("click", closeOverlay);
