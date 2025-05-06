import { useState } from 'react'
import logo from '../assets/logo-optica.jpg'

export default function Citas() {
  const [nombre, setNombre] = useState('')
  const [tipoDoc, setTipoDoc] = useState('')
  const [numDoc, setNumDoc] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `Hola, soy *${nombre}*. Deseo agendar una cita en Óptica Sol.%0A
- Tipo de documento: ${tipoDoc}%0A
- Número: ${numDoc}%0A
- Fecha deseada: ${fecha}%0A
- Hora deseada: ${hora}%0A
- Teléfono de contacto: ${telefono}`

    const whatsappURL = `https://wa.me/573002194455?text=${mensaje}`

    // Abrir WhatsApp sin cerrar la app
    window.open(whatsappURL, '_blank')

    // Limpiar campos
    setNombre('')
    setTipoDoc('')
    setNumDoc('')
    setFecha('')
    setHora('')
    setTelefono('')
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-4">Agendar Cita</h1>

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
        
        <div>
  <label
    htmlFor="fecha"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Fecha deseada
  </label>
  <input
    id="fecha"
    type="date"
    value={fecha}
    onChange={(e) => setFecha(e.target.value)}
    className="w-full border border-gray-300 p-2 rounded"
    min={new Date().toISOString().split("T")[0]}
    required
  />
</div>
       
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        >
          <option value="">Hora deseada</option>
          {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"].map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Confirmar Cita vía WhatsApp
        </button>
      </form>
    </div>
  )
}
