import { useState } from 'react'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado de navegación */}
      <header className="bg-green-800 px-6 py-3 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Marca */}
          <span className="text-white text-2xl font-extrabold tracking-wide">Mi Salud</span>
          {/* Opciones de menú (escritorio) */}
          <nav className="hidden md:flex flex-1 justify-center gap-12">
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Inicio</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Personal</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Ubicaciones</a>
          </nav>
          {/* Botón menú móvil */}
          <button
            className="text-white text-3xl focus:outline-none md:hidden"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Menú desplegable móvil */}
        {menuAbierto && (
          <nav className="md:hidden bg-yellow-900 px-4 py-3 rounded-b-lg shadow-lg animate-fade-in">
            <a href="#" className="block text-white text-base py-2 hover:text-gray-300">Programas de formación</a>
            <a href="#" className="block text-white text-base py-2 hover:text-gray-300">Sedes</a>
            <a href="#" className="block text-white text-base py-2 hover:text-gray-300">Mas inf</a>
          </nav>
        )}
      </header>
      {/* Sección principal */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-7">¡ SENA SOFIA!</h1>
        <p className="text-2xl text-gray-700 mb-10">Explora Nuestar plataforma donde podras estudiar.</p>
        {/* Aquí puedes incluir tu formulario o el componente Card */}
        {/* <form>...</form> */}
        {/* <Card /> */}
      </section>
    </div>
  )
}