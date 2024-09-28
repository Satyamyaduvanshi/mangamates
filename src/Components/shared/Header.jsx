import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi"; // Icons for dark mode toggle
import MangaMatelogo from "./../../Dep/MangaMatelogo.jpg";

function Header() {
    const [input, setInput] = React.useState("");
    const [darkMode, setDarkMode] = React.useState(
        localStorage.getItem("theme") === "dark"
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add search logic here
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header className="rounded bg-white bg-opacity-70 backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-80 flex items-center justify-between p-4 shadow-lg fixed top-0 left-0 right-0 z-50 mt-4 mx-4 transition-colors duration-300">
            {/* Logo and title */}
            <div className="flex items-center">
                <img
                    className="h-16 w-16 md:h-12 md:w-12 rounded-full"
                    src={MangaMatelogo}
                    alt="MangaMate-logo"
                    loading="lazy"
                />
                <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                    MangaMate
                </span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-2">
                <form onSubmit={handleSubmit} className="flex">
                    <input 
                        type="text"
                        placeholder="Search Manga"
                        className="rounded-2 border border-gray-400 dark:border-gray-600 p-2 w-64 focus:outline-none focus:ring focus:ring-gray-500 dark:bg-gray-800 dark:text-white"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-4 px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
                        aria-label="Search button"
                    >
                        <BsSearch className="search-icon" />
                    </button>
                </form>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-900" />}
                </button>
            </div>
        </header>
    );
}

export default Header;
