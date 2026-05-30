const root = document.documentElement;
let latestScroll = 0;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const resetToHero = () => {
  root.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  latestScroll = 0;
  root.style.setProperty("--scroll-progress", "0");
  root.style.setProperty("--hero-float", "0px");

  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  requestAnimationFrame(() => {
    root.style.scrollBehavior = "";
    document.body.style.scrollBehavior = "";
  });
};

resetToHero();
window.addEventListener("pageshow", resetToHero);
window.addEventListener("DOMContentLoaded", resetToHero);
window.addEventListener("load", () => {
  resetToHero();
  requestAnimationFrame(resetToHero);
  setTimeout(resetToHero, 80);
});

const header = document.querySelector("[data-header]");
const menuToggles = document.querySelectorAll("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const progressBar = document.querySelector("[data-scroll-progress]");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorRing = document.querySelector("[data-cursor-ring]");
const sceneCamera = document.querySelector("[data-scene-camera]");
const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-mask, .reveal-scale");
const tabs = document.querySelectorAll("[data-category]");
const menuGrid = document.querySelector("[data-menu-grid]");
const allergenSearch = document.querySelector("[data-allergen-search]");
const allergenRows = document.querySelectorAll("[data-allergen-table] tr");
const motionSections = document.querySelectorAll("[data-scene]");
const magneticTargets = document.querySelectorAll(".solid-button, .ghost-button, .pill-button, .tab, .postcode button, .mobile-order");

const sceneThemes = {
  hero: ["#FBC3A0", "rgba(57, 35, 25, 0.72)"],
  order: ["#FFFFFF", "rgba(251, 195, 160, 0.42)"],
  featured: ["#7F572E", "rgba(127, 87, 46, 0.5)"],
  about: ["#FBC3A0", "rgba(57, 35, 25, 0.62)"],
  promise: ["#FFFFFF", "rgba(251, 195, 160, 0.36)"],
  drinks: ["#7F572E", "rgba(127, 87, 46, 0.48)"],
  food: ["#FBC3A0", "rgba(57, 35, 25, 0.58)"],
  menu: ["#FFFFFF", "rgba(251, 195, 160, 0.34)"],
  locations: ["#7F572E", "rgba(127, 87, 46, 0.52)"],
  story: ["#FBC3A0", "rgba(57, 35, 25, 0.5)"],
  social: ["#FFFFFF", "rgba(251, 195, 160, 0.38)"],
  franchise: ["#7F572E", "rgba(127, 87, 46, 0.48)"],
  allergens: ["#FBC3A0", "rgba(57, 35, 25, 0.44)"],
  contact: ["#FFFFFF", "rgba(251, 195, 160, 0.34)"]
};

const menuItems = {
  burgers: [
    ["Classic Cheeseburger", "Juicy beef patty, melted cheese, pickles, onion, and signature sauce.", "from £6.95"],
    ["Mad Angus", "Bold beef, fresh toppings, melted cheese, and Gallos signature sauce.", "from £8.95"],
    ["King Kong", "Big, stacked, and made for serious hunger.", "from £9.95"],
    ["The Big Bang", "Chicken, beef, and turkey layered into one bold bite.", "from £10.95"]
  ],
  chicken: [
    ["Loaded Chicken Burger", "Crispy or grilled chicken with lettuce, cheese, sauce, and fresh toppings.", "from £7.95"],
    ["Signature Wings", "Tender wings tossed in your choice of bold sauce.", "from £5.95"],
    ["Flame Chicken Wrap", "Marinated chicken, salad, and sauce wrapped fresh.", "from £6.95"],
    ["Chicken Strips", "Crunchy strips with a dip built for dunking.", "from £4.95"]
  ],
  fries: [
    ["Gallos Loaded Fries", "Golden fries topped with cheese, sauce, and flavour-packed extras.", "from £5.95"],
    ["Big Bang Fries", "Loaded fries with layered meats and signature sauce.", "from £7.95"],
    ["Cheese Fries", "Crisp fries finished with warm melted cheese.", "from £4.50"],
    ["Spicy Fries", "Seasoned fries with a warm chilli kick.", "from £3.95"]
  ],
  sides: [
    ["Onion Rings", "Crisp, golden rings with a sweet crunch.", "from £3.95"],
    ["Mozzarella Sticks", "Melted cheese in a crisp coating.", "from £4.95"],
    ["Street Slaw", "Fresh, bright, and made to cut through the heat.", "from £2.95"],
    ["Dips", "Signature sauces for every burger and side.", "from £0.75"]
  ],
  drinks: [
    ["Gallos Cola", "Classic cola energy with a Gallos finish.", "from £2.25"],
    ["Mandarin", "Bright, fruity, and made for loaded food.", "from £2.25"],
    ["No Sugar Cola", "The classic refresh without the sugar.", "from £2.25"],
    ["Water", "Still water served chilled.", "from £1.50"]
  ],
  desserts: [
    ["Chocolate Shake", "Cold, rich, and made for the final bite.", "from £4.95"],
    ["Cookie Dough", "Warm cookie dough with a sweet finish.", "from £5.95"],
    ["Churros", "Crisp cinnamon bites with dipping sauce.", "from £4.95"],
    ["Ice Cream Cup", "Simple, cold, and creamy.", "from £2.95"]
  ]
};

let ticking = false;
let activeScene = "hero";
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let ringX = cursorX;
let ringY = cursorY;
let cursorLoopActive = false;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobilePanel.classList.remove("open");
  mobilePanel.setAttribute("aria-hidden", "true");
  menuToggles.forEach((button) => button.setAttribute("aria-expanded", "false"));
}

