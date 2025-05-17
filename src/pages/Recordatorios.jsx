import { useState } from 'react'
import logo from '../assets/logo-optica.jpg'

export default function Recordatorios() {
  const [tipo, setTipo] = useState('')
  const [numero, setNumero] = useState('')
  const [fechas, setFechas] = useState([])
  const [error, setError] = useState('')

  const handleConsultar = async () => {
    setFechas([])
    setError('')

    try {
      const res = await fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYeHW2EumCw6QxcRffVwJ2HHnvDn2-M5UeXHfOhgdXcNKtVm9hnA-t6xb3exGT_nEPd5PGXU4OM7Ke/pub?output=csv'
      )
      const data = await res.text()
      const filas = data
        .trim()
        .split('\n')
        .map((row) => row.split(','))

      const encabezados = filas[0]
      const datos = filas.slice(1).map((fila) => {
        const obj = {}
        encabezados.forEach((col, idx) => {
          obj[col.trim().toLowerCase()] = fila[idx]?.trim()
        })
        return obj
      })

      const datosFiltrados = datos.filter(
        (fila) => fila.tipo === tipo && fila.documento === numero
      )

      if (datosFiltrados.length === 0) {
        setError('No se encontraron registros para los datos ingresados.')
        return
      }

      const fechasOrdenadas = datosFiltrados
        .map((f) => f.fecha)
        .filter(Boolean)
        .sort((a, b) => new Date(b) - new Date(a))
        .slice(0, 3)

      setFechas(fechasOrdenadas)
    } catch (e) {
      setError('Error al consultar los datos. Intenta nuevamente.')
    }
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-6">Recordatorio de Visitas</h1>

      <select
        className="w-full max-w-md border border-gray-300 p-2 rounded mb-4"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
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
        placeholder="Número completo de documento"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        className="w-full max-w-md border border-gray-300 p-2 rounded mb-4"
      />

      <button
        onClick={handleConsultar}
        className="w-full max-w-md bg-red-600 text-white py-2 rounded hover:bg-red-700 mb-4"
      >
        Consultar
      </button>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      {fechas.length > 0 && (
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold mb-2 text-red-700">Últimas fechas de visita:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {fechas.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
