// DATOS DEMO del portal del paciente. Todo es simulado (sin backend) para la
// demo. El cliente conectaría esto a su sistema real de laboratorio.

export interface LabValue {
  name: string
  value: string
  unit: string
  range: string
  // estado para colorear: normal | alto | bajo
  status: 'normal' | 'alto' | 'bajo'
}

export interface LabResult {
  id: string
  title: string
  category: string
  date: string // legible
  doctor: string
  status: 'disponible' | 'en-proceso'
  summary: string
  values: LabValue[]
}

export interface DemoPatient {
  dni: string
  code: string // código de orden
  name: string
  age: number
  results: LabResult[]
}

// Paciente de ejemplo. Credenciales demo mostradas en la pantalla de login.
export const DEMO_PATIENT: DemoPatient = {
  dni: '12345678',
  code: 'VIDA-2026',
  name: 'María López Vega',
  age: 34,
  results: [
    {
      id: 'hemograma',
      title: 'Hemograma Completo',
      category: 'Hematología',
      date: '08 de junio, 2026',
      doctor: 'Dra. Carla Ruiz',
      status: 'disponible',
      summary: 'Valores dentro de los rangos normales. Sin hallazgos relevantes.',
      values: [
        { name: 'Hemoglobina', value: '13.8', unit: 'g/dL', range: '12.0 – 16.0', status: 'normal' },
        { name: 'Hematocrito', value: '41', unit: '%', range: '36 – 46', status: 'normal' },
        { name: 'Leucocitos', value: '7.200', unit: '/mm³', range: '4.000 – 10.000', status: 'normal' },
        { name: 'Plaquetas', value: '250.000', unit: '/mm³', range: '150.000 – 450.000', status: 'normal' },
      ],
    },
    {
      id: 'perfil-lipidico',
      title: 'Perfil Lipídico',
      category: 'Bioquímica',
      date: '08 de junio, 2026',
      doctor: 'Dr. Laboratorio Vida',
      status: 'disponible',
      summary: 'Colesterol total ligeramente elevado. Se recomienda control dietético.',
      values: [
        { name: 'Colesterol total', value: '215', unit: 'mg/dL', range: '< 200', status: 'alto' },
        { name: 'Colesterol HDL', value: '58', unit: 'mg/dL', range: '> 40', status: 'normal' },
        { name: 'Colesterol LDL', value: '132', unit: 'mg/dL', range: '< 130', status: 'alto' },
        { name: 'Triglicéridos', value: '140', unit: 'mg/dL', range: '< 150', status: 'normal' },
      ],
    },
    {
      id: 'glucosa',
      title: 'Glucosa en Ayunas',
      category: 'Bioquímica',
      date: '08 de junio, 2026',
      doctor: 'Dr. Laboratorio Vida',
      status: 'disponible',
      summary: 'Nivel de glucosa normal en ayunas.',
      values: [{ name: 'Glucosa', value: '92', unit: 'mg/dL', range: '70 – 100', status: 'normal' }],
    },
    {
      id: 'tiroides',
      title: 'Perfil Tiroideo (TSH)',
      category: 'Endocrinología',
      date: '10 de junio, 2026',
      doctor: 'Dra. Ana Salas',
      status: 'en-proceso',
      summary: 'Resultado en proceso. Estará disponible en las próximas horas.',
      values: [],
    },
  ],
}
