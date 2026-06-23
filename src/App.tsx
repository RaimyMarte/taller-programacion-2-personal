import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
        <Sidebar />
        
        <main className="flex-1 p-8 md:p-12 overflow-y-auto scroll-smooth">
          <Routes>
            <Route path="/" element={
              <div className="max-w-3xl mx-auto pt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-blue-500 text-5xl font-bold mb-4 tracking-tight">Knowledge Hub</h1>
                <p className="text-xl text-slate-400 mb-12">
                  Plataforma de estudio para la asignatura Taller de Programación 2.
                </p>
 
              </div>
            } />
            <Route path="/actividad/:id" element={
              <div className="flex h-full items-center justify-center">
                <p className="text-slate-500 animate-pulse">Renderizando</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
