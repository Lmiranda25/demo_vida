import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/data/content'
import { stagger, fadeUp, inView } from '@/lib/motion'

// Banda de estadísticas de confianza con contadores animados.
export default function Stats() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="container-pro">
        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-brand-100 shadow-soft lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="bg-white px-4 py-6 text-center transition-colors hover:bg-brand-50/60 sm:py-8"
            >
              <p className="font-display text-xl font-extrabold text-brand-700 sm:text-3xl lg:text-4xl">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium text-ink/60 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
