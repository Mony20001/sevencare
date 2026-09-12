import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8 text-sm text-stone-700 font-medium">
          <Link to="/" className="hover:text-stone-900 transition">ទំព័រដើម</Link>
          <Link to="/Products1" className="hover:text-stone-900 transition">ផលិតផល</Link>
          <Link to="/about" className="hover:text-stone-900 transition">អំពីយើង</Link>
          <Link to="/contact" className="hover:text-stone-900 transition">ទំនាក់ទំនង</Link>
        </nav>
        <Link to="/" className="text-xl sm:text-2xl font-serif font-semibold tracking-wider text-[#2C2A29]">
          SEVENT⁷ CARE
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-5 text-stone-700">
          <button aria-label="Search" className="hover:text-stone-900 transition p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button aria-label="User Account" className="hidden sm:block hover:text-stone-900 transition p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <button aria-label="Cart" className="relative hover:text-stone-900 transition flex items-center p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-amber-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              2
            </span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden hover:text-stone-900 transition p-1 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-stone-200/60 px-6 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base text-stone-700 font-medium">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-stone-900 transition py-1"
            >
              ទំព័រដើម
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-stone-900 transition py-1"
            >
              ផលិតផល
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-stone-900 transition py-1"
            >
              អំពីយើង
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-stone-900 transition py-1"
            >
              ទំនាក់ទំនង
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;