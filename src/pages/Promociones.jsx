import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import logo from '../assets/logo-optica.jpg'

export default function Promociones() {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-6">Promociones del Mes</h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full max-w-md mb-8"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/images/promo${num}.jpg`}
              alt={`Promoción ${num}`}
              className="rounded w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
