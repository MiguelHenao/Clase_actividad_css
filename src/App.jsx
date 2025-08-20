import Card from './Card.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado de navegación */}
      <header className="bg-yellow-800 px-6 py-3 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Marca */}
          <span className="text-white text-2xl font-extrabold tracking-wide">Mi Salud</span>
          {/* Opciones de menú */}
          <nav className="flex-1 flex justify-center gap-12">
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Inicio</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Personal</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Ubicaciones</a>
          </nav>
          {/* Botón menú móvil */}
          <button className="text-white text-3xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {/* Sección principal */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-7">¡Bienvenido a COLSALUD!</h1>
        <p className="text-2xl text-gray-700 mb-10">Explora nuestra plataforma dedicada al bienestar y la salud.</p>
        {/* Aquí puedes incluir tu formulario o el componente Card */}
        {/* <form>...</form> */}
        {/* <Card /> */}
      </section>
    </div>
  )
}