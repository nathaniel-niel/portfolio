import React from "react";

function NavBar () {

    // toggle nav bar function
    const toggleDropDownMenu = () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle("hidden");
    };


    return (
        <nav className="h-fit top-0 sticky text-white z-10">
            <div className="mx-auto container py-5">
                <div className="flex justify-between">
                    {/* LOGO */}
                    <div className="bold-text">
                        <a className="flex items-center px-3" href="/#"> Niel's Portfolio</a>
                    </div>
                    <div className="hidden md:flex items-center px-3 ">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="hover:font-bold">Home</a> 
                            </li>
                            <li>
                                <a href="#aboutme" className="hover:font-bold">About</a>
                            </li>
                            <li>
                             <a href="#" className="hover:font-bold">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu Toggle */}
                    <div className="md:hidden flex items-center px-3">
                        <button className="bg-cyan-blue px-1 py-1 rounded" id="mobile-menu-button" onClick={toggleDropDownMenu}>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    

                    </div>
                </div>
            </div>
                {/* Mobile Version Menu */}
            <div className="container mx-auto hidden md:hidden py-2 bg-cyan-blue" id="mobile-menu">
                <a className="px-4 py-2 block hover:font-bold" href="#" onClick={toggleDropDownMenu}>Home</a>
                <a className="px-4 py-2 block  hover:font-bold" href="#aboutme" onClick={toggleDropDownMenu}>About</a>
                <a className="px-4 py-2 block  hover:font-bold" href="#"  onClick={toggleDropDownMenu}>Contact</a>

            </div>

        </nav>
    );
}

export default NavBar;