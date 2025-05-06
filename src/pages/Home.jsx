import logo from '../assets/logo-optica.jpg'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={logo} alt="Óptica Sol" className="w-60 mb-4" />
      <h2 className="text-lg text-gray-700">Porque tus ojos merecen lo mejor</h2>
    </div>
  )
}