function renderMenu(category) {
  menuGrid.innerHTML = menuItems[category]
    .map(
      ([name, description, price]) => `
        <article class="menu-item reveal is-visible">
          <h3>${name}</h3>
          <p>${description}</p>
          <span class="menu-price">${price}</span>
        </article>
      `
    )
    .join("");
}

function getActiveScene() {
  const marker = window.innerHeight * 0.48;
  let current = activeScene;

  motionSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= marker && rect.bottom >= marker) {
      current = section.dataset.scene;
    }
  });

  return current;
}

function applySceneTheme(scene) {
  if (scene === activeScene) return;
  activeScene = scene;
  const [accent, wash] = sceneThemes[scene] || sceneThemes.hero;
  root.style.setProperty("--scene-accent", accent);
  root.style.setProperty("--scene-wash", wash);
  document.body.dataset.scene = scene;
}

function updateScrollEffects() {
  ticking = false;
  latestScroll = window.scrollY;
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = clamp(latestScroll / maxScroll, 0, 1);
  const heroTravel = clamp(latestScroll / Math.max(window.innerHeight, 1), 0, 1);

  root.style.setProperty("--scroll-progress", progress.toFixed(5));
  root.style.setProperty("--camera-y", `${(-progress * 420).toFixed(2)}px`);
  root.style.setProperty("--camera-z", `${(progress * 180).toFixed(2)}px`);
  root.style.setProperty("--camera-rotate", `${(progress * 16).toFixed(2)}deg`);
  root.style.setProperty("--hero-float", `${(-heroTravel * 26).toFixed(2)}px`);

  root.style.setProperty("--obj-burger-x", `${(-progress * 360).toFixed(2)}px`);
  root.style.setProperty("--obj-burger-y", `${(progress * 260).toFixed(2)}px`);
  root.style.setProperty("--obj-fries-x", `${(progress * 520).toFixed(2)}px`);
  root.style.setProperty("--obj-fries-y", `${(-progress * 180).toFixed(2)}px`);
  root.style.setProperty("--obj-wrap-x", `${(-progress * 440).toFixed(2)}px`);
  root.style.setProperty("--obj-wrap-y", `${(-progress * 360).toFixed(2)}px`);
  root.style.setProperty("--shard-one-x", `${(progress * 260).toFixed(2)}px`);
  root.style.setProperty("--shard-one-y", `${(progress * 90).toFixed(2)}px`);
  root.style.setProperty("--shard-two-x", `${(-progress * 340).toFixed(2)}px`);
  root.style.setProperty("--shard-two-y", `${(-progress * 120).toFixed(2)}px`);
  root.style.setProperty("--shard-three-x", `${(progress * 420).toFixed(2)}px`);
  root.style.setProperty("--shard-three-y", `${(-progress * 170).toFixed(2)}px`);

  progressBar.style.width = `${progress * 100}%`;
  applySceneTheme(getActiveScene());
  setHeaderState();
}

function requestScrollFrame() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateScrollEffects);
  }
}

function startCursorLoop() {
  if (cursorLoopActive || window.matchMedia("(pointer: coarse)").matches) return;
  cursorLoopActive = true;
  document.body.classList.add("cursor-ready");

  function tick() {
    ringX += (cursorX - ringX) * 0.16;
    ringY += (cursorY - ringY) * 0.16;
    cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(tick);
  }

  tick();
}

function setupMagneticButtons() {
  magneticTargets.forEach((target) => {
    target.addEventListener("mousemove", (event) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      target.style.setProperty("--magnet-x", `${x * 0.18}px`);
      target.style.setProperty("--magnet-y", `${y * 0.28}px`);
      document.body.classList.add("cursor-active");
    });

    target.addEventListener("mouseleave", () => {
      target.style.setProperty("--magnet-x", "0px");
      target.style.setProperty("--magnet-y", "0px");
      document.body.classList.remove("cursor-active");
    });
  });
}

setHeaderState();
renderMenu("burgers");
updateScrollEffects();
setupMagneticButtons();

window.addEventListener("scroll", requestScrollFrame, { passive: true });
window.addEventListener("resize", requestScrollFrame);
window.addEventListener("mousemove", (event) => {
  cursorX = event.clientX;
  cursorY = event.clientY;
  startCursorLoop();
});

menuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    mobilePanel.classList.toggle("open", isOpen);
    mobilePanel.setAttribute("aria-hidden", String(!isOpen));
    menuToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", String(isOpen)));
  });
});

mobilePanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(item);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

allergenSearch.addEventListener("input", () => {
  const query = allergenSearch.value.trim().toLowerCase();
  allergenRows.forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const original = button.textContent;
    button.textContent = "Sent";
    setTimeout(() => {
      button.textContent = original;
      form.reset();
    }, 1400);
  });
});
