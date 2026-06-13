import { stock } from '@/lib/img'

// CONTENIDO PLACEHOLDER (inventado para la demo). Reemplazar por datos reales de Vida.

// Estadísticas de confianza
export const STATS = [
  { to: 15, suffix: '+', label: 'Años de experiencia' },
  { to: 200, suffix: '+', label: 'Análisis disponibles' },
  { to: 50, suffix: 'k+', label: 'Pacientes atendidos' },
  { to: 24, suffix: 'h', label: 'Resultados en línea' },
]

// Ventajas / por qué elegirnos
export const ADVANTAGES = [
  {
    title: 'Tecnología de última generación',
    desc: 'Equipos modernos que garantizan análisis precisos y confiables.',
  },
  {
    title: 'Resultados rápidos y en línea',
    desc: 'Consulta tus resultados desde casa, de forma segura y a tiempo.',
  },
  {
    title: 'Cuidamos tu vida',
    desc: 'Un equipo comprometido con tu salud y la de tu familia en cada análisis.',
  },
]

// Pasos para atenderse
export const STEPS = [
  { n: '01', title: 'Elige tu servicio', desc: 'Selecciona el análisis o servicio que necesitas.' },
  { n: '02', title: 'Toma tu muestra', desc: 'Acércate a nuestra sede o solicita la toma a domicilio.' },
  { n: '03', title: 'Recibe tus resultados', desc: 'Consulta tus resultados en línea, rápido y seguro.' },
]

// PLACEHOLDER: testimonios de ejemplo. Reemplazar por reseñas reales.
export interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Lucía Fernández',
    role: 'Paciente — Análisis clínicos',
    avatar: stock('av1.jpg'),
    text: 'Me tomaron la muestra a domicilio y vi mis resultados en línea el mismo día. Súper práctico y el personal muy amable.',
  },
  {
    name: 'Carlos Medina',
    role: 'Empresa — Exámenes ocupacionales',
    avatar: stock('av2.jpg'),
    text: 'Hicimos los exámenes ocupacionales de todo el equipo. Rápidos, ordenados y cumpliendo la normativa. Excelente servicio.',
  },
  {
    name: 'Andrea Ríos',
    role: 'Paciente — Chequeo preventivo',
    avatar: stock('av3.jpg'),
    text: 'El chequeo preventivo fue muy completo y me explicaron cada resultado con claridad. Me sentí en muy buenas manos.',
  },
]
