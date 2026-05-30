const money = (value) => `£${value.toFixed(2)}`;

const categories = [
  ["all", "All"],
  ["starters", "Starters"],
  ["burgers", "Burgers"],
  ["pizza", "Pizza"],
  ["pasta", "Pasta"],
  ["mains", "Main Course"],
  ["desserts", "Desserts"],
  ["drinks", "Drinks"],
  ["kids", "Kids Meal"],
  ["deals", "Deals"]
];

const products = [
  { id: 1, cat: "starters", name: "Mozzarella Sticks", desc: "Crispy coating, melted cheese, garlic dip.", price: 4.95, image: "assets/fries-dips-plate.png", tags: ["Veg", "Halal"] },
  { id: 2, cat: "starters", name: "Chilli Wings", desc: "Tender wings tossed in Gallos chilli glaze.", price: 5.95, image: "assets/burger-meal-combo.png", tags: ["Halal", "Spicy"] },
  { id: 3, cat: "burgers", name: "Mad Angus", desc: "Beef, melted cheese, salad, signature sauce.", price: 8.95, image: "assets/premium-cheese-burger.png", tags: ["Halal", "Best seller"] },
  { id: 4, cat: "burgers", name: "King Kong", desc: "Big stacked burger with smoky sauce.", price: 9.95, image: "assets/flame-bacon-burger.png", tags: ["Halal", "Spicy"] },
  { id: 5, cat: "burgers", name: "The Big Bang", desc: "Chicken, beef, turkey, cheese, and fresh toppings.", price: 10.95, image: "assets/big-bang-exploded.png", tags: ["Halal", "Signature"] },
  { id: 6, cat: "burgers", name: "Loaded Chicken Burger", desc: "Crispy chicken, lettuce, cheese, creamy sauce.", price: 7.95, image: "assets/loaded-chicken-burger.png", tags: ["Halal"] },
  { id: 7, cat: "pizza", name: "Peri Chicken Pizza", desc: "Peri chicken, peppers, onions, mozzarella.", price: 9.95, image: "assets/hero-burgers.png", tags: ["Halal", "Spicy"] },
  { id: 8, cat: "pizza", name: "Margherita Pizza", desc: "Tomato base, mozzarella, basil finish.", price: 7.95, image: "assets/premium-cheese-burger.png", tags: ["Veg"] },
  { id: 9, cat: "pasta", name: "Creamy Chicken Pasta", desc: "Chicken, cream sauce, parmesan, herbs.", price: 8.95, image: "assets/wraps-pair.png", tags: ["Halal"] },
  { id: 10, cat: "pasta", name: "Arrabbiata Pasta", desc: "Tomato chilli sauce with garlic and basil.", price: 7.50, image: "assets/wraps-pair.png", tags: ["Veg", "Spicy"] },
  { id: 11, cat: "mains", name: "Flame Chicken Wrap", desc: "Marinated chicken, salad, and sauce wrapped fresh.", price: 6.95, image: "assets/chicken-wrap.png", tags: ["Halal"] },
  { id: 12, cat: "mains", name: "Gallos Loaded Fries", desc: "Fries, cheese, sauce, and bold toppings.", price: 5.95, image: "assets/fries-dips-plate.png", tags: ["Halal"] },
  { id: 13, cat: "desserts", name: "Cookie Dough", desc: "Warm cookie dough with ice cream.", price: 5.95, image: "assets/single-stack-burger.png", tags: ["Veg"] },
  { id: 14, cat: "desserts", name: "Chocolate Shake", desc: "Cold, rich chocolate shake.", price: 4.95, image: "assets/drink-perfy-cans.png", tags: ["Veg"] },
  { id: 15, cat: "drinks", name: "Perfy Tropical Citrus", desc: "Fruit soda served cold.", price: 2.75, image: "assets/drink-perfy-cans.png", tags: ["Cold"] },
  { id: 16, cat: "drinks", name: "Gallos Cola", desc: "Classic cola with a Gallos finish.", price: 2.25, image: "assets/drink-perfy-cans.png", tags: ["Cold"] },
  { id: 17, cat: "kids", name: "Kids Burger Meal", desc: "Small burger, fries, and drink.", price: 5.95, image: "assets/single-stack-burger.png", tags: ["Kids", "Halal"] },
  { id: 18, cat: "kids", name: "Kids Strips Meal", desc: "Chicken strips, fries, and drink.", price: 5.50, image: "assets/fries-dips-plate.png", tags: ["Kids", "Halal"] },
  { id: 19, cat: "deals", name: "Burger Combo", desc: "Any classic burger with fries and drink.", price: 10.95, image: "assets/combo-burger-fries.png", tags: ["Combo"] },
  { id: 20, cat: "deals", name: "Family Feast", desc: "Four burgers, two fries, four drinks.", price: 32.00, image: "assets/burger-meal-combo.png", tags: ["Offer"] }
];

const deals = [
  { code: "WELCOME20", title: "20% Off First Online Order", desc: "New customer discount on orders over £15.", amount: "20%", image: "assets/combo-burger-fries.png", type: "percent", value: 0.2, min: 15 },
  { code: "COLLECT10", title: "Collection Saver", desc: "10% off collection orders over £20.", amount: "10%", image: "assets/premium-cheese-burger.png", type: "percent", value: 0.1, min: 20, method: "collection" },
  { code: "FREEDEL", title: "Free Delivery", desc: "Free delivery on delivery orders over £25.", amount: "£2.99", image: "assets/drink-perfy-cans.png", type: "delivery", value: 2.99, min: 25, method: "delivery" },
  { code: "BIRTHDAY5", title: "Birthday Voucher", desc: "£5 off your birthday order over £25.", amount: "£5", image: "assets/drink-perfy-cans.png", type: "fixed", value: 5, min: 25 }
];

