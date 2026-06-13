import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, Lock } from 'lucide-react'
import { stock } from '@/lib/img'
import { fadeUp, inView } from '@/lib/motion'

// CTA destacado: portal de resultados en línea (login externo del cliente).
export default function ResultadosCTA() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-pro">
        <motion.div
          variants={fadeUp}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative overflow-hidden rounded-3xl bg-brand-gradient shadow-soft"
        >
          <div className="absolute inset-0">
            <img src={stock('resultados.jpg')} alt="" className="h-full w-full object-cover opacity-15" />
          </div>
          <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <FileText className="h-4 w-4" />
                Resultados en línea
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Consulta tus resultados de laboratorio
              </h2>
              <p className="mt-4 max-w-md text-brand-50/85">
                Accede a tus análisis clínicos de forma rápida y segura desde nuestro portal en línea,
                en cualquier momento y lugar.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white/95 p-6 shadow-card backdrop-blur sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-gradient text-white">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-800">Portal del paciente</p>
                    <p className="text-xs text-ink/55">Acceso seguro y confidencial</p>
                  </div>
                </div>
                <Link to="/portal" className="btn-cyan mt-5 w-full">
                  Ingresar al portal
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-center text-xs text-ink/45">
                  ¿Problemas para ingresar? Escríbenos por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
