import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TaskView from './pages/TaskView';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
        <Sidebar />

        <main className="flex-1 p-8 md:p-12 overflow-y-auto scroll-smooth">
          <Routes>
            <Route path="/" element={
              <div className="max-w-3xl mx-auto pt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-blue-500 text-5xl font-bold mb-4 tracking-tight">SpeedCubing Wiki</h1>
                <p className="text-xl text-slate-400 mb-12">
                  Tu enciclopedia definitiva sobre rompecabezas secuenciales y competencias WCA.
                </p>

                <div className="glass-panel p-8 md:p-12 border-l-4 border-l-orange-500">
                  <h2 className="text-3xl font-bold mb-4">¡Bienvenido!</h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Bienvenido a la plataforma centralizada sobre el fascinante mundo del <strong className="text-white">SpeedCubing</strong>. Explora la evolución de los mecanismos, métodos avanzados de resolución y récords mundiales.
                  </p>
                  <p className="text-lg text-slate-300 mb-8">
                    Utiliza el menú lateral para explorar cada una de las categorías:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="glass-panel p-5 hover:-translate-y-1 transition-transform">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Definiciones</span>
                      <p className="text-sm text-slate-400 m-0">Glosario interactivo de conceptos técnicos del cubing.</p>
                    </div>
                    <div className="glass-panel p-5 hover:-translate-y-1 transition-transform">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Cuadros</span>
                      <p className="text-sm text-slate-400 m-0">Tablas comparativas de marcas y métodos de resolución.</p>
                    </div>
                    <div className="glass-panel p-5 hover:-translate-y-1 transition-transform">
                      <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Mapas</span>
                      <p className="text-sm text-slate-400 m-0">Flujos algorítmicos visuales del método CFOP avanzado.</p>
                    </div>
                    <div className="glass-panel p-5 hover:-translate-y-1 transition-transform">
                      <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Casos</span>
                      <p className="text-sm text-slate-400 m-0">Análisis y estudio de récords mundiales en competiciones WCA.</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/actividad/:id" element={<TaskView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
