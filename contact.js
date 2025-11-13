// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("response");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = "Thank you! Your message has been sent successfully.";
      response.style.color = "#ff6f61";
      form.reset();
    });
  });
  