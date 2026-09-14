const price = 48;
let quantity = 1;
let cartQuantity = 0;
let selectedName = "Bone";
let selectedColor = "#e7e1d5";

const root = document.documentElement;
const qtyEl = document.querySelector("[data-qty]");
const totalEl = document.querySelector("[data-total]");
const colorNameEl = document.querySelector("[data-color-name]");
const cart = document.querySelector("[data-cart]");
const backdrop = document.querySelector("[data-cart-backdrop]");
const cartCount = document.querySelector("[data-cart-count]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartFilled = document.querySelector("[data-cart-filled]");
const cartMeta = document.querySelector("[data-cart-meta]");
const cartPrice = document.querySelector("[data-cart-price]");
const cartSubtotal = document.querySelector("[data-cart-subtotal]");
const stickyBuy = document.querySelector("[data-sticky-buy]");
const buyBox = document.querySelector("[data-buy-box]");

function money(value) {
  return `$${value.toLocaleString("en-US")}`;
}

function updatePurchaseUI() {
  qtyEl.textContent = String(quantity);
  totalEl.textContent = String(price * quantity);
}

function updateCartUI() {
  cartCount.textContent = String(cartQuantity);
  const isEmpty = cartQuantity === 0;
  cartEmpty.classList.toggle("hidden", !isEmpty);
  cartFilled.classList.toggle("hidden", isEmpty);

  if (!isEmpty) {
    const subtotal = price * cartQuantity;
    cartMeta.textContent = `${selectedName} · Qty ${cartQuantity}`;
    cartPrice.textContent = money(subtotal);
    cartSubtotal.textContent = money(subtotal);
  }
}

function openCart() {
  cart.classList.add("open");
  backdrop.classList.add("open");
  cart.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cart.classList.remove("open");
  backdrop.classList.remove("open");
  cart.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

document.querySelector("[data-qty-minus]").addEventListener("click", () => {
  quantity = Math.max(1, quantity - 1);
  updatePurchaseUI();
});

document.querySelector("[data-qty-plus]").addEventListener("click", () => {
  quantity = Math.min(9, quantity + 1);
  updatePurchaseUI();
});

document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("active"));
    swatch.classList.add("active");
    selectedName = swatch.dataset.name;
    selectedColor = swatch.dataset.color;
    colorNameEl.textContent = selectedName;
    root.style.setProperty("--product", selectedColor);

    const stickyMeta = stickyBuy.querySelector("span");
    stickyMeta.textContent = `${selectedName} · ${money(price)}`;

    document.querySelectorAll(".bottle").forEach((bottle) => {
      bottle.animate(
        [
          { transform: bottle.classList.contains("bottle-phone") ? "translateX(-50%) scale(1)" : "scale(1)" },
          { transform: bottle.classList.contains("bottle-phone") ? "translateX(-50%) scale(.97)" : "scale(.97)" },
          { transform: bottle.classList.contains("bottle-phone") ? "translateX(-50%) scale(1)" : "scale(1)" },
        ],
        { duration: 260, easing: "ease-out" },
      );
    });
  });
});

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    cartQuantity = Math.min(9, cartQuantity + quantity);
    updateCartUI();
    openCart();
  });
});

document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

if (buyBox && stickyBuy) {
  const stickyObserver = new IntersectionObserver(
    ([entry]) => {
      const mobile = window.matchMedia("(max-width: 760px)").matches;
      stickyBuy.classList.toggle("visible", mobile && !entry.isIntersecting && entry.boundingClientRect.top < 0);
    },
    { threshold: 0.08 },
  );
  stickyObserver.observe(buyBox);
}

const heroBottle = document.querySelector("[data-bottle]");
const heroStage = document.querySelector(".hero-stage");
if (heroBottle && heroStage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroStage.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroBottle.style.transform = `translate(${x * 10}px, ${y * 8}px) rotate(${x * 2}deg)`;
  });
  heroStage.addEventListener("pointerleave", () => {
    heroBottle.style.transform = "translate(0,0) rotate(0deg)";
  });
}

updatePurchaseUI();
updateCartUI();
