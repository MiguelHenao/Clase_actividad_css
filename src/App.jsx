
import Card from './Card.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <nav className="bg-blue-700 px-4 py-2 shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <span className="text-white text-2xl font-bold">Mi App</span>
          {/* Menú central */}
          <ul className="flex-1 flex justify-center space-x-10">
            <li><a href="#" className="text-white text-lg hover:text-gray-200 transition">Inicio</a></li>
            <li><a href="#" className="text-white text-lg hover:text-gray-200 transition">Servicios</a></li>
            <li><a href="#" className="text-white text-lg hover:text-gray-200 transition">Contacto</a></li>
          </ul>
          {/* Icono menú hamburguesa */}
          <button className="text-white text-3xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto mt-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Bienvenido a Mi App</h1>
        <p className="text-2xl text-gray-600 mb-12">Aquí inicia tu contenido principal.</p>
        {/* Puedes agregar aquí tu formulario o el componente Card si lo deseas */}
        {/* <form>...</form> */}
        {/* <Card /> */}
      </main>
    </div>
  )
}