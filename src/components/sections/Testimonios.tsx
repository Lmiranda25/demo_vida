import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { TESTIMONIALS } from '@/data/content'
import { stagger, fadeUp, inView } from '@/lib/motion'

export default function Testimonios() {
  return (
    <section className="section-pad bg-brand-50/40">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Testimonios"
          title="La confianza de nuestros pacientes"
          subtitle="Miles de personas confían su salud a Vida laboratorios y policlínicos."
        />

        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-brand-100/60"
            >
              <Quote className="absolute right-5 top-5 h-9 w-9 text-brand-100" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-brand-800">{t.name}</p>
                  <p className="text-xs text-ink/55">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
