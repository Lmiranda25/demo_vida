import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, Clock, ShieldPlus } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import { getService, SERVICES } from '@/data/services'
import { whatsappLink, CONTACT } from '@/lib/constants'
import { slideRight, slideLeft, stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import ServiceCatalog from '@/components/sections/ServiceCatalog'

export default function ServicioDetalle() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) return <Navigate to="/especialidades" replace />

  const backTo = service.kind === 'especialidad' ? '/especialidades' : '/examenes'
  const related = SERVICES.filter((s) => s.kind === service.kind && s.slug !== service.slug).slice(0, 3)
  const Icon = service.icon

  return (
    <PageWrapper>
      <section className="bg-brand-50/50 pt-28 pb-16">
        <div className="container-pro">
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a {service.kind === 'especialidad' ? 'especialidades' : 'exámenes'}
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="show"
              className="relative overflow-hidden rounded-3xl shadow-soft"
            >
              <img src={service.image} alt={service.name} className="h-64 w-full object-cover sm:h-80 lg:h-96" />
              {service.badge && (
                <span className="absolute right-5 top-5 rounded-full bg-cyan-gradient px-4 py-1.5 text-xs font-bold uppercase text-white shadow-glow">
                  {service.badge}
                </span>
              )}
            </motion.div>

            <motion.div variants={slideLeft} initial="hidden" animate="show">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                <Icon className="h-7 w-7" />
              </div>
              <span className="eyebrow mt-4 block">
                {service.kind === 'especialidad' ? 'Especialidad' : 'Examen / Servicio'}
              </span>
              <h1 className="mt-2 font-display text-3xl font-extrabold text-brand-800 sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink/70">{service.long}</p>

              <motion.ul
                variants={stagger}
                initial="hidden"
                animate="show"
                className="mt-7 space-y-3"
              >
                {service.features.map((f) => (
                  <motion.li key={f} variants={fadeUp} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-gradient text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{f}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Hola, quiero agendar una cita de ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white hover:brightness-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Agendar por WhatsApp
                </a>
                <Link to="/contacto" className="btn-outline">
                  Solicitar información
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cyan-500" /> {CONTACT.hours}
                </span>
                <span className="flex items-center gap-2">
                  <ShieldPlus className="h-4 w-4 text-cyan-500" /> {CONTACT.address}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section className="section-pad bg-paper">
        <div className="container-pro">
          <h2 className="font-display text-2xl font-bold text-brand-800">
            Otros {service.kind === 'especialidad' ? 'especialidades' : 'exámenes'}
          </h2>
          <div className="mt-8">
            <motion.div
              variants={fadeUp}
              initial={inView.initial}
              whileInView={inView.whileInView}
              viewport={inView.viewport}
            >
              <ServiceCatalog items={related} />
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
