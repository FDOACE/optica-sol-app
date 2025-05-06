import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Gift, Bell, Package } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: <Home size={24} /> },
    { path: '/citas', label: 'Citas', icon: <Calendar size={24} /> },
    { path: '/promociones', label: 'Promos', icon: <Gift size={24} /> },
    { path: '/recordatorios', label: 'Recordar', icon: <Bell size={24} /> },
    { path: '/pedido', label: 'Pedido', icon: <Package size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md z-50">
      <div className="flex justify-around p-2">
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} className={`flex flex-col items-center text-sm ${location.pathname === item.path ? 'text-red-600' : 'text-gray-500'}`}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
