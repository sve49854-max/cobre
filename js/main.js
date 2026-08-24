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
  fincomovil: "#fincomovil",
  app: "#fincomovil",
  portal: "#portal",
  crédito: "#productos",
  credito: "#productos",
  pagos: "#pagos",
  breb: "#breb",
  vincúlate: "#vinculate",
  vinculacion: "#vinculate",
  faq: "#faq",
  ayuda: "#faq",
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
    document.querySelector(targets[match])?.scrollIntoView({ behavior: "smooth" });
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

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenus();
  closeSearch();
  closeDrawer();
  document.body.classList.remove("menu-open");
});
