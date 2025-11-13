// ----------- SALES BAR CHART -----------
const salesCtx = document.getElementById("salesChart").getContext("2d");
new Chart(salesCtx, {
  type: "bar",
  data: {
    labels: ["5", "8", "14", "18", "22", "25"],
    datasets: [{
      label: "Sales ($)",
      data: [1200, 1500, 1700, 1800, 1900, 2000],
      backgroundColor: "rgba(241,178,0,0.9)",
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#eee" } },
      x: { grid: { display: false } }
    },
    animation: { duration: 1500, easing: "easeOutBounce" }
  }
});

// ----------- CUSTOMER LINE CHART -----------
const custCtx = document.getElementById("customerChart").getContext("2d");
new Chart(custCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Customers",
      data: [1000, 1400, 1800, 2300, 2900, 3500],
      borderColor: "#f1b200",
      backgroundColor: "rgba(241,178,0,0.2)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    animation: { duration: 1800, easing: "easeInOutQuart" }
  }
});

// // ----------- CATEGORY PIE CHART -----------
// const catCtx = document.getElementById("categoryChart").getContext("2d");
// new Chart(catCtx, {
//   type: "pie",
//   data: {
//     labels: ["Fashion", "Electronics", "Kitchen", "Cosmetics", "Furniture"],
//     datasets: [{
//       data: [35, 25, 15, 10, 15],
//       backgroundColor: ["#f1b200", "#ffcc33", "#f5d878", "#f7b731", "#ffd633"]
//     }]
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       legend: { position: "bottom" },
//     },
//     animation: { animateScale: true, duration: 2000 }
//   }
// });

// ----------- REVENUE DOUGHNUT CHART -----------
const revCtx = document.getElementById("revenueChart").getContext("2d");
new Chart(revCtx, {
  type: "doughnut",
  data: {
    labels: ["Online", "Retail", "Wholesale", "Other"],
    datasets: [{
      data: [55, 25, 15, 5],
      backgroundColor: ["#f1b200", "#ffe680", "#ffcc33", "#ffd966"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" }
    },
    animation: { animateRotate: true, duration: 2000 }
  }
});
