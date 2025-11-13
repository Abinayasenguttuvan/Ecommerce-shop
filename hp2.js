const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 15000, img: "https://via.placeholder.com/300" },
    { id: 2, name: "Headphones", category: "electronics", price: 2000, img: "https://via.placeholder.com/300" },
    { id: 3, name: "Dress", category: "fashion", price: 1200, img: "https://via.placeholder.com/300" },
    { id: 4, name: "Mixer Grinder", category: "kitchen", price: 3000, img: "https://via.placeholder.com/300" }
  ];
  
  // Display products
  function displayProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = "";
    list.forEach(p => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>₹ ${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `;
    });
  }
  
  displayProducts(products);
  
  // Filtering
  document.getElementById("categoryFilter").addEventListener("change", function() {
    const category = this.value;
    if (category === "all") {
      displayProducts(products);
    } else {
      displayProducts(products.filter(p => p.category === category));
    }
  });
  
  // Search
  document.getElementById("searchBar").addEventListener("keyup", function() {
    const text = this.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(text)));
  });
  
  // Add to cart
  function addToCart(id) {
    alert("Product " + id + " added to cart!");
  }
  