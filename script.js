const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-mask, .reveal-scale");
const tabs = document.querySelectorAll("[data-category]");
const menuGrid = document.querySelector("[data-menu-grid]");
const allergenSearch = document.querySelector("[data-allergen-search]");
const allergenRows = document.querySelectorAll("[data-allergen-table] tr");

const menuItems = {
  burgers: [
    ["Classic Cheeseburger", "Juicy beef patty, melted cheese, pickles, onion, and signature sauce.", "from £6.95"],
    ["Mad Angus", "Bold beef, fresh toppings, melted cheese, and Chilo's signature sauce.", "from £8.95"],
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
    ["Chilo's Loaded Fries", "Golden fries topped with cheese, sauce, and flavour-packed extras.", "from £5.95"],
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
    ["Chilo's Cola", "Classic cola energy with a Chilo's finish.", "from £2.25"],
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

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobilePanel.classList.remove("open");
  mobilePanel.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}

function renderMenu(category) {
  menuGrid.innerHTML = menuItems[category]
    .map(
      ([name, description, price]) => `
        <article class="menu-item">
          <h3>${name}</h3>
          <p>${description}</p>
          <span class="menu-price">${price}</span>
        </article>
      `
    )
    .join("");
}

setHeaderState();
renderMenu("burgers");

window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  mobilePanel.classList.toggle("open", isOpen);
  mobilePanel.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
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
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
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
