import React, { useEffect, useState } from "react";

// Function for Dark/Light mode
function UseDarkMode() {
    // Get initial mode from localStorage or system preference
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        } else {
            // Check if system prefers dark mode
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return [darkMode, toggleDarkMode];
}

export default UseDarkMode;
