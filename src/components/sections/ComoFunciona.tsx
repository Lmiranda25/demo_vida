import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { STEPS } from '@/data/content'
import { stock } from '@/lib/img'
import { stagger, fadeUp, inView } from '@/lib/motion'

// Cómo atenderse en 3 pasos — banda oscura con imagen muy sutil de fondo.
export default function ComoFunciona() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-900">
        <img src={stock('lab.jpg')} alt="" className="h-full w-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-brand-800/95 to-brand-900/97" />
      </div>

      <div className="container-pro">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Atenderte es muy simple"
          subtitle="En tres pasos accedes a la atención médica que necesitas y consultas tus resultados."
          light
        />

        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative mt-14 grid gap-8 md:grid-cols-3"
        >
          <div className="absolute left-1/2 top-8 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent md:block" />
          {STEPS.map((step) => (
            <motion.div key={step.n} variants={fadeUp} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-gradient font-display text-xl font-extrabold text-white shadow-glow">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-brand-50/80">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
