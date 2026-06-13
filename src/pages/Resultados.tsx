import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Lock, ArrowRight, HelpCircle } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import { whatsappLink } from '@/lib/constants'
import { stock } from '@/lib/img'
import { stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const STEPS = [
  { n: '1', title: 'Ingresa al portal', desc: 'Haz clic en el botón para acceder al portal del paciente.' },
  { n: '2', title: 'Identifícate', desc: 'Ingresa con tu documento y el código de tu orden de laboratorio.' },
  { n: '3', title: 'Descarga tus resultados', desc: 'Visualiza o descarga tus análisis de forma segura.' },
]

export default function Resultados() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Resultados"
        eyebrow="Resultados en línea"
        title="Consulta tus resultados de laboratorio"
        subtitle="Accede a tus análisis clínicos de forma rápida, segura y confidencial, en cualquier momento."
        bg={stock('resultados.jpg')}
      />

      <section className="section-pad bg-paper">
        <div className="container-pro grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="rounded-3xl bg-brand-gradient p-8 text-white shadow-soft sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-cyan-300">
              <Lock className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold">Portal del paciente</h2>
            <p className="mt-3 text-brand-50/85">
              Tu información médica protegida y disponible cuando la necesites. Acceso seguro las 24 horas.
            </p>
            <Link to="/portal" className="btn-cyan mt-7 w-full sm:w-auto">
              <FileText className="h-5 w-5" />
              Ingresar al portal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.ol
            variants={stagger}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="space-y-5"
          >
            {STEPS.map((s) => (
              <motion.li key={s.n} variants={fadeUp} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-gradient font-display font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display font-bold text-brand-800">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Ayuda */}
      <section className="pb-16">
        <div className="container-pro">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-50/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <HelpCircle className="h-10 w-10 shrink-0 text-brand-500" />
              <div>
                <p className="font-display font-bold text-brand-800">¿Problemas para acceder a tus resultados?</p>
                <p className="text-sm text-ink/65">Escríbenos y te ayudamos a obtenerlos de inmediato.</p>
              </div>
            </div>
            <a
              href={whatsappLink('Hola, necesito ayuda para consultar mis resultados de laboratorio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir ayuda
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
