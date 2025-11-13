// -----------------------------
// SHOP PAGE FILTER LOGIC
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product-card");
    const categoryFilters = document.querySelectorAll(".shop-filters input[type='checkbox']");
    const priceFilters = document.querySelectorAll(".shop-filters input[name='rate']");
  
    // Store product data attributes for easy filtering
    products.forEach((product) => {
      const name = product.querySelector("h4").textContent.toLowerCase();
      if (name.includes("dress")) product.dataset.category = "dresses";
      else if (name.includes("cook") || name.includes("kitchen") || name.includes("plate"))
        product.dataset.category = "kitchen";
      else if (name.includes("lip") || name.includes("serum") || name.includes("cosmetic"))
        product.dataset.category = "cosmetics";
      else if (name.includes("earbud") || name.includes("smart") || name.includes("watch"))
        product.dataset.category = "electronics";
  
      // Convert price text like ₹2,499 to number
      product.dataset.price = parseInt(
        product.querySelector("p").textContent.replace(/[₹,]/g, "")
      );
    });
  
    // Filtering logic
    function applyFilters() {
      const activeCategories = Array.from(categoryFilters)
        .filter((f) => f.checked)
        .map((f) => f.id);
  
      const activeRate = Array.from(priceFilters).find((f) => f.checked)?.id;
  
      products.forEach((product) => {
        const categoryMatch =
          activeCategories.length === 0 || activeCategories.includes(product.dataset.category);
  
        let priceMatch = true;
        const price = parseInt(product.dataset.price);
  
        if (activeRate === "low") priceMatch = price < 1000;
        else if (activeRate === "mid") priceMatch = price >= 1000 && price <= 4999;
        else if (activeRate === "high") priceMatch = price > 5000;
  
        // Apply display changes with animation
        if (categoryMatch && priceMatch) {
          product.style.display = "block";
          product.style.opacity = "1";
          product.style.transform = "scale(1)";
        } else {
          product.style.opacity = "0";
          setTimeout(() => {
            product.style.display = "none";
          }, 300);
        }
      });
    }
  
    // Listen for changes on all filters
    [...categoryFilters, ...priceFilters].forEach((filter) => {
      filter.addEventListener("change", applyFilters);
    });
  });
  
  
  // -----------------------------
  // ANIMATED HERO TEXT (for index.html)
  // -----------------------------
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    let words = [
      "Luxury Fashion.",
      "Timeless Elegance.",
      "Modern Styles.",
      "Exclusive Collections.",
    ];
    let i = 0;
    setInterval(() => {
      heroText.textContent = words[i];
      heroText.classList.add("fade-text");
      setTimeout(() => heroText.classList.remove("fade-text"), 900);
      i = (i + 1) % words.length;
    }, 2000);
  }
  