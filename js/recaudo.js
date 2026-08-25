const form = document.getElementById("login-form");
const userInput = document.getElementById("usuario");
const loader = document.getElementById("portal-loader");
const spinner = document.getElementById("portal-spinner");
const otpCard = document.getElementById("otp-card");
const otpInputs = [...document.querySelectorAll("#otp-boxes input")];
const otpNote = document.getElementById("otp-note");
let otpTimer;

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  startOtpFlow();
});

document.getElementById("forgot-pass").addEventListener("click", (event) => {
  event.preventDefault();
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

document.getElementById("otp-validar").addEventListener("click", showSpinner);
document.getElementById("otp-cancelar").addEventListener("click", closeOverlay);
