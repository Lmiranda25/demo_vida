import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { CONTACT, SOCIALS, NAV_LINKS, whatsappLink } from '@/lib/constants'
import { reciclada } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const socials = [
  { icon: Facebook, href: SOCIALS.facebook, label: 'Facebook' },
  { icon: Instagram, href: SOCIALS.instagram, label: 'Instagram' },
  { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-white">
      <div className="container-pro grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <img src={reciclada('logo.png')} alt="Vida — Laboratorios y Policlínicos" className="h-11 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-50/80">
            Sociedad Americana de laboratorios y policlínicos. Cuidamos tu vida con análisis confiables y resultados en línea.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-cyan-500"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Navegación</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-50/80">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-cyan-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-50/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
              <span className="break-all">{CONTACT.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-cyan-400" />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Agenda tu cita</h4>
          <p className="mt-4 text-sm text-brand-50/80">Estamos listos para atenderte y cuidar de tu salud.</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-50/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Vida — Sociedad Americana de Laboratorios y Policlínicos. Todos los derechos reservados.</p>
          <p>Tu bienestar es nuestro compromiso.</p>
        </div>
      </div>
    </footer>
  )
}
