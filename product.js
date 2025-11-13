// Example: Multiple Products
const products = {
    handbag: {
      title: "Luxury Designer Handbag",
      brand: "VogueCraft",
      price: 199.99,
      oldPrice: 249.99,
      discount: "20% OFF",
      images: ["images/product1.jpg", "images/product2.jpg", "images/product3.jpg"],
      video: "videos/product.mp4",
      shapes: ["circle", "triangle", "hexagon"], // thumbnail shapes
      features: [
        "100% genuine leather",
        "Handcrafted with precision",
        "Adjustable shoulder strap",
        "Elegant metallic finish"
      ],
      description: `A timeless piece of art crafted with premium materials. Perfect blend of durability and luxury.`,
      variations: {
        colors: ["Black", "Tan", "Maroon"],
        sizes: ["Small", "Medium", "Large"]
      },
      model: "VC-2024-HB",
      asin: "B09VCEXAMPLE",
      origin: "Italy",
      dimensions: "25cm x 10cm x 20cm",
      seller: "VogueCraft Official Store (98% positive feedback)",
      stock: "In Stock ✅",
      shipping: "Free delivery in 2–3 days | Easy 7-day return",
      reviews: [
        { stars: "⭐⭐⭐⭐⭐", text: "Absolutely gorgeous! Leather feels luxurious.", author: "Aria M." },
        { stars: "⭐⭐⭐⭐", text: "Chic design and durable finish!", author: "Priya R." }
      ],
      qa: [
        { q: "Is it waterproof?", a: "Yes, it has a water-resistant coating." },
        { q: "Does it come with a dust bag?", a: "Yes, a branded dust bag is included." }
      ],
      banner: "images/handbag-banner.jpg",
      bannerText: "Elegance. Craftsmanship. Perfection.",
      carousel: ["images/detail1.jpg", "images/detail2.jpg", "images/detail3.jpg"],
      interactiveView: "https://www.sketchfab.com/models/7w7pDExAMPLE/embed"
    },
    sneakers: {
      title: "SportFlex Air Sneakers",
      brand: "StridePro",
      price: 89.99,
      oldPrice: 120.00,
      discount: "25% OFF",
      images: ["images/shoe1.jpg", "images/shoe2.jpg", "images/shoe3.jpg"],
      video: "videos/shoe.mp4",
      shapes: ["hexagon", "circle", "triangle"],
      features: [
        "Breathable mesh design",
        "Anti-slip rubber sole",
        "Ultra-light cushioning",
        "Durable for all terrains"
      ],
      description: `Comfort meets performance. Designed for athletes who demand style and endurance.`,
      variations: {
        colors: ["White", "Blue", "Grey"],
        sizes: ["6", "7", "8", "9", "10"]
      },
      model: "SPX-2025",
      asin: "B09SHOEXAMPLE",
      origin: "Vietnam",
      dimensions: "30cm x 10cm x 12cm",
      seller: "StridePro Sports Official",
      stock: "Limited Stock ⚡",
      shipping: "Free shipping worldwide | 10-day return",
      reviews: [
        { stars: "⭐⭐⭐⭐⭐", text: "So comfy for daily runs!", author: "Jordan P." },
        { stars: "⭐⭐⭐⭐", text: "Stylish and very breathable.", author: "Chris N." }
      ],
      qa: [
        { q: "Are these machine washable?", a: "Yes, wash on gentle cycle." },
        { q: "Does it support wide feet?", a: "Yes, the flexible mesh adjusts easily." }
      ],
      banner: "images/sneaker-banner.jpg",
      bannerText: "Run Faster. Feel Lighter.",
      carousel: ["images/shoe-detail1.jpg", "images/shoe-detail2.jpg", "images/shoe-detail3.jpg"],
      interactiveView: "https://www.sketchfab.com/models/7w7pShoeEXAMPLE/embed"
    }
  };
  
  // --- Get Product ID from URL ---
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "handbag";
  const product = products[productId];
  
  // --- Build Page Dynamically ---
  function buildProductPage(data) {
    const main = document.getElementById("product-page");
    main.innerHTML = `
      <section class="product-container">
        <div class="gallery">
          <div class="main-image">
            <img id="currentImage" src="${data.images[0]}" alt="${data.title}">
          </div>
          <div class="thumbnails">
            ${data.images.map((img, i) => `
              <div class="thumb ${data.shapes[i % data.shapes.length]}" onclick="changeImage(this)">
                <img src="${img}" alt="thumb${i}">
              </div>`).join("")}
            <div class="thumb circle"><video src="${data.video}" controls></video></div>
          </div>
          <div class="interactive">
            <h4>360° View</h4>
            <iframe src="${data.interactiveView}" frameborder="0"></iframe>
          </div>
        </div>
  
        <div class="product-details">
          <h1 class="title">${data.title}</h1>
          <p class="brand">Brand: <span>${data.brand}</span></p>
          <div class="price">
            <h2>$${data.price}</h2>
            <p><del>$${data.oldPrice}</del> <span class="deal">${data.discount}</span></p>
          </div>
  
          <ul class="key-features">${data.features.map(f => `<li>✔️ ${f}</li>`).join("")}</ul>
          <p class="description">${data.description}</p>
  
          <div class="variations">
            <h3>Available Variations</h3>
            <label>Color: <select>${data.variations.colors.map(c => `<option>${c}</option>`).join("")}</select></label>
            <label>Size: <select>${data.variations.sizes.map(s => `<option>${s}</option>`).join("")}</select></label>
            <label>Quantity: <input type="number" min="1" value="1"></label>
          </div>
  
          <button class="btn">Add to Cart</button>
  
          <div class="availability">
            <p><strong>Availability:</strong> ${data.stock}</p>
            <p><strong>Shipping:</strong> ${data.shipping}</p>
          </div>
        </div>
      </section>
  
      <section class="product-info">
        <h2>Product & Seller Information</h2>
        <table>
          <tr><td>Model Number</td><td>${data.model}</td></tr>
          <tr><td>ASIN</td><td>${data.asin}</td></tr>
          <tr><td>Country of Origin</td><td>${data.origin}</td></tr>
          <tr><td>Dimensions</td><td>${data.dimensions}</td></tr>
          <tr><td>Seller</td><td>${data.seller}</td></tr>
        </table>
      </section>
  
      <section class="reviews">
        <h2>Customer Reviews & Q&A</h2>
        ${data.reviews.map(r => `<div class="review"><p>${r.stars} “${r.text}” — <b>${r.author}</b></p></div>`).join("")}
        <div class="qa">
          <h3>Q&A</h3>
          ${data.qa.map(q => `<p><b>Q:</b> ${q.q}<br><b>A:</b> ${q.a}</p>`).join("")}
        </div>
      </section>
  
      <section class="enhanced">
        <h2>Enhanced Brand Content</h2>
        <div class="banner">
          <img src="${data.banner}" alt="Brand Banner">
          <div class="overlay-text">${data.bannerText}</div>
        </div>
        <div class="carousel">
          <div class="carousel-images">
            ${data.carousel.map(img => `<img src="${img}" alt="">`).join("")}
          </div>
        </div>
      </section>
    `;
  }
  
  function changeImage(el) {
    const mainImg = document.getElementById("currentImage");
    const child = el.querySelector("img");
    if (child) mainImg.src = child.src;
  }
  
  // --- Initialize ---
  window.onload = () => buildProductPage(product);
  