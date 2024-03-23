'use client'; 

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

/** Navigation Bar component. Use at the start of every page. Note: Smaller screens are defined as those that are smaller than TailwindCSS's lg screen size. */
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /** Open/Close the Navigation Menu on smaller screens. */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /** Forcibly close the menu regardless of the state of the isOpen variable.  */
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="px-10 lg:px-20 bg-black text-white w-full lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-start">
      <div className="lg:hidden absolute top-5 right-5">
        {isOpen ? (
          <button onClick={closeMenu}>
            <FiX className="text-2xl" />
          </button>
        ) : (
          <button onClick={toggleMenu}>
            <FiMenu className="text-2xl" />
          </button>
        )}
      </div>
      
      <div className="flex lg:flex-row items-start lg:items-center justify-between w-full">
        <a className="py-5 text-2xl mb-10 lg:mb-0 lg:mr-5 font-bold" href="/" onClick={closeMenu}>
          Amol Budhiraja
        </a>
        <div className={`mb-10 lg:mb-0 space-y-5 flex-col lg:flex-row ${isOpen ? "flex" : "hidden"} lg:flex space-x-0 lg:space-x-5 lg:space-y-0 p-10 lg:p-0`}>
            <a href="/about" onClick={closeMenu}><p>About</p></a>
            <a href="/education" onClick={closeMenu}><p>Education</p></a>
            <a href="/portfolio" onClick={closeMenu}><p>Portfolio</p></a>
            <a href="/blog" onClick={closeMenu}><p>Blog</p></a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
