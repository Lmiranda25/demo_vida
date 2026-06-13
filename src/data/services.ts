import {
  Stethoscope,
  Droplet,
  HardHat,
  Microscope,
  Dna,
  HeartPulse,
  FlaskConical,
  ClipboardCheck,
  Home,
  ShieldCheck,
  TestTube,
  Syringe,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { stock } from '@/lib/img'

export type ServiceKind = 'especialidad' | 'examen'

export interface MedService {
  slug: string
  name: string
  kind: ServiceKind
  icon: LucideIcon
  image: string
  short: string
  long: string
  features: string[]
  badge?: string
}

// CONTENIDO PLACEHOLDER de laboratorio-policlínico (inventado para la demo).
// El cliente (Vida) debe reemplazarlo por sus servicios y exámenes reales.
// 'especialidad' = servicios médicos · 'examen' = análisis / exámenes de laboratorio.
export const SERVICES: MedService[] = [
  // ---------- SERVICIOS MÉDICOS ----------
  {
    slug: 'consulta-medica',
    name: 'Consulta Médica',
    kind: 'especialidad',
    icon: Stethoscope,
    image: stock('consulta.jpg'),
    short: 'Atención médica general con profesionales para evaluar y orientar tu salud.',
    long: 'Nuestro servicio de consulta médica ofrece una evaluación integral de tu estado de salud, diagnóstico y orientación profesional, con la posibilidad de derivar a los análisis o especialistas que necesites.',
    features: ['Evaluación integral', 'Diagnóstico profesional', 'Orientación personalizada'],
  },
  {
    slug: 'examenes-ocupacionales',
    name: 'Exámenes Ocupacionales',
    kind: 'especialidad',
    icon: HardHat,
    image: stock('ocupacional.jpg'),
    short: 'Evaluaciones médico-ocupacionales para empresas y trabajadores.',
    long: 'Realizamos exámenes médico-ocupacionales de ingreso, periódicos y de retiro, cumpliendo con la normativa vigente. Soluciones ágiles para empresas que cuidan la salud de sus colaboradores.',
    features: ['Pre-ocupacional, periódico y de retiro', 'Aptitud médica', 'Atención a empresas'],
    badge: 'Empresas',
  },
  {
    slug: 'chequeos-preventivos',
    name: 'Chequeos Preventivos',
    kind: 'especialidad',
    icon: ShieldCheck,
    image: stock('cta.jpg'),
    short: 'Paquetes de chequeo integral para detectar a tiempo y prevenir.',
    long: 'Programas de chequeo preventivo que combinan consulta y análisis para evaluar tu estado de salud general. La mejor inversión para detectar a tiempo y cuidar tu bienestar.',
    features: ['Evaluación integral', 'Detección temprana', 'Paquetes a tu medida'],
    badge: 'Preventivo',
  },
  {
    slug: 'atencion-domicilio',
    name: 'Toma de Muestra a Domicilio',
    kind: 'especialidad',
    icon: Home,
    image: stock('domicilio.jpg'),
    short: 'Llevamos la toma de muestras a tu hogar con total bioseguridad.',
    long: 'No tienes que salir de casa: nuestro personal capacitado realiza la toma de muestras en tu domicilio siguiendo estrictos protocolos de bioseguridad. Comodidad y seguridad para ti y tu familia.',
    features: ['En la comodidad de tu hogar', 'Protocolos de bioseguridad', 'Personal capacitado'],
    badge: 'A domicilio',
  },
  // ---------- ANÁLISIS / EXÁMENES DE LABORATORIO ----------
  {
    slug: 'analisis-clinicos',
    name: 'Análisis Clínicos',
    kind: 'examen',
    icon: FlaskConical,
    image: stock('analisis.jpg'),
    short: 'Hemograma, glucosa, perfiles y más, con resultados en línea.',
    long: 'Realizamos una amplia gama de análisis clínicos de rutina: hemograma, glucosa, perfil lipídico, perfil hepático, renal y más, con tecnología confiable y resultados disponibles en línea.',
    features: ['Hemograma y bioquímica', 'Perfiles completos', 'Resultados en línea'],
    badge: 'Resultados online',
  },
  {
    slug: 'hematologia',
    name: 'Hematología',
    kind: 'examen',
    icon: Droplet,
    image: stock('sangre.jpg'),
    short: 'Estudio de la sangre y sus componentes para tu diagnóstico.',
    long: 'El área de hematología analiza la sangre y sus componentes para detectar anemias, infecciones, trastornos de coagulación y otras condiciones, apoyando un diagnóstico preciso.',
    features: ['Hemograma completo', 'Estudios de coagulación', 'Diagnóstico de anemias'],
  },
  {
    slug: 'microbiologia',
    name: 'Microbiología',
    kind: 'examen',
    icon: Microscope,
    image: stock('microbiologia.jpg'),
    short: 'Detección de bacterias, hongos y parásitos con cultivos especializados.',
    long: 'Nuestro laboratorio de microbiología realiza cultivos y pruebas para identificar agentes infecciosos y orientar el tratamiento adecuado con precisión.',
    features: ['Urocultivos y coprocultivos', 'Antibiogramas', 'Identificación de patógenos'],
  },
  {
    slug: 'biologia-molecular',
    name: 'Biología Molecular',
    kind: 'examen',
    icon: Dna,
    image: stock('molecular.jpg'),
    short: 'Pruebas moleculares (PCR) de alta precisión y sensibilidad.',
    long: 'Aplicamos técnicas de biología molecular como la PCR para la detección altamente sensible de agentes infecciosos y estudios genéticos, con resultados confiables.',
    features: ['Pruebas PCR', 'Alta sensibilidad', 'Detección temprana'],
    badge: 'Alta precisión',
  },
  {
    slug: 'perfil-hormonal',
    name: 'Perfil Hormonal',
    kind: 'examen',
    icon: TestTube,
    image: stock('lab.jpg'),
    short: 'Evaluación de hormonas: tiroides, fertilidad, metabolismo y más.',
    long: 'Estudiamos los niveles hormonales (tiroideos, sexuales, metabólicos) para apoyar el diagnóstico y seguimiento de diversas condiciones endocrinas.',
    features: ['Perfil tiroideo', 'Hormonas de fertilidad', 'Control metabólico'],
  },
  {
    slug: 'pruebas-rapidas',
    name: 'Pruebas Rápidas',
    kind: 'examen',
    icon: Syringe,
    image: stock('resultados.jpg'),
    short: 'Resultados inmediatos para despistajes y diagnósticos puntuales.',
    long: 'Ofrecemos pruebas rápidas para despistajes y diagnósticos puntuales con resultados en pocos minutos, ideales cuando necesitas una respuesta inmediata.',
    features: ['Resultados inmediatos', 'Despistajes', 'Atención sin cita'],
    badge: 'Inmediato',
  },
  {
    slug: 'control-prenatal',
    name: 'Análisis Prenatales',
    kind: 'examen',
    icon: HeartPulse,
    image: stock('microbiologia.jpg'),
    short: 'Panel completo de análisis para el cuidado del embarazo.',
    long: 'Conjunto de análisis recomendados durante el embarazo para vigilar la salud de la madre y el bebé, con un seguimiento cuidadoso en cada etapa.',
    features: ['Panel prenatal completo', 'Seguimiento por trimestre', 'Atención cuidadosa'],
  },
  {
    slug: 'perfil-preventivo',
    name: 'Perfil Preventivo',
    kind: 'examen',
    icon: ClipboardCheck,
    image: stock('consulta.jpg'),
    short: 'Batería de análisis para un chequeo general de tu salud.',
    long: 'Un conjunto de análisis seleccionados para evaluar de forma general tu estado de salud y detectar tempranamente posibles alteraciones.',
    features: ['Chequeo general', 'Detección temprana', 'Recomendaciones de seguimiento'],
    badge: 'Preventivo',
  },
]

export const SPECIALTIES = SERVICES.filter((s) => s.kind === 'especialidad')
export const EXAMS = SERVICES.filter((s) => s.kind === 'examen')
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
