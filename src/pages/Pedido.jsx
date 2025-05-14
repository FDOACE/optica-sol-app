import { useState } from 'react'
import logo from '../assets/logo-optica.jpg'

export default function Pedido() {
  const [nombre, setNombre] = useState('')
  const [tipoDoc, setTipoDoc] = useState('')
  const [numDoc, setNumDoc] = useState('')
  const [orden, setOrden] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `Hola, soy *${nombre}*. Quisiera conocer el estado de mi orden de trabajo.%0A
- Orden de trabajo: ${orden}%0A
- Tipo de documento: ${tipoDoc}%0A
- Número: ${numDoc}`

    const whatsappURL = `https://wa.me/573002194455?text=${mensaje}`
    window.open(whatsappURL, '_blank')

    // Limpiar campos
    setNombre('')
    setTipoDoc('')
    setNumDoc('')
    setOrden('')
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-4">Consultar Pedido</h1>

      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombres y Apellidos"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={tipoDoc}
          onChange={(e) => setTipoDoc(e.target.value)}
          required
        >
          <option value="">Tipo de documento</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CE">Cédula de extranjería</option>
          <option value="RC">Registro Civil</option>
          <option value="PS">Pasaporte</option>
        </select>

        <input
          type="text"
          placeholder="Número de documento"
          value={numDoc}
          onChange={(e) => setNumDoc(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Número de orden de trabajo"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Consultar vía WhatsApp
        </button>
      </form>
    </div>
  )
}