import { useParams, Navigate } from 'react-router-dom';
import { data } from '../domain/data/tasks';
import type { Task, DefinitionTask, TableTask, MapTask, TextTask, AccentColor } from '../domain/models/Task';

export default function TaskView() {
  const { id } = useParams();

  const taskEntry = Object.values(data).find(item => item.id === id) as Task | undefined;

  if (!taskEntry) {
    return <Navigate to="/" />;
  }

  const textColors: Record<AccentColor, string> = {
    blue: 'text-blue-500',
    orange: 'text-orange-500',
    green: 'text-green-500',
    yellow: 'text-yellow-400',
    red: 'text-red-500',
  };

  const bgColors: Record<AccentColor, string> = {
    blue: 'bg-blue-500/10 text-blue-400',
    orange: 'bg-orange-500/10 text-orange-400',
    green: 'bg-green-500/10 text-green-400',
    yellow: 'bg-yellow-400/10 text-yellow-400',
    red: 'bg-red-500/10 text-red-400',
  };

  const borderColors: Record<AccentColor, string> = {
    blue: 'border-blue-500',
    orange: 'border-orange-500',
    green: 'border-green-500',
    yellow: 'border-yellow-400',
    red: 'border-red-500',
  };

  const gradientColors: Record<AccentColor, string> = {
    blue: 'from-blue-500',
    orange: 'from-orange-500',
    green: 'from-green-500',
    yellow: 'from-yellow-400',
    red: 'from-red-500',
  };

  const renderContent = () => {
    switch (taskEntry.type) {
      case 'definicion': {
        const defTask = taskEntry as DefinitionTask;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defTask.content.map((item, index) => (
              <div key={index} className="glass-panel p-6 hover:-translate-y-1 transition-transform">
                <h3 className={`text-xl font-bold mb-3 ${textColors[taskEntry.color]}`}>{item.term}</h3>
                <p className="text-slate-400 m-0 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        );
      }

      case 'cuadro': {
        const tableTask = taskEntry as TableTask;
        return (
          <div className="glass-panel p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {tableTask.headers.map((header, idx) => (
                    <th key={idx} className={`p-4 border-b-2 ${borderColors[taskEntry.color]} ${textColors[taskEntry.color]} font-bold`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableTask.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${rowIdx === tableTask.rows.length - 1 ? 'border-b-0' : ''}`}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className={`p-4 ${cellIdx === 0 ? 'font-bold text-white' : 'text-slate-300'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      case 'mapa': {
        const mapTask = taskEntry as MapTask;
        return (
          <div className="flex flex-col gap-6 relative">
            <div className={`absolute left-5 top-10 bottom-10 w-0.5 bg-gradient-to-b ${gradientColors[taskEntry.color]} to-transparent opacity-30`}></div>
            {mapTask.steps.map((step, index) => (
              <div key={index} className={`glass-panel p-6 border-l-4 ${borderColors[taskEntry.color]} ml-10`}>
                <h3 className="text-xl font-bold text-white mb-2">{step.name}</h3>
                <p className="text-slate-400 m-0">{step.desc}</p>
              </div>
            ))}
          </div>
        );
      }

      case 'reflexion':
      case 'caso':
      case 'investigacion': {
        const textTask = taskEntry as TextTask;
        return (
          <div className="glass-panel p-10">
            <p className="text-slate-300 text-lg leading-relaxed m-0 whitespace-pre-wrap">
              {textTask.content}
            </p>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="mb-10">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase ${bgColors[taskEntry.color]}`}>
          {taskEntry.type}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{taskEntry.title}</h1>
        <p className="text-xl text-slate-400">{taskEntry.description}</p>
      </div>

      {renderContent()}
    </div>
  );
}
