// ===== Scroll Animation Trigger =====
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fader => {
    const boxTop = fader.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      fader.classList.add('show');
    }
  });
});

// ===== Auto-scroll Runway =====
const runway = document.querySelector('.runway-track');
if (runway) {
  setInterval(() => {
    runway.scrollBy({ left: 300, behavior: 'smooth' });
    if (runway.scrollLeft + runway.clientWidth >= runway.scrollWidth) {
      runway.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 3000);
}

// ===== Dashboard Chart =====
if (document.getElementById('salesChart')) {
  const ctx = document.getElementById('salesChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales',
        data: [1200, 1900, 3000, 2500, 3200, 4000],
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } }
    }
  });
}

// ---------- Parallax Scroll ----------
window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.pageYOffset;
    if (parallax) {
      parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
  });

  
  // ---------- Fade Navbar on Scroll ----------
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  