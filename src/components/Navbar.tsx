
import { useState } from "react";
import logo from "../assets/img/logo-text.png";
import hamburger from "../assets/img/hamburger.png";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto max-w-6xl px-5 lg:px-0">

        {/* Mobile navigation */}
        <div className="relative flex h-16 items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMenuVisible((current) => !current)}
            className="flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <img
              src={hamburger}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>

          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img src={logo} alt="Dev Stack logo" />
          </a>

          <div className="flex items-center gap-3">
            <button className="text-[13px] font-medium text-gray-600 transition hover:text-pink-400">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-pink-600 to-pink-500 px-5 py-2 text-[13px] font-semibold text-white transition hover:shadow-md">
              Sign Up
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden h-16 items-center justify-between md:flex">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack logo" />
          </a>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[14px] font-medium text-pink-500 transition hover:text-pink-300"
            >
              Home
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#475569] transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#475569] transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#475569] transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#475569] transition hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-[15px] font-medium text-gray-600 transition hover:text-pink-400">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-pink-600 to-pink-500 px-5 py-2 text-[14px] font-semibold text-white transition hover:shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuVisible && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#"
              onClick={closeMenu}
              className="text-[14px] font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="text-[14px] font-medium text-[#475569] hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="text-[14px] font-medium text-[#475569] hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="text-[14px] font-medium text-[#475569] hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="text-[14px] font-medium text-[#475569] hover:text-pink-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