const offerPosters = [
  { code: "WELCOME20", title: "Special Beef Burger", desc: "New customer discount on orders over GBP15.", amount: "20%", image: "assets/banner-special-beef-burger.jpg", type: "percent", value: 0.2, min: 15 },
  { code: "COLLECT10", title: "Food Menu Deal", desc: "10% off collection orders over GBP20.", amount: "10%", image: "assets/banner-food-facebook.jpg", type: "percent", value: 0.1, min: 20, method: "collection" },
  { code: "SPECIAL50", title: "Today Special", desc: "50% off selected special menu orders over GBP25.", amount: "50%", image: "assets/banner-todays-special.jpg", type: "percent", value: 0.5, min: 25 },
  { code: "MENUSAVER", title: "Food Menu Offer", desc: "25% off selected menu orders over GBP20.", amount: "25%", image: "assets/banner-food-menu.jpeg", type: "percent", value: 0.25, min: 20 }
];

const stores = [
  { name: "Gallos Aberdeen", city: "Aberdeen", postcode: "AB10 1AA", address: "Union Street, Aberdeen", phone: "01224 555 014", hours: "11:00 - 23:00" },
  { name: "Gallos Manchester", city: "Manchester", postcode: "M1 1AD", address: "Piccadilly Gardens, Manchester", phone: "0161 555 018", hours: "11:00 - 23:30" },
  { name: "Gallos Birmingham", city: "Birmingham", postcode: "B2 4QA", address: "Bullring, Birmingham", phone: "0121 555 022", hours: "11:00 - 23:00" },
  { name: "Gallos London", city: "London", postcode: "E1 6AN", address: "Brick Lane, London", phone: "020 5555 0177", hours: "10:30 - 00:00" },
  { name: "Gallos Cardiff", city: "Cardiff", postcode: "CF10 1EP", address: "Queen Street, Cardiff", phone: "029 5555 019", hours: "11:00 - 22:30" }
];

