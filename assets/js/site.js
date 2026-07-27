(function () {
    var STORAGE_KEY = "theme";

    function getPreferredTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "dark" || stored === "light") {
            return stored;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    // Runs synchronously in <head>, before the body paints, to avoid a
    // flash of the wrong theme.
    applyTheme(getPreferredTheme());

    document.addEventListener("DOMContentLoaded", function () {
        var themeButton = document.getElementById("theme-toggle");
        if (themeButton) {
            themeButton.addEventListener("click", function () {
                var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
                applyTheme(next);
                localStorage.setItem(STORAGE_KEY, next);
            });
        }

        var navToggle = document.getElementById("nav-toggle");
        var nav = document.getElementById("site-nav");
        var terminalNav = document.querySelector(".terminal-nav");
        if (navToggle && nav && terminalNav) {
            navToggle.addEventListener("click", function () {
                var isOpen = terminalNav.classList.toggle("nav-open");
                navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
        }
    });
})();
