import 'swiper/css'

export default function Promociones() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Promociones del Mes</h1>

      <div className="w-full max-w-md mb-8">
        <img
          src="/images/promo1.jpg"
          alt="Promoción"
          className="rounded w-full"
        />
      </div>

      {/* Botón de WhatsApp flotante */}
      <div className="fixed bottom-20 right-4 z-50 flex items-center space-x-2">
        <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
          ¿Tienes dudas?
        </span>
        <a
          href="https://wa.me/573002194455?text=Quiero%20preguntar%20por%20la%20promoción%20de:"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  )
}