const state = {
  activeCategory: "all",
  search: "",
  method: "collection",
  branch: "Aberdeen",
  collectionTime: "ASAP - 20 min",
  deliveryAddress: "",
  cart: [],
  voucher: null,
  selectedProduct: null,
  modalQty: 1,
  paymentMethod: "cash",
  user: JSON.parse(localStorage.getItem("gallosUser") || "null"),
  history: JSON.parse(localStorage.getItem("gallosOrderHistory") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const nodes = {
  deals: $("[data-deals-carousel]"),
  offerDots: $("[data-offer-dots]"),
  categoryRail: $("[data-category-rail]"),
  menuResults: $("[data-menu-results]"),
  search: $("[data-menu-search]"),
  cartItems: $("[data-cart-items]"),
  cartCount: $("[data-cart-count]"),
  subtotal: $("[data-subtotal]"),
  deliveryFee: $("[data-delivery-fee]"),
  service: $("[data-service]"),
  discount: $("[data-discount]"),
  total: $("[data-total]"),
  mobileTotal: $("[data-mobile-total]"),
  mobileCartButton: $("[data-mobile-cart-open]"),
  cartContext: $("[data-cart-context]"),
  voucherMessage: $("[data-voucher-message]"),
  checkoutButton: $("[data-checkout-button]"),
  checkoutForm: $("[data-checkout-form]"),
  profileOpen: $("[data-profile-open]"),
  profileMenu: $("[data-profile-menu]"),
  profileSummaryName: $("[data-profile-summary-name]"),
  profileSummaryEmail: $("[data-profile-summary-email]"),
  signInButton: $("[data-auth-open]"),
  accountZone: $("[data-account-zone]"),
  accountTitle: $("[data-account-title]"),
  accountBody: $("[data-account-body]"),
  accountEdit: $("[data-account-edit]"),
  paymentGrid: $("[data-payment-grid]"),
  cardDetails: $("[data-card-details]"),
  collectionDetails: $("[data-collection-details]"),
  deliveryDetails: $("[data-delivery-details]") ,
  productModal: $("[data-product-modal]"),
  productConfig: $("[data-product-config]"),
  authModal: $("[data-auth-modal]"),
  accountModal: $("[data-account-modal]"),
  accountModalTitle: $("[data-account-modal-title]"),
  accountModalBody: $("[data-account-modal-body]"),
  accountModalEdit: $("[data-account-modal-edit]"),
  confirmation: $("[data-order-confirmation]"),
  confirmationCopy: $("[data-confirmation-copy]")
};

const dialogs = $$("dialog");

function updateDialogState() {
  document.body.classList.toggle("dialog-open", dialogs.some((dialog) => dialog.open));
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
  updateDialogState();
}

function closeOtherDialogs(activeDialog) {
  dialogs.forEach((dialog) => {
    if (dialog !== activeDialog && dialog.open) dialog.close();
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (dialog.open) {
    updateDialogState();
    return;
  }
  closeOtherDialogs(dialog);
  try {
    dialog.showModal();
  } catch (error) {
    dialog.setAttribute("open", "");
  }
  updateDialogState();
}

dialogs.forEach((dialog) => {
  dialog.addEventListener("close", updateDialogState);
  dialog.addEventListener("cancel", updateDialogState);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
});

function branchDisplayName(name = state.branch) {
  return name && name.startsWith("Gallos ") ? name : `Gallos ${name || "Aberdeen"}`;
}

// Branch selection modal: prompt postcode/city then show franchise list
const branchModal = document.querySelector('[data-branch-modal]');
if (branchModal) {
  const branchForm = branchModal.querySelector('[data-branch-form]');
  const branchSearch = branchModal.querySelector('[data-branch-search]');
  const branchList = branchModal.querySelector('[data-branch-list]');
  const branchSkip = branchModal.querySelector('[data-branch-skip]');

  function branchListHtml(list) {
    if (!list.length) return `<p class="popup-message">No stores found. Try a different postcode or city.</p>`;
    return list.map((s) => `
      <article class="store-card" data-store-name="${s.name}">
        <div>
          <strong>${s.name}</strong>
          <span>${s.address}</span>
          <small>${s.city} - ${s.postcode}</small>
        </div>
        <div>
          <button class="solid-button select-branch" type="button">Select</button>
        </div>
      </article>
    `).join("");
  }

  function openBranchModal() {
    // always show branch modal on ordering page load
    const saved = localStorage.getItem('gallosBranch');
    branchList.innerHTML = branchListHtml(stores);
    if (saved) {
      // prefill search with saved branch name
      branchSearch.value = saved;
    }
    openDialog(branchModal);
  }

  function setSelectedBranch(name, opts = {persist:true}){
    state.branch = name;
    if (opts.persist) localStorage.setItem('gallosBranch', name);
    if (nodes.cartContext) nodes.cartContext.textContent = `Collection · ${branchDisplayName(name)} · ${state.collectionTime}`;
    // update header branch display
    const headerName = document.querySelector('[data-header-branch-name]');
    const headerPost = document.querySelector('[data-header-branch-postcode]');
    if (headerName) headerName.textContent = name;
    const store = stores.find((s) => s.name === name);
    if (headerPost) headerPost.textContent = store ? `${store.city} · ${store.postcode}` : '';
  }

  branchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = (branchSearch.value || '').trim().toLowerCase();
    const filtered = q
      ? stores.filter((st) => `${st.name} ${st.city} ${st.postcode} ${st.address}`.toLowerCase().includes(q))
      : stores;
    branchList.innerHTML = branchListHtml(filtered);
  });

  branchList.addEventListener('click', (e) => {
    const btn = e.target.closest('.select-branch');
    if (!btn) return;
    const card = btn.closest("[data-store-name]");
    const store = stores.find((item) => item.name === card?.dataset.storeName);
    if (!store) return;
    setSelectedBranch(store.name);
    closeDialog(branchModal);
    document.querySelector('#menu-board')?.scrollIntoView({behavior:'smooth'});
  });

  // header search button to re-open branch modal
  const branchOpenBtn = document.querySelector('[data-branch-open]');
  if (branchOpenBtn) branchOpenBtn.addEventListener('click', openBranchModal);

  branchSkip?.addEventListener('click', () => {
    closeDialog(branchModal);
    document.querySelector('#menu-board')?.scrollIntoView({behavior:'smooth'});
  });

  // update header from saved branch when page loads
  const savedBranch = localStorage.getItem('gallosBranch');
  if (savedBranch) {
    setSelectedBranch(savedBranch, {persist:false});
  } else {
    setSelectedBranch("Gallos Aberdeen", {persist:false});
  }
}

function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.linePrice * item.qty, 0);
  const deliveryFee = state.method === "delivery" && subtotal > 0 ? 2.99 : 0;
  const service = subtotal > 0 ? 0.99 : 0;
  let discount = 0;

  if (state.voucher) {
    if (state.voucher.type === "percent") discount = subtotal * state.voucher.value;
    if (state.voucher.type === "fixed") discount = state.voucher.value;
    if (state.voucher.type === "delivery") discount = Math.min(deliveryFee, state.voucher.value);
  }

  return { subtotal, deliveryFee, service, discount, total: Math.max(0, subtotal + deliveryFee + service - discount) };
}

function renderDeals() {
  nodes.deals.innerHTML = offerPosters.map((deal, index) => `
    <article class="deal-card-v3 deal-theme-${index + 1}${index === 0 ? " active" : ""}" data-offer-slide="${index}">
      <div class="deal-copy">
        <span>${deal.amount}</span>
        <h3>${deal.title}</h3>
        <p>${deal.desc}</p>
        <button type="button" data-apply-deal="${deal.code}">Apply offer</button>
      </div>
      <div class="deal-media">
        <img src="${deal.image}" alt="${deal.title}" />
      </div>
      <b class="deal-code">${deal.code}</b>
    </article>
  `).join("");

  nodes.offerDots.innerHTML = offerPosters.map((deal, index) => `
    <button class="offer-dot${index === 0 ? " active" : ""}" type="button" data-offer-dot="${index}" aria-label="Show ${deal.title}"></button>
  `).join("");
}

function setOfferSlide(index, behavior = "smooth") {
  const slides = $$("[data-offer-slide]");
  if (!slides.length) return;
  const activeIndex = index % slides.length;

  slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === activeIndex));
  $$(".offer-dot").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeIndex));
}

function currentOfferIndex() {
  const active = $("[data-offer-slide].active");
  return active ? Number(active.dataset.offerSlide) : 0;
}

