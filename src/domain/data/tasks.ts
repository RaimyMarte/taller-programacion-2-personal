import type { Task } from '../models/Task';

export const data: Record<string, Task> = {
  glosario: {
    id: 'glosario',
    title: 'Glosario de Conceptos',
    type: 'definicion',
    color: 'blue',
    description: 'Términos fundamentales del mundo del SpeedCubing.',
    content: [
      { term: 'CFOP', definition: 'Método avanzado de resolución inventado por Jessica Fridrich. Consiste en Cruz, F2L, OLL y PLL.' },
      { term: 'WCA', definition: 'World Cube Association. Organización que regula las competiciones de rompecabezas a nivel mundial.' },
      { term: 'Algoritmo', definition: 'Secuencia de movimientos memorizada para lograr un estado específico en el cubo.' },
      { term: 'Look-ahead', definition: 'Técnica de predecir las siguientes piezas mientras se ejecutan los movimientos actuales sin pausas.' }
    ]
  },
  reflexion: {
    id: 'beneficios-cognitivos',
    title: 'Beneficios Cognitivos',
    type: 'reflexion',
    color: 'orange',
    description: 'Análisis personal sobre cómo armar el cubo afecta al cerebro.',
    content: 'El SpeedCubing no es solo un pasatiempo; es un ejercicio intensivo para el cerebro. Al practicar rutinas repetitivas y memorizar más de 70 algoritmos para el método avanzado (OLL y PLL), la memoria muscular y la retención a corto plazo se ven inmensamente beneficiadas. El reconocimiento de patrones (pattern recognition) que se desarrolla para el "look-ahead" mejora la velocidad de procesamiento de la información visual. Personalmente, he notado que el enfoque y la capacidad de resolución de problemas bajo presión aumentan considerablemente al participar en competencias de WCA.'
  },
  comparativa: {
    id: 'marcas-cubos',
    title: 'Comparativa de Marcas Top',
    type: 'cuadro',
    color: 'green',
    description: 'Análisis de los mejores cubos magnéticos en el mercado actual.',
    headers: ['Característica', 'GAN 14', 'MoYu WeiLong', 'QiYi Tornado V3'],
    rows: [
      ['Sistema Magnético', 'MagLev Automático', 'MagLev Ajustable', 'Imanes de Núcleo'],
      ['Peso', '71g', '76g', '72g'],
      ['Precio Aprox.', '$80 USD', '$40 USD', '$35 USD'],
      ['Sensación', 'Suave, muy rápido', 'Estable, crujiente', 'Silencioso, controlable'],
      ['Corner Cutting', 'Insuperable (50°+)', 'Excelente (45°)', 'Muy bueno (45°)']
    ]
  },
  diagrama: {
    id: 'metodo-cfop',
    title: 'Flujo del Método CFOP',
    type: 'mapa',
    color: 'yellow',
    description: 'Mapa conceptual de los pasos para resolver el cubo con el método avanzado.',
    steps: [
      { name: '1. Cross (Cruz)', desc: 'Armar una cruz (generalmente blanca) en la base que coincida con los centros laterales.' },
      { name: '2. F2L (First 2 Layers)', desc: 'Insertar pares de esquinas y aristas simultáneamente, resolviendo las dos primeras capas en lugar de una.' },
      { name: '3. OLL (Orientation Last Layer)', desc: 'Orientar todas las piezas de la capa superior para que la cara quede de un solo color (usualmente amarillo), usando uno de 57 algoritmos.' },
      { name: '4. PLL (Permutation Last Layer)', desc: 'Permutar (cambiar de lugar) las piezas orientadas de la última capa para terminar completamente el cubo, usando uno de 21 algoritmos.' }
    ]
  },
  caso: {
    id: 'record-mundial',
    title: 'Estudio de Caso: Max Park',
    type: 'caso',
    color: 'red',
    description: 'Análisis del récord mundial de 3.13 segundos.',
    content: 'En junio de 2023, el cubero Max Park rompió el récord mundial oficial en la categoría de 3x3x3 con un tiempo histórico de 3.13 segundos. Este estudio analiza la reconstrucción de su solución. Max ejecutó una solución increíblemente eficiente en movimientos. La inspección fue la clave de todo: durante los 15 segundos previos, logró planificar no solo la cruz, sino el primer par de F2L. Esta transición sin pausas, junto a una ejecución de OLL (Orientation of Last Layer) que resultó en un "PLL Skip" (omisión del último paso por pura probabilidad matemática afortunada), permitió este tiempo de leyenda. Nos enseña que la velocidad de giro por sí sola no sirve sin eficiencia de movimientos.'
  },
  investigacion: {
    id: 'mecanismos-internos',
    title: 'Evolución de Mecanismos',
    type: 'investigacion',
    color: 'blue',
    description: 'Cómo ha evolucionado el hardware desde 1974.',
    content: 'El diseño original de Ernő Rubik utilizaba un núcleo esférico y plástico muy rígido. Con la masificación del SpeedCubing, la ingeniería cambió drásticamente. Hoy, los cubos no utilizan resortes convencionales, sino sistemas "MagLev" (Levitación Magnética), donde dos imanes con el mismo polo se repelen, eliminando la fricción mecánica de los metales. Sumado a imanes posicionados en las esquinas que atraen las piezas al núcleo, los cubos modernos cuentan con alineación automática. Esto permite realizar cortes de esquina ("corner cutting") a más de 45 grados sin que el cubo se trabe, un fenómeno físico que desafía la geometría original del juguete.'
  }
};
