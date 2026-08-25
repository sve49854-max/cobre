const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");
const search = document.getElementById("search");
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("search-close");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchHint = document.getElementById("search-hint");
const drawer = document.getElementById("drawer");
const sideTab = document.getElementById("side-tab");
const drawerClose = document.getElementById("drawer-close");
const waBubble = document.getElementById("wa-bubble");
const waClose = document.getElementById("wa-close");

const targets = {
  fincomovil: "canales.html#fincomovil",
  app: "canales.html#fincomovil",
  portal: "canales.html#portal",
  crédito: "#productos",
  credito: "#productos",
  pagos: "#productos",
  breb: "canales.html#breb",
  vincúlate: "#vinculate",
  vinculacion: "#vinculate",
  noticias: "#noticias",
  eventos: "#eventos",
  faq: "canales.html#faq",
  ayuda: "canales.html#faq",
};

function closeMenus() {
  document.querySelectorAll(".has-menu.is-open").forEach((item) => {
    item.classList.remove("is-open");
    const trigger = item.querySelector("[aria-expanded]");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  });
}

document.querySelectorAll("[data-menu]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const parent = button.closest(".has-menu");
    const alreadyOpen = parent.classList.contains("is-open");
    closeMenus();
    parent.classList.toggle("is-open", !alreadyOpen);
    button.setAttribute("aria-expanded", String(!alreadyOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-menu")) closeMenus();
});

menuToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a, .dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    closeMenus();
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

function openSearch() {
  search.hidden = false;
  searchInput.focus();
}

function closeSearch() {
  search.hidden = true;
}

searchOpen.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
search.addEventListener("click", (event) => {
  if (event.target === search) closeSearch();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const match = Object.keys(targets).find((key) => query.includes(key));
  if (match) {
    closeSearch();
    const dest = targets[match];
    if (dest.startsWith("#")) {
      document.querySelector(dest)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = dest;
    }
    searchHint.textContent = "Prueba con Fincomóvil, portal, crédito o pagos.";
  } else {
    searchHint.textContent = "No encontramos esa sección. Intenta con Fincomóvil o portal.";
  }
});

function openDrawer() {
  drawer.hidden = false;
}

function closeDrawer() {
  drawer.hidden = true;
}

sideTab.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", closeDrawer);
drawer.addEventListener("click", (event) => {
  if (event.target === drawer) closeDrawer();
});

waClose.addEventListener("click", () => {
  waBubble.hidden = true;
});

function setupSlider(id) {
  const root = document.getElementById(id);
  if (!root) return;
  const track = root.querySelector(".slider-track") || root;
  const slides = [...root.querySelectorAll(".slide")];
  const dotsWrap = document.querySelector(`.slider-dots[data-for="${id}"]`);
  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) index = 0;
  let timer;

  function go(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dotsWrap?.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 5000);
  }

  if (dotsWrap) {
    dotsWrap.innerHTML = slides
      .map((_, i) => `<button type="button" aria-label="Ir a la diapositiva ${i + 1}"></button>`)
      .join("");
    dotsWrap.querySelectorAll("button").forEach((dot, i) => {
      dot.addEventListener("click", () => {
        go(i);
        restart();
      });
    });
  }

  document.querySelectorAll(`[data-slider="${id}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      go(index + Number(button.dataset.dir));
      restart();
    });
  });

  go(index);
  restart();
}

setupSlider("hero-slider");
setupSlider("info-slider");

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenus();
  closeSearch();
  closeDrawer();
  document.body.classList.remove("menu-open");
});