function startOfferAutoplay() {
  if (!nodes.deals || offerPosters.length < 2) return;
  window.setInterval(() => {
    setOfferSlide(currentOfferIndex() + 1);
  }, 4200);
}

function renderCategories() {
  nodes.categoryRail.innerHTML = categories.map(([id, label]) => {
    const count = id === "all" ? products.length : products.filter((item) => item.cat === id).length;
    return `
      <button class="category-card ${id === state.activeCategory ? "active" : ""}" type="button" data-category="${id}">
        <span>${label}</span>
        <small>${count}</small>
      </button>
    `;
  }).join("");
}

function renderMenu() {
  const query = state.search.toLowerCase();
  const filtered = products.filter((item) => {
    const matchesCategory = state.activeCategory === "all" || item.cat === state.activeCategory;
    const text = `${item.name} ${item.desc} ${item.tags.join(" ")}`.toLowerCase();
    return matchesCategory && (!query || text.includes(query));
  });

  nodes.menuResults.innerHTML = filtered.length ? filtered.map((item) => `
    <article class="food-card-v3">
      <img src="${item.image}" alt="${item.name}" />
      <div class="food-card-body">
        <div class="food-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="food-card-actions">
          <strong>${money(item.price)}</strong>
          <button type="button" data-customise="${item.id}">Customise</button>
          <button type="button" class="add-quick" data-quick-add="${item.id}">Add</button>
        </div>
      </div>
    </article>
  `).join("") : `<p class="empty-menu">No items found in this category.</p>`;
}

function renderCart() {
  const summary = totals();
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (nodes.cartCount) nodes.cartCount.textContent = String(count);
  nodes.subtotal.textContent = money(summary.subtotal);
  nodes.deliveryFee.textContent = money(summary.deliveryFee);
  nodes.service.textContent = money(summary.service);
  nodes.discount.textContent = `-${money(summary.discount)}`;
  nodes.total.textContent = money(summary.total);
  nodes.mobileTotal.textContent = money(summary.total);
  nodes.checkoutButton.disabled = count === 0;
  nodes.mobileCartButton.hidden = count === 0;
  nodes.cartContext.textContent = state.method === "collection"
    ? `Collection · ${branchDisplayName()} · ${state.collectionTime}`
    : `Delivery · ${state.deliveryAddress || "address added at checkout"}`;

  nodes.cartItems.innerHTML = state.cart.length ? state.cart.map((item, index) => `
    <article class="cart-line-v3">
      <img src="${item.image}" alt="" />
      <div>
        <strong>${item.name}</strong>
        <span>${item.options.join(" · ") || "Regular"}</span>
        <small>${money(item.linePrice)} each</small>
        <div class="cart-line-actions">
          <button type="button" data-minus="${index}">-</button>
          <b>${item.qty}</b>
          <button type="button" data-plus="${index}">+</button>
          <button type="button" data-remove="${index}">Remove</button>
        </div>
      </div>
    </article>
  `).join("") : `<p class="empty-cart">Add food from the menu to start your order.</p>`;
}

function addQuick(id) {
  const item = products.find((product) => product.id === id);
  state.cart.push({ ...item, options: ["Regular"], qty: 1, linePrice: item.price });
  renderCart();
}

function openProduct(id) {
  const item = products.find((product) => product.id === id);
  state.selectedProduct = item;
  state.modalQty = 1;
  nodes.productConfig.reset();
  $("[data-modal-image]").src = item.image;
  $("[data-modal-image]").alt = item.name;
  $("[data-modal-tags]").textContent = item.tags.join(" · ");
  $("[data-modal-name]").textContent = item.name;
  $("[data-modal-desc]").textContent = item.desc;
  $("[data-modal-price]").textContent = money(item.price);
  $("[data-modal-qty]").textContent = "1";
  openDialog(nodes.productModal);
}

function addConfiguredProduct(form) {
  const data = new FormData(form);
  const base = state.selectedProduct;
  const sizeExtra = Number(data.get("size") || 0);
  const addons = [...form.querySelectorAll("input[name='addons']:checked")];
  const addonCost = addons.reduce((sum, item) => sum + Number(item.value), 0);
  const options = [
    form.elements.size.selectedOptions[0].text,
    ...addons.map((item) => item.dataset.label),
    data.get("notes") ? `Note: ${data.get("notes")}` : ""
  ].filter(Boolean);

  state.cart.push({ ...base, options, qty: state.modalQty, linePrice: base.price + sizeExtra + addonCost });
  closeDialog(nodes.productModal);
  renderCart();
}

function applyVoucher(code) {
  const deal = [...deals, ...offerPosters].find((item) => item.code === code.toUpperCase());
  const summary = totals();

  if (!deal) return "This voucher has expired or does not exist.";
  if (deal.method && deal.method !== state.method) return `This voucher is only valid for ${deal.method}.`;
  if (summary.subtotal < deal.min) return `This voucher requires a minimum spend of ${money(deal.min)}.`;

  state.voucher = deal;
  renderCart();
  return "Voucher applied successfully.";
}

