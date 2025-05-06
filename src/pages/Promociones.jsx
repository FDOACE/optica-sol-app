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
    </div>
  )
}
