import React, { useDebugValue, useEffect, useState } from "react";
import { navLinks } from "../constants";
import Logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //useEffect to add scroll event listener to the window.  When user starts scrolling, it sets isSticky state to true if pageYOffset > 100. Otherwise, it sets isSticky state to false.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="w-full bg-neutralWhite md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-2"
          >
            <img
              src={Logo}
              alt="Company logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238] ">Nexcent</span>
          </a>
          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navLinks.map(({ link, path }) => (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-textGray hover:text-brandPrimary first:font-medium"
              >
                {link}
              </ScrollLink>
            ))}
          </ul>
          {/* button for large devices */}
          <div className="space-x-2 gap-3 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary"
            >
              Login
            </a>
            <button className="bg-green-600   text-white  py-2 px-2 transition-all duration-300 rounded hover:bg-green-800">
              Register Now
            </button>
          </div>
          {/* button for small devices */}
          <div className="md:hidden">
            <button
              className="focus:outline-none focus:text-gray-500 text-brandPrimary"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralGray" />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`space-y-4 lg:hidden px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navLinks.map(({ link, path }) => (
            <ScrollLink
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-white hover:text-gray-400 first:font-medium"
            >
              {link}
            </ScrollLink>
          ))}
          <div className=" flex flex-col gap-2 items-start  justify-center ">
            <a
              href="/"
              className="flex items-center text-white  hover:text-gray-400"
            >
              Login
            </a>
            <button className="bg-green-600   text-white  py-2 px-2 transition-all duration-300 rounded hover:bg-green-800">
              Register Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
