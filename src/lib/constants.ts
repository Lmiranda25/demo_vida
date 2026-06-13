// DATOS DE CONTACTO — PLACEHOLDER. El cliente (Vida) debe reemplazarlos por
// sus datos reales. Se inventaron para la demo.
export const CONTACT = {
  name: 'Vida — Sociedad Americana de Laboratorios y Policlínicos',
  shortName: 'Vida',
  phone: '+51 999 000 000',
  phoneRaw: '51999000000',
  email: 'contacto@vidalaboratorios.com',
  address: 'Av. Principal 123 — Lima',
  city: 'Lima, Perú',
  hours: '07:00 am a 08:00 pm',
} as const

export const SOCIALS = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
} as const

export function whatsappLink(message?: string): string {
  const text = message ?? 'Hola, quiero información sobre los servicios de Vida laboratorios.'
  return `https://api.whatsapp.com/send?phone=${CONTACT.phoneRaw}&text=${encodeURIComponent(text)}`
}

// Portal de resultados (placeholder). El cliente conecta su sistema real.
export const RESULTS_PORTAL_URL = 'https://resultados.vidalaboratorios.com'

// Formspree (placeholder) -> https://formspree.io/f/XXXXXXXX
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

export const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/especialidades' },
  { label: 'Exámenes', to: '/examenes' },
  { label: 'Resultados', to: '/resultados' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
] as const
