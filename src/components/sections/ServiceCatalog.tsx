import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TiltCard from '@/components/ui/TiltCard'
import type { MedService } from '@/data/services'
import { whatsappLink } from '@/lib/constants'
import { stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

interface Props {
  items: MedService[]
}

// Catálogo tipo e-commerce con tarjetas 3D (tilt). Reutilizable para
// especialidades y exámenes.
export default function ServiceCatalog({ items }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial={inView.initial}
      whileInView={inView.whileInView}
      viewport={inView.viewport}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((s) => {
        const Icon = s.icon
        return (
          <motion.div key={s.slug} variants={fadeUp}>
            <TiltCard className="group h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-100/60 transition-shadow duration-300 group-hover:shadow-3d">
                <div className="relative h-40 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                  {s.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-cyan-gradient px-3 py-1 text-[11px] font-bold uppercase text-white shadow-glow">
                      {s.badge}
                    </span>
                  )}
                  <div className="absolute -bottom-5 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-7" style={{ transform: 'translateZ(30px)' }}>
                  <h3 className="font-display text-lg font-bold text-brand-800">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{s.short}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to={`/servicio/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-3"
                    >
                      Ver detalle
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={whatsappLink(`Hola, quiero agendar una cita de ${s.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white transition hover:brightness-105"
                      aria-label={`Agendar ${s.name} por WhatsApp`}
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
