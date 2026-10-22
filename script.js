
// Mobile navigation menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Dark and light theme switch
const themeBtn = document.getElementById("theme-btn");

// Restore saved theme
if (localStorage.getItem("portfolio-theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

// Automatically display the current year
document.getElementById("year").textContent = new Date().getFullYear();
