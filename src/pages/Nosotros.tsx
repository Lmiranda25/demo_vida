import { motion } from 'framer-motion'
import { CheckCircle2, Cpu, Users, HeartHandshake } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Stats from '@/components/sections/Stats'
import Testimonios from '@/components/sections/Testimonios'
import { ADVANTAGES } from '@/data/content'
import { stock } from '@/lib/img'
import { slideRight, slideLeft, stagger, fadeUp, inView } from '@/lib/motion'

const ICONS = [Cpu, Users, HeartHandshake]

export default function Nosotros() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Nosotros"
        eyebrow="¿Quiénes somos?"
        title="Cuidamos tu vida con cada análisis"
        subtitle="Una sociedad de laboratorios y policlínicos comprometida con tu salud y la de tu familia."
        bg={stock('consulta.jpg')}
      />

      <div className="bg-paper pt-12">
        <Stats />
      </div>

      <section className="section-pad bg-paper">
        <div className="container-pro grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={slideRight}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="relative"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-cyan-gradient opacity-15 blur-xl" />
            <img src={stock('lab.jpg')} alt="Laboratorio de Vida" className="w-full rounded-3xl shadow-soft" />
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
          >
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-800 sm:text-3xl lg:text-4xl">
              Tu respaldo en análisis clínicos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Vida — Sociedad Americana de Laboratorios y Policlínicos es una red dedicada a brindar
              servicios de salud y análisis clínicos de alta calidad, con equipos de última tecnología
              y un equipo profesional comprometido con cada paciente.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Cuidamos tu vida. Tu salud y la de tu familia son el centro de todo lo que hacemos, con
              resultados precisos y disponibles en línea.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['Equipos de última generación', 'Resultados en línea', 'Toma de muestra a domicilio', 'Atención a empresas'].map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-500" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-brand-50/40">
        <div className="container-pro">
          <motion.div
            variants={stagger}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="grid gap-6 md:grid-cols-3"
          >
            {ADVANTAGES.map((adv, i) => {
              const Icon = ICONS[i]
              return (
                <motion.div key={adv.title} variants={fadeUp} className="rounded-2xl bg-white p-7 text-center shadow-card">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-800">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{adv.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Testimonios />
    </PageWrapper>
  )
}
