import { useState } from 'react';
import logo from '../assets/logo-optica.jpg';
import Papa from 'papaparse';

export default function Recordatorios() {
  const [tipoDoc, setTipoDoc] = useState('');
  const [ultimos4, setUltimos4] = useState('');
  const [fechas, setFechas] = useState([]);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState('');

  const consultarFechas = (e) => {
    e.preventDefault();
    setBuscando(true);
    setFechas([]);
    setError('');

    const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYeHW2EumCw6QxcRffVwJ2HHnvDn2-M5UeXHfOhgdXcNKtVm9hnA-t6xb3exGT_nEPd5PGXU4OM7Ke/pub?output=csv';

    Papa.parse(urlCSV, {
      download: true,
      header: true,
      complete: (result) => {
        const registros = result.data.filter((fila) => {
          const tipo = fila.TipoDoc?.trim();
          const numDoc = fila.NumDoc?.trim();
          return (
            tipo === tipoDoc &&
            numDoc &&
            numDoc.slice(-4) === ultimos4
          );
        });

        if (registros.length === 0) {
          setError('No se encontraron registros para los datos ingresados.');
          setBuscando(false);
          return;
        }

        const fechasOrdenadas = registros
          .map((r) => r.FechaRegistro)
          .filter(Boolean)
          .sort((a, b) => new Date(b) - new Date(a))
          .slice(0, 3);

        setFechas(fechasOrdenadas);
        setBuscando(false);
      },
      error: () => {
        setError('Error al cargar los datos. Intenta nuevamente más tarde.');
        setBuscando(false);
      },
    });
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={logo} alt="Óptica Sol Logo" className="w-40 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-4">Recordatorio de Visitas</h1>

      <form className="w-full max-w-md space-y-4" onSubmit={consultarFechas}>
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
        </select>

        <input
          type="text"
          placeholder="Últimos 4 dígitos del documento"
          value={ultimos4}
          onChange={(e) => setUltimos4(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
          maxLength={4}
          pattern="\d{4}"
          title="Ingresa exactamente 4 dígitos"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          disabled={buscando}
        >
          {buscando ? 'Consultando...' : 'Consultar'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 font-semibold">{error}</div>
      )}

      {fechas.length > 0 && (
        <div className="mt-6 w-full max-w-md text-center">
          <h2 className="text-lg font-semibold mb-2">Últimas visitas registradas:</h2>
          <ul className="list-disc list-inside">
            {fechas.map((fecha, index) => (
              <li key={index}>{fecha}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


