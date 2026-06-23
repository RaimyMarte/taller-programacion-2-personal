export type TaskType = 'definicion' | 'reflexion' | 'cuadro' | 'mapa' | 'caso' | 'investigacion';
export type AccentColor = 'blue' | 'orange' | 'green' | 'yellow' | 'red';

export interface BaseTask {
  id: string;
  title: string;
  type: TaskType;
  color: AccentColor;
  description: string;
}

export interface DefinitionItem {
  term: string;
  definition: string;
}

export interface DefinitionTask extends BaseTask {
  type: 'definicion';
  content: DefinitionItem[];
}

export interface TextTask extends BaseTask {
  type: 'reflexion' | 'caso' | 'investigacion';
  content: string;
}

export interface TableTask extends BaseTask {
  type: 'cuadro';
  headers: string[];
  rows: string[][];
}

export interface MapStep {
  name: string;
  desc: string;
}

export interface MapTask extends BaseTask {
  type: 'mapa';
  steps: MapStep[];
}

// Discriminated union for all tasks
export type Task = DefinitionTask | TextTask | TableTask | MapTask;
