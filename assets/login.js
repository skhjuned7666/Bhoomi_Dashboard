// Simple client-side demo login for Bhoomi-Plots
// No real authentication – just redirect to index.html

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Very basic fake validation: require some text
    if (!email || !password) {
      alert("Please enter email and password (demo only).");
      return;
    }

    // Optionally you can restrict to one demo email:
    // if (email !== "admin@bhoomi-plots.in") { ... }

    // For now, always "succeed" and go to dashboard
    window.location.href = "index.html";
  });
});


