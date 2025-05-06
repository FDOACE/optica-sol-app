import logo from '../assets/logo-optica.jpg'

export default function ComoLlegar() {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-6 text-center">¿Cómo llegar a Óptica Sol?</h1>

      <div className="w-full flex justify-center">
        <div className="w-[300px] h-[533px] rounded-lg overflow-hidden shadow-md">
          <iframe
            width="300"
            height="533"
            src="https://www.youtube.com/embed/zORBF7BDF6c"
            title="Cómo llegar a Óptica Sol"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

