import Info from './pages/Info'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Citas from './pages/Citas'
import Promociones from './pages/Promociones'
import Recordatorios from './pages/Recordatorios'
import Pedido from './pages/Pedido'
import BottomNav from './components/BottomNav'
import Redireccion from './pages/Redireccion'
import ComoLlegar from './pages/ComoLlegar'
export default function App() {
  return (
    <div className="pb-16">
      <Routes>
                <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/recordatorios" element={<Recordatorios />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/redireccion" element={<Redireccion />} />
        <Route path="/comollegar" element={<ComoLlegar />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
