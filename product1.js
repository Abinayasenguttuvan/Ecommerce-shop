const filterSelect = document.getElementById("category");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

// Update displayed price value
priceRange.addEventListener("input", () => {
  priceValue.textContent = `$0 - $${priceRange.value}`;
  filterProducts();
});

// Filter on search, category, and price
[filterSelect, searchInput].forEach(el => {
  el.addEventListener("input", filterProducts);
});

function filterProducts() {
  const selectedCategory = filterSelect.value;
  const searchTerm = searchInput.value.toLowerCase();
  const maxPrice = parseInt(priceRange.value);

  products.forEach(card => {
    const category = card.dataset.category;
    const name = card.dataset.name.toLowerCase();
    const price = parseInt(card.dataset.price);

    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    const matchesSearch = name.includes(searchTerm);
    const matchesPrice = price <= maxPrice;

    if (matchesCategory && matchesSearch && matchesPrice) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Wishlist hearts toggle
document.querySelectorAll(".wishlist").forEach(w => {
  w.addEventListener("click", () => {
    w.classList.toggle("active");
    w.style.color = w.classList.contains("active") ? "red" : "black";
  });
});

// Add to cart simulation
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Product added to cart!");
  });
});
