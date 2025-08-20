import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">Mi App</div>

          {/* Links en pantallas grandes */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-200">Inicio</a>
            <a href="#" className="hover:text-gray-200">Servicios</a>
            <a href="#" className="hover:text-gray-200">Contacto</a>
          </div>

          {/* Botón hamburguesa en móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block hover:text-gray-200">Inicio</a>
          <a href="#" className="block hover:text-gray-200">Servicios</a>
          <a href="#" className="block hover:text-gray-200">Contacto</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

