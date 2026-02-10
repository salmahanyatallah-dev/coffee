// Coffee World JavaScript

// ========================================
// Contact Form Handling
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Hero overlay opacity slider
  const opacityRange = document.getElementById("opacityRange");
  if (opacityRange) {
    // set initial value to match CSS variable
    const initial =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--hero-overlay-opacity",
        ),
      ) || 0.4;
    opacityRange.value = Math.round(initial * 100);

    opacityRange.addEventListener("input", function () {
      const val = (this.value / 100).toFixed(2);
      document.documentElement.style.setProperty("--hero-overlay-opacity", val);
    });
  }
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
      }

      // Email validation
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Show success message
      showSuccessMessage();

      // Reset form
      contactForm.reset();

      // In a real application, you would send this data to a server
      console.log({
        name: name,
        email: email,
        subject: subject,
        message: message,
        date: new Date().toLocaleString("en-US"),
      });
    });
  }
});

// ========================================
// Email Validation
// ========================================

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ========================================
// Show Success Message
// ========================================

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.style.display = "block";

    // Hide after 5 seconds
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 5000);
  }
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========================================
// Active Navigation Link
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href.includes(currentLocation) ||
      (currentLocation === "" && href === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ========================================
// Menu Card Interactions
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// ========================================
// Scroll Animations
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".menu-card, .gallery-item, .feature, .gallery-card",
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// ========================================
// Dark Mode Toggle (Optional)
// ========================================

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode"),
  );
}

// Check for saved dark mode preference
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// ========================================
// Utility Functions
// ========================================

// Log page load time
console.log("Coffee World - Site loaded successfully ☕");