function placeOrder(form) {
  if (!state.cart.length) {
    nodes.confirmationCopy.textContent = "Please add at least one item before placing your order.";
    openDialog(nodes.confirmation);
    return;
  }

  const data = new FormData(form);
  const summary = totals();
  syncCheckoutProfile(data);
  const order = {
    id: Date.now(),
    number: `GA-${Math.floor(10000 + Math.random() * 89999)}`,
    date: new Date().toLocaleDateString("en-GB"),
    method: state.method === "collection" ? `Collection from ${state.branch}` : "Delivery",
    total: money(summary.total),
    payment: state.paymentMethod,
    items: state.cart.map((item) => `${item.qty}x ${item.name}`).join(", ")
  };

  state.history.unshift(order);
  localStorage.setItem("gallosOrderHistory", JSON.stringify(state.history.slice(0, 10)));
  nodes.confirmationCopy.textContent = `${order.number} · ${order.method}. Total ${order.total}. We will contact ${data.get("phone")} to confirm.`;
  openDialog(nodes.confirmation);
  state.cart = [];
  state.voucher = null;
  form.reset();
  renderCart();
}

renderDeals();
renderCategories();
renderMenu();
renderCart();
startOfferAutoplay();

document.addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]");
  const quick = event.target.closest("[data-quick-add]");
  const customise = event.target.closest("[data-customise]");
  const deal = event.target.closest("[data-apply-deal]");
  const method = event.target.closest("[data-method]");
  const payment = event.target.closest("[data-payment-method]");
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");
  const offerNext = event.target.closest("[data-offer-next]");
  const offerPrev = event.target.closest("[data-offer-prev]");
  const offerDot = event.target.closest("[data-offer-dot]");

  if (category) {
    state.activeCategory = category.dataset.category;
    renderCategories();
    renderMenu();
  }
  if (quick) addQuick(Number(quick.dataset.quickAdd));
  if (customise) openProduct(Number(customise.dataset.customise));
  if (deal) nodes.voucherMessage.textContent = applyVoucher(deal.dataset.applyDeal);
  if (method) {
    state.method = method.dataset.method;
    $$(".method-tab").forEach((button) => button.classList.toggle("active", button.dataset.method === state.method));
    renderMethodDetails();
    renderCart();
  }
  if (payment) {
    const pm = payment.dataset.paymentMethod;
    setPaymentMethod(pm, { persist: true });
    renderCart();
  }
  if (plus) state.cart[Number(plus.dataset.plus)].qty += 1;
  if (minus) state.cart[Number(minus.dataset.minus)].qty -= 1;
  if (remove) state.cart.splice(Number(remove.dataset.remove), 1);
  state.cart = state.cart.filter((item) => item.qty > 0);
  if (plus || minus || remove) renderCart();
  if (offerNext) nodes.deals.scrollBy({ left: 360, behavior: "smooth" });
  if (offerPrev) nodes.deals.scrollBy({ left: -360, behavior: "smooth" });
  if (offerDot) setOfferSlide(Number(offerDot.dataset.offerDot));
});


nodes.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
});

$("[data-collection-time]").addEventListener("change", (event) => {
  state.collectionTime = event.target.value;
  renderCart();
});

$("[data-voucher-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  nodes.voucherMessage.textContent = applyVoucher(new FormData(event.currentTarget).get("voucher"));
});

$("[data-clear-cart]").addEventListener("click", () => {
  state.cart = [];
  state.voucher = null;
  renderCart();
});

nodes.productConfig.addEventListener("submit", (event) => {
  event.preventDefault();
  addConfiguredProduct(event.currentTarget);
});

$("[data-modal-minus]").addEventListener("click", () => {
  state.modalQty = Math.max(1, state.modalQty - 1);
  $("[data-modal-qty]").textContent = String(state.modalQty);
});

$("[data-modal-plus]").addEventListener("click", () => {
  state.modalQty += 1;
  $("[data-modal-qty]").textContent = String(state.modalQty);
});

$("[data-product-close]").addEventListener("click", () => closeDialog(nodes.productModal));
// Auth / Profile helpers
function userDisplayName(user = state.user) {
  if (!user) return "Guest";
  return user.firstName ? `${user.firstName}${user.lastName ? " " + user.lastName : ""}` : (user.name || user.email || user.mobile || "Gallos Customer");
}

function userInitial(user = state.user) {
  return userDisplayName(user).charAt(0).toUpperCase() || "G";
}

function profileRows(user = state.user) {
  const empty = "Not added yet";
  return [
    ["Name", user?.firstName || user?.name || empty],
    ["Last name", user?.lastName || empty],
    ["Number", user?.mobile || empty],
    ["Email", user?.email || empty],
    ["Gender", user?.gender || empty],
    ["Date of birth", user?.dob || empty]
  ];
}

function saveUser(user) {
  state.user = { ...(state.user || {}), ...user };
  localStorage.setItem("gallosUser", JSON.stringify(state.user));
  renderProfileUI();
  fillCheckoutFromProfile();
}

function clearUser() {
  state.user = null;
  localStorage.removeItem("gallosUser");
  renderProfileUI();
}

function renderProfileUI() {
  if (state.user) {
    if (nodes.profileOpen) {
      nodes.profileOpen.hidden = false;
      nodes.profileOpen.classList.add("is-signed-in");
      nodes.profileOpen.setAttribute("aria-expanded", "false");
      nodes.profileOpen.innerHTML = `<span class="profile-avatar profile-avatar-small" aria-hidden="true"><svg class="profile-icon" viewBox="0 0 24 24" focusable="false"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="8" r="4" /></svg></span><span class="profile-name">${userDisplayName()}</span>`;
    }
    if (nodes.signInButton) nodes.signInButton.hidden = true;
    if (nodes.profileSummaryName) nodes.profileSummaryName.textContent = userDisplayName();
    if (nodes.profileSummaryEmail) nodes.profileSummaryEmail.textContent = [state.user.mobile, state.user.email].filter(Boolean).join(" · ") || "Profile ready";
  } else {
    if (nodes.profileOpen) {
      nodes.profileOpen.hidden = true;
      nodes.profileOpen.classList.remove("is-signed-in");
    }
    if (nodes.signInButton) nodes.signInButton.hidden = false;
    if (nodes.profileSummaryName) nodes.profileSummaryName.textContent = 'Guest';
    if (nodes.profileSummaryEmail) nodes.profileSummaryEmail.textContent = 'Sign in or sign up';
    if (nodes.profileMenu) nodes.profileMenu.hidden = true;
  }
}

