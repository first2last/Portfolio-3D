import React, { useState } from 'react';
import { navLinks } from "../constants/index.js";
import Button from '../components/Button.jsx';

const Navbar = () => {


    const NavItems = () => {
        return (
            <ul className="nav-ul">
                {navLinks.map(({ id, href, name }) => (
                    <li key={id} className="nav-li">
                        {name === "Resume" ? (
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <Button name="Resume" isBeam containerClass="px-4 py-2" />
                            </a>
                        ) : (
                            <a className="nav-li_a" href={href}>
                                {name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        );
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className='sticky top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Vishesh
                    </a>

                    {/* Mobile toggle button */}
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="menu"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Desktop menu */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <nav className="sm:hidden px-5 pb-4">
                        <NavItems />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
