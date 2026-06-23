import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TaskView from './pages/TaskView';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100 relative">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Wrapper */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-green-500"></div>
            <h2 className="text-xl font-bold m-0">Cubing Hub</h2>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-white/10 rounded-lg border border-white/20 text-white"
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto scroll-smooth">
          <Routes>
            <Route path="/" element={
              <div className="max-w-3xl mx-auto pt-8 md:pt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-blue-500 text-4xl md:text-5xl font-bold mb-4 tracking-tight">SpeedCubing Wiki</h1>
                <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12">
                  Tu enciclopedia definitiva sobre rompecabezas secuenciales y competencias WCA.
                </p>
                
                <div className="glass-panel p-6 md:p-12 border-l-4 border-l-orange-500">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">¡Bienvenido!</h2>
                  <p className="text-base md:text-lg text-slate-300 mb-4">
                    Bienvenido a la plataforma centralizada sobre el fascinante mundo del <strong className="text-white">SpeedCubing</strong>. Explora la evolución de los mecanismos, métodos avanzados de resolución y récords mundiales.
                  </p>
                  <p className="text-base md:text-lg text-slate-300 mb-8">
                    Utiliza el menú para explorar cada una de las categorías:
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
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