function fillCheckoutFromProfile() {
  if (!state.user || !nodes.checkoutForm) return;
  const fields = nodes.checkoutForm.elements;
  if (fields.name && !fields.name.value) fields.name.value = userDisplayName();
  if (fields.phone && !fields.phone.value) fields.phone.value = state.user.mobile || "";
  if (fields.email && !fields.email.value) fields.email.value = state.user.email || "";
  if (fields.address && !fields.address.value) fields.address.value = state.user.address || "";
  if (fields.postcode && !fields.postcode.value) fields.postcode.value = state.user.postcode || "";
}

function syncCheckoutProfile(data) {
  if (!state.user) return;
  const updates = {
    name: data.get("name") || state.user.name || "",
    mobile: data.get("phone") || state.user.mobile || "",
    email: data.get("email") || state.user.email || "",
    address: data.get("address") || state.user.address || "",
    postcode: data.get("postcode") || state.user.postcode || "",
    deliveryNotes: data.get("notes") || state.user.deliveryNotes || ""
  };

  if (!state.user.firstName && updates.name) {
    const [firstName, ...lastName] = updates.name.trim().split(/\s+/);
    updates.firstName = firstName || "";
    updates.lastName = lastName.join(" ");
  }

  saveUser(updates);
}

function savedAddressHtml() {
  if (!state.user?.address) return "<p>No saved address yet.</p>";
  return `
    <span>Saved address</span>
    <strong>${state.user.addressLabel || "Primary address"}</strong>
    <p>${state.user.address}${state.user.city ? ", " + state.user.city : ""}${state.user.postcode ? ", " + state.user.postcode : ""}</p>
    ${state.user.deliveryNotes ? `<small>${state.user.deliveryNotes}</small>` : ""}
  `;
}

function storeListHtml(list) {
  if (!list.length) return `<p class="popup-message">No store found. Try another city or postcode.</p>`;
  return list.map((store) => `
    <article class="store-card">
      <div>
        <strong>${store.name}</strong>
        <span>${store.address}</span>
        <small>${store.city} - ${store.postcode}</small>
      </div>
      <div>
        <b>${store.phone}</b>
        <small>${store.hours}</small>
      </div>
    </article>
  `).join("");
}

