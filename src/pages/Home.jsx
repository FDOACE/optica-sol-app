import logo from '../assets/logo-optica.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 border-4 border-red-600">
      <img src={logo} alt="Óptica Sol" className="w-60 mb-4" />
      <h2 className="text-lg text-gray-700 mb-6">Porque tus ojos merecen lo mejor</h2>

      <Link
        to="/info"
        className="text-red-700 font-semibold underline hover:text-red-800 transition"
      >
        Ver qué hacemos por tu salud visual
      </Link>
    </div>
  )
}