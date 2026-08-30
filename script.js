// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

// Check if the user previously selected dark mode
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "◐";
}


// Toggle between themes
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "◐" : "☼";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


// Simple fade-in animation when sections enter the screen
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});