function orderTrackHtml(order) {
  const isDelivery = order.method.toLowerCase().includes("delivery");
  const steps = isDelivery
    ? ["Order received", "Preparing", "Out for delivery", "Delivered"]
    : ["Order received", "Preparing", "Ready for collection", "Collected"];
  return `
    <article class="track-card">
      <span>${order.number}</span>
      <strong>${isDelivery ? "Delivery order" : "Collection order"}</strong>
      <p>${order.method} - ${order.total}</p>
      <div class="track-steps">
        ${steps.map((step, index) => `<div class="${index < 2 ? "active" : ""}"><i></i><span>${step}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function showAccountPanel(action = "profile") {
  if (!state.user && !["storelocations", "contactus", "privacy", "terms"].includes(action)) {
    openAuthModal("signup");
    return;
  }

  const panels = {
    profile: {
      title: "Profile",
      edit: true,
      body: `
        <div class="profile-card-inline">
          <span class="profile-avatar" aria-hidden="true"><svg class="profile-icon" viewBox="0 0 24 24" focusable="false"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="8" r="4" /></svg></span>
          <div>
            <strong>${userDisplayName()}</strong>
            <small>${[state.user?.mobile, state.user?.email].filter(Boolean).join(" · ") || "Add your contact details"}</small>
          </div>
        </div>
        <dl class="profile-detail-list">
          ${profileRows().map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
        </dl>
      `
    },
    myaddress: {
      title: "My address",
      edit: true,
      body: `
        <form class="popup-form" data-address-form>
          <label>Address name <input name="label" placeholder="Home, Office, etc." value="${state.user?.addressLabel || ""}" /></label>
          <label>Street address <input name="address" placeholder="Street address" value="${state.user?.address || ""}" required /></label>
          <div class="popup-form-grid">
            <label>City <input name="city" placeholder="City" value="${state.user?.city || ""}" /></label>
            <label>Postcode <input name="postcode" placeholder="Postcode" value="${state.user?.postcode || ""}" required /></label>
          </div>
          <label>Delivery note <textarea name="deliveryNotes" rows="3" placeholder="Door code, floor, landmark">${state.user?.deliveryNotes || ""}</textarea></label>
          <button class="solid-button" type="submit">Save address</button>
          <p class="popup-message" data-address-message>${state.user?.address ? "Saved address is ready for checkout." : "Add a new address and save it to your profile."}</p>
        </form>
        <div class="saved-address-card" data-saved-address>${savedAddressHtml()}</div>
      `
    },
    myorders: {
      title: "My orders",
      body: state.history.length
        ? `<ul class="account-list">${state.history.map((order) => `<li><strong>${order.number}</strong><span>${order.date} · ${order.total}</span><small>${order.items}</small></li>`).join("")}</ul>`
        : "<p>No previous orders yet.</p>"
    },
    storelocations: {
      title: "Store locations",
      body: `
        <form class="popup-search" data-store-search>
          <label>Search by city or postcode
            <input name="query" placeholder="Aberdeen, London, AB10..." />
          </label>
          <button class="ghost-mini" type="submit">Search</button>
        </form>
        <div class="store-list" data-store-list>${storeListHtml(stores)}</div>
      `
    },
    trackorders: {
      title: "Track Orders",
      body: `
        <form class="popup-search" data-track-form>
          <label>Order number
            <input name="orderNumber" placeholder="GA-12345" value="${state.history[0]?.number || ""}" required />
          </label>
          <button class="ghost-mini" type="submit">Track</button>
        </form>
        <div class="track-result" data-track-result>
          ${state.history[0] ? orderTrackHtml(state.history[0]) : "<p>Enter your order number to see collection or delivery status.</p>"}
        </div>
      `
    },
    contactus: {
      title: "Contact Us",
      body: `
        <div class="contact-grid">
          <article><span>Help line</span><strong>0800 555 0199</strong><small>Daily 10:00 - 23:00</small></article>
          <article><span>Aberdeen branch</span><strong>01224 555 014</strong><small>Union Street orders</small></article>
          <article><span>Manchester branch</span><strong>0161 555 018</strong><small>Piccadilly Gardens orders</small></article>
          <article><span>Email support</span><strong>hello@gallos.local</strong><small>Replies within 24 hours</small></article>
        </div>
      `
    },
    privacy: {
      title: "Privacy Policy",
      body: `
        <div class="legal-copy">
          <p>This is dummy privacy policy content for now. Gallos may collect profile details, delivery address, contact information, and order history to support checkout and customer service.</p>
          <p>Demo profile information is stored locally in this browser. In production, customer data would be protected with secure storage, access controls, and clear consent.</p>
          <p>Customers may request updates or removal of their account details by contacting support.</p>
        </div>
      `
    },
    terms: {
      title: "Terms & Conditions",
      body: `
        <div class="legal-copy">
          <p>This is dummy terms and conditions content for now. Prices, menu availability, delivery times, and promotional offers may vary by branch and order method.</p>
          <p>Orders are accepted after branch confirmation. Delivery estimates are guidance only and may change due to kitchen volume, weather, traffic, or address availability.</p>
          <p>Refunds, replacements, and cancellations are handled by the branch based on order status and customer support review.</p>
        </div>
      `
    }
  };

  const panel = panels[action] || panels.profile;
  nodes.accountModalTitle.textContent = panel.title;
  nodes.accountModalBody.innerHTML = panel.body;
  nodes.accountModalEdit.hidden = !panel.edit;
  openDialog(nodes.accountModal);
}

function openAuthModal(mode) {
  const signupForm = document.querySelector('[data-signup-form]');
  const signinForm = document.querySelector('[data-signin-form]');

  if (!signupForm || !signinForm) return openDialog(nodes.authModal);

  if (mode === 'edit' && state.user) {
    signupForm.querySelector('h2').textContent = 'Edit profile';
    signupForm.firstName.value = state.user.firstName || '';
    signupForm.lastName.value = state.user.lastName || '';
    signupForm.email.value = state.user.email || '';
    signupForm.mobile.value = state.user.mobile || '';
    if (signupForm.gender) signupForm.gender.value = state.user.gender || '';
    if (signupForm.dob) signupForm.dob.value = state.user.dob || '';
    if (signupForm.password) signupForm.password.required = false;
    signupForm.querySelector('button[type="submit"]').textContent = 'Save changes';
    signupForm.style.display = '';
    signinForm.style.display = 'none';
  } else {
    signupForm.querySelector('h2').textContent = 'Create Account';
    signupForm.querySelector('button[type="submit"]').textContent = 'Create Account';
    if (signupForm.password) signupForm.password.required = true;
    signupForm.reset();
    signupForm.style.display = '';
    signinForm.style.display = '';
  }

  openDialog(nodes.authModal);
}

$$('[data-auth-open]').forEach((button) => button.addEventListener('click', () => openAuthModal('signup')));
document.querySelector('[data-auth-close]').addEventListener('click', () => closeDialog(nodes.authModal));
document.querySelector('[data-auth-guest]').addEventListener('click', () => closeDialog(nodes.authModal));
document.querySelector('[data-account-close]').addEventListener('click', () => closeDialog(nodes.accountModal));

// wire signup form (create or edit)
document.querySelector('[data-signup-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const user = {
    firstName: data.get('firstName') || '',
    lastName: data.get('lastName') || '',
    email: data.get('email') || '',
    mobile: data.get('mobile') || '',
    gender: data.get('gender') || '',
    dob: data.get('dob') || ''
  };
  user.name = user.firstName ? `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}` : (user.email || user.mobile || 'Gallos Customer');
  saveUser(user);
  closeDialog(nodes.authModal);
  showAccountPanel("profile");
});

// simple signin: accept stored user or create minimal account
document.querySelector('[data-signin-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const login = data.get('login');
  const stored = JSON.parse(localStorage.getItem('gallosUser') || 'null');
  if (stored && (stored.email === login || stored.mobile === login)) {
    saveUser(stored);
  } else {
    const user = { name: login, email: login, mobile: login };
    saveUser(user);
  }
  closeDialog(nodes.authModal);
});

