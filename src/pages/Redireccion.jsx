import { useEffect } from 'react'

export default function Redireccion() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/573102512390"
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Redirigiendo a WhatsApp...</h1>
      <p className="text-gray-700">Tu cita será confirmada por este medio.</p>
      <p className="text-sm text-gray-500 mt-2">Si no eres redirigido automáticamente, <a href="https://wa.me/573102512390" className="text-blue-600 underline">haz clic aquí</a>.</p>
    </div>
  )
}
