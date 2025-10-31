const title = document.querySelector("h1");
const themeButton = document.querySelector("#theme-selector");
const navToggle = document.querySelector("#nav-toggle");
const navMain = document.querySelector("#nav-main");
const navSelector = document.querySelector("#nav-selector");

// Theme toggle
if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.querySelector("#theme-main>button").classList.toggle("dark");
    });  
}  

// Mobile nav toggle
if (navToggle && navMain) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMain.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // close nav when a selector link is clicked (mobile)
    if (navSelector) {
        navSelector.addEventListener("click", (e) => {
            // only close when an <a> is clicked
            const link = e.target.closest("");
            if (link && navMain.classList.contains("open")) {
                navMain.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
}