// profile button toggle and menu actions
if (nodes.profileOpen) {
  nodes.profileOpen.addEventListener('click', () => {
    const expanded = nodes.profileOpen.getAttribute('aria-expanded') === 'true';
    nodes.profileOpen.setAttribute('aria-expanded', String(!expanded));
    if (nodes.profileMenu) nodes.profileMenu.hidden = expanded;
  });
}

if (nodes.profileMenu) {
  nodes.profileMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-profile-action]');
    if (!btn) return;
    const action = btn.dataset.profileAction;
    if (action === 'profile') {
      showAccountPanel('profile');
    } else if (action === 'logout') {
      clearUser();
      nodes.accountZone.hidden = true;
    } else {
      showAccountPanel(action);
    }
    if (nodes.profileMenu) nodes.profileMenu.hidden = true;
  });
}

if (nodes.accountEdit) {
  nodes.accountEdit.addEventListener("click", () => openAuthModal("edit"));
}

if (nodes.accountModalEdit) {
  nodes.accountModalEdit.addEventListener("click", () => {
    closeDialog(nodes.accountModal);
    openAuthModal("edit");
  });
}

if (nodes.accountModalBody) {
  nodes.accountModalBody.addEventListener("submit", (event) => {
    const addressForm = event.target.closest("[data-address-form]");
    const storeSearch = event.target.closest("[data-store-search]");
    const trackForm = event.target.closest("[data-track-form]");

    if (addressForm) {
      event.preventDefault();
      const data = new FormData(addressForm);
      saveUser({
        addressLabel: data.get("label") || "Primary address",
        address: data.get("address") || "",
        city: data.get("city") || "",
        postcode: data.get("postcode") || "",
        deliveryNotes: data.get("deliveryNotes") || ""
      });
      const saved = nodes.accountModalBody.querySelector("[data-saved-address]");
      const message = nodes.accountModalBody.querySelector("[data-address-message]");
      if (saved) saved.innerHTML = savedAddressHtml();
      if (message) message.textContent = "Address saved successfully.";
    }

    if (storeSearch) {
      event.preventDefault();
      const query = new FormData(storeSearch).get("query").trim().toLowerCase();
      const filtered = query
        ? stores.filter((store) => `${store.name} ${store.city} ${store.postcode} ${store.address}`.toLowerCase().includes(query))
        : stores;
      nodes.accountModalBody.querySelector("[data-store-list]").innerHTML = storeListHtml(filtered);
    }

    if (trackForm) {
      event.preventDefault();
      const orderNumber = new FormData(trackForm).get("orderNumber").trim().toLowerCase();
      const order = state.history.find((item) => item.number.toLowerCase() === orderNumber);
      nodes.accountModalBody.querySelector("[data-track-result]").innerHTML = order
        ? orderTrackHtml(order)
        : `<p class="popup-message">No order found for this number. Please check and try again.</p>`;
    }
  });
}

if (nodes.paymentGrid) {
  nodes.paymentGrid.addEventListener("click", (event) => {
    const payment = event.target.closest("[data-payment-method]");
    if (!payment) return;
    setPaymentMethod(payment.dataset.paymentMethod, { persist: true });
  });
}

function setPaymentMethod(method, opts = { persist: true }) {
  state.paymentMethod = method;
  if (opts.persist) localStorage.setItem('gallosPaymentMethod', method);
  $$('.payment-card').forEach((button) => {
    const isActive = button.dataset.paymentMethod === method;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  if (nodes.cardDetails) {
    if (method === 'card') {
      nodes.cardDetails.removeAttribute('hidden');
      nodes.cardDetails.setAttribute('aria-hidden', 'false');
    } else {
      nodes.cardDetails.setAttribute('hidden', '');
      nodes.cardDetails.setAttribute('aria-hidden', 'true');
    }
  }
}

function initPaymentUI() {
  // Default to 'cash' on page load so card details are hidden unless user selects card
  const saved = localStorage.getItem('gallosPaymentMethod');
  const method = saved || state.paymentMethod || 'cash';
  setPaymentMethod(method, { persist: false });

  // attach direct listeners to each payment card for immediate response
  $$('.payment-card').forEach((button) => {
    button.addEventListener('click', (e) => {
      const m = button.dataset.paymentMethod;
      setPaymentMethod(m, { persist: true });
    });
    button.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') setPaymentMethod(button.dataset.paymentMethod, { persist: true });
    });
  });
}

function renderMethodDetails() {
  if (nodes.collectionDetails) nodes.collectionDetails.hidden = state.method !== "collection";
  if (nodes.deliveryDetails) nodes.deliveryDetails.hidden = state.method !== "delivery";
}

renderProfileUI();
fillCheckoutFromProfile();
renderMethodDetails();
initPaymentUI();

// Fallback: ensure each payment-card always triggers the setPaymentMethod handler
$$('.payment-card').forEach((button) => {
  if (button.__paymentBound) return;
  button.addEventListener('click', () => setPaymentMethod(button.dataset.paymentMethod, { persist: true }));
  button.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') setPaymentMethod(button.dataset.paymentMethod, { persist: true });
  });
  button.__paymentBound = true;
});

$("[data-checkout-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  placeOrder(event.currentTarget);
});

$("[data-close-confirmation]").addEventListener("click", () => closeDialog(nodes.confirmation));
$("[data-mobile-cart-open]").addEventListener("click", () => document.querySelector("#checkout").scrollIntoView({ behavior: "smooth" }));
