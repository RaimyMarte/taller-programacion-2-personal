import { Link, useLocation } from 'react-router-dom';
import { data } from '../domain/data/tasks';
import type { AccentColor } from '../domain/models/Task';

export default function Sidebar() {
  const location = useLocation();

  const colorMap: Record<AccentColor, { bg: string, shadow: string, border: string }> = {
    blue: { bg: 'bg-blue-500', shadow: 'shadow-[0_0_10px_rgba(59,130,246,0.8)]', border: 'border-blue-500/50' },
    orange: { bg: 'bg-orange-500', shadow: 'shadow-[0_0_10px_rgba(249,115,22,0.8)]', border: 'border-orange-500/50' },
    green: { bg: 'bg-green-500', shadow: 'shadow-[0_0_10px_rgba(34,197,94,0.8)]', border: 'border-green-500/50' },
    yellow: { bg: 'bg-yellow-400', shadow: 'shadow-[0_0_10px_rgba(250,204,21,0.8)]', border: 'border-yellow-400/50' },
    red: { bg: 'bg-red-500', shadow: 'shadow-[0_0_10px_rgba(239,68,68,0.8)]', border: 'border-red-500/50' },
  };

  return (
    <aside className="glass-panel w-80 m-4 p-6 flex flex-col gap-8 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
      <div>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-green-500"></div>
          <h2 className="text-2xl font-bold m-0">Cubing Hub</h2>
        </Link>
        <p className="text-sm text-slate-400 mt-2">Raimy Marte</p>
      </div>

      <nav>
        <h4 className="text-slate-500 uppercase text-xs tracking-widest mb-4 font-bold">
          Asignaciones
        </h4>
        <ul className="flex flex-col gap-2">
          {Object.entries(data).map(([_, item]) => {
            const path = `/actividad/${item.id}`;
            const isActive = location.pathname === path;
            const theme = colorMap[item.color];

            return (
              <li key={item.id}>
                <Link to={path}>
                  <div className={`px-4 py-3 rounded-xl flex items-center transition-all duration-300 border ${isActive ? `bg-white/10 ${theme.border}` : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                    <div className={`w-3 h-3 rounded-full mr-3 ${theme.bg} transition-all duration-300 ${isActive ? theme.shadow : 'opacity-60'}`}></div>
                    <span className={`${isActive ? 'font-semibold text-white' : 'font-medium text-slate-400'}`}>
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
