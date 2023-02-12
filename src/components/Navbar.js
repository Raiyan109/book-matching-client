import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gray-800">
            <div className="flex items-center">
                <a href="#" className="text-white font-medium text-lg">Book Matching</a>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-white hover:text-teal-400 mr-4">Home</a>
                <a href="#" className="text-white hover:text-teal-400">About</a>
            </div>
        </nav>

    );
};

export default Navbar;