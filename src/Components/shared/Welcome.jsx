import React from "react";

function Welcome() {
    return (
        <div className="mt-16 mx-4"> {/* Added mt-16 to ensure spacing below the header */}
            <h1 className="text-2xl font-bold">Welcome to MangaMate!</h1>
            <p className="mt-2">This is where you can find all your favorite manga.</p>
            {/* Add more content here */}
        </div>
    );
}

export default Welcome;
