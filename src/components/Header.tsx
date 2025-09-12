import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 bg-[#4B6A79]/25 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logoSquadraSinFondo.png"
            alt="Logo Squadra"
            className="w-14 h-14 md:w-20 md:h-20 rounded-lg"
          />
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#263238", fontFamily: "'Segoe UI', sans-serif" }}
          >
            Squadra Base
          </h1>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="relative w-10 h-10 bg-white flex flex-col justify-center items-center md:hidden group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-0.5 bg-[#263238] rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#263238] rounded-full mt-1.5 transition-all duration-300 origin-center ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#263238] rounded-full mt-1.5 transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Navegación Escritorio */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-white transition-all duration-200">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-white transition-all duration-200">
            Sobre nosotros
          </Link>
          <Link to="/tutorial" className="hover:text-white transition-all duration-200">
            Tutorial
          </Link>
        </nav>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="flex flex-col bg-white rounded-xl shadow-2xl md:hidden w-64 absolute top-16 right-4 overflow-hidden transition-all duration-300">
          <Link
            to="/"
            className="px-6 py-4 text-[#263238] font-semibold border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#263238] hover:to-[#455A64] hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="px-6 py-4 text-[#263238] font-semibold border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#263238] hover:to-[#455A64] hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Sobre nosotros
          </Link>
          <Link
            to="/tutorial"
            className="px-6 py-4 text-[#263238] font-semibold hover:bg-gradient-to-r hover:from-[#263238] hover:to-[#455A64] hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Tutorial
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;