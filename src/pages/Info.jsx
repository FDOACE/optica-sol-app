export default function Info() {
    return (
      <div className="max-w-md mx-auto p-4 font-sans text-[#4b3a2f] bg-[#fff8e6]">
        <h1 className="text-3xl font-bold text-center mb-1">Óptica Sol</h1>
        <h2 className="text-lg text-center text-red-700 mb-4">
          Porque tus ojos merecen lo mejor
        </h2>
  
        <h3 className="text-xl text-center font-semibold mb-6">¿Qué hacemos por tu salud visual?
        </h3>
  
        {[{
          icon: '👁️',
          title: 'Examen visual especializado',
          text:
            'Realizado por una Optómetra Altamente Calificada, con equipos de diagnóstico avanzados. Detectamos desde miopía hasta condiciones más complejas.',
        },
        {
          icon: '👓',
          title: 'Lentes oftálmicos digitales',
          text:
            'Lentes de alta precisión que se adaptan a tu estilo de vida. Más comodidad, mejor visión.',
        },
        {
          icon: '🕶️',
          title: 'Gafas de sol con protección UV',
          text:
            'Moda y protección en un solo lugar. Con monturas modernas y lentes certificados.',
        },
        {
          icon: '🫣',
          title: 'Lentes de contacto y cosméticos',
          text:
            '¡Comodidad, salud y estilo! Tenemos la opción perfecta para ti.',
        },
        {
          icon: '✨',
          title: 'Monturas para todos los gustos',
          text:
            'Elige entre una gran variedad de diseños, colores y marcas reconocidas. Asesoría personalizada incluida.',
        },
        {
          icon: '🔎',
          title: 'Filtros especializados',
          text:
            'Lentes con protección contra luz azul, antirreflejo, fotocrómicos y más. Ideales para quienes pasan muchas horas frente a pantallas.',
        },
        {
          icon: '📦',
          title: 'Accesorios ópticos',
          text:
            'Estuches, paños, líquidos limpiadores y más para cuidar tus gafas como se merecen.',
        },
      ].map((item, idx) => (
          <div className="flex mb-4 items-start" key={idx}>
            <div className="text-2xl mr-3">{item.icon}</div>
            <div>
              <h4 className="font-bold text-base">{item.title}</h4>
              <p className="text-sm text-gray-800 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
  
        <div className="mt-6 text-center font-semibold text-orange-800 text-sm">
          Atención cercana, asesoría honesta y resultados confiables.<br />
          Ven y descubre por qué somos líderes en salud visual en la ciudad.
        </div>
      </div>
    );
  }
  