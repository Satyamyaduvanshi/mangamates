import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import MangaMatelogo from "./../../Dep/MangaMatelogo.jpg"; 

function Header() {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add search logic here
    };

    return (
        <header className="bg-white bg-opacity-70 backdrop-blur-md flex items-center p-4 shadow-lg fixed top-0 left-0 right-0 z-50 mt-4 mx-4"> {/* Added mx-4 for left and right margin */}
            <div className="flex items-center">
                <img
                    className="h-16 w-16 md:h-12 md:w-12 rounded-full" // Make logo rounded
                    src={MangaMatelogo}
                    alt="MangaMate-logo"
                    loading="lazy"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">MangaMate</span>
            </div>
            <div className="flex-grow">
                <form className="mx-2" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Search"
                        className="rounded border border-gray-400 p-2 w-full md:w-64 focus:outline-none focus:ring focus:ring-gray-500"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} // Manage input state
                    />
                    <button
                        type="submit"
                        className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        id="Search-vi-btn"
                        aria-label="Search button - VIET"
                    >
                        <BsSearch className="search-icon" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
