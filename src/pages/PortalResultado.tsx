import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Printer, User, Calendar, Stethoscope, CheckCircle2 } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import { usePortal } from '@/lib/portalAuth'
import { whatsappLink } from '@/lib/constants'
import { stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const STATUS_LABEL: Record<string, string> = {
  normal: 'Normal',
  alto: 'Alto',
  bajo: 'Bajo',
}

export default function PortalResultado() {
  const { patient } = usePortal()
  const { id } = useParams()

  // Si no hay sesión, manda al portal a iniciar sesión.
  if (!patient) return <Navigate to="/portal" replace />

  const result = patient.results.find((r) => r.id === id)
  if (!result || result.status !== 'disponible') return <Navigate to="/portal" replace />

  return (
    <PageWrapper>
      <section className="min-h-screen bg-paper pt-24 pb-16">
        <div className="container-pro max-w-4xl">
          <Link
            to="/portal"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a mis resultados
          </Link>

          {/* Cabecera del resultado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-100/60"
          >
            <div className="bg-brand-gradient p-6 text-white sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <CheckCircle2 className="h-4 w-4" /> Resultado disponible
              </div>
              <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{result.title}</h1>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-50/85">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-cyan-400" /> {patient.name}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cyan-400" /> {result.date}
                </span>
                <span className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-cyan-400" /> {result.doctor}
                </span>
              </div>
            </div>

            {/* Tabla de valores */}
            <div className="p-6 sm:p-8">
              {/* Encabezado tabla (desktop) */}
              <div className="hidden grid-cols-12 gap-4 border-b border-brand-100 pb-3 text-xs font-bold uppercase tracking-wide text-ink/45 sm:grid">
                <span className="col-span-5">Análisis</span>
                <span className="col-span-2 text-right">Resultado</span>
                <span className="col-span-3 text-right">Rango referencia</span>
                <span className="col-span-2 text-right">Estado</span>
              </div>

              <motion.div
                variants={stagger}
                initial={inView.initial}
                whileInView={inView.whileInView}
                viewport={inView.viewport}
                className="divide-y divide-brand-50"
              >
                {result.values.map((v) => (
                  <motion.div
                    key={v.name}
                    variants={fadeUp}
                    className="grid grid-cols-2 items-center gap-2 py-4 sm:grid-cols-12 sm:gap-4"
                  >
                    <span className="col-span-2 font-medium text-brand-800 sm:col-span-5">{v.name}</span>
                    <span className="text-lg font-bold text-brand-700 sm:col-span-2 sm:text-right sm:text-base">
                      {v.value} <span className="text-xs font-normal text-ink/50">{v.unit}</span>
                    </span>
                    <span className="text-xs text-ink/55 sm:col-span-3 sm:text-right sm:text-sm">
                      <span className="sm:hidden">Ref: </span>
                      {v.range}
                    </span>
                    <span className="sm:col-span-2 sm:text-right">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          v.status === 'normal'
                            ? 'bg-emerald-50 text-emerald-700'
                            : v.status === 'alto'
                              ? 'bg-red-50 text-red-600'
                              : 'bg-amber-50 text-amber-600'
                        }`}
                      >
                        {STATUS_LABEL[v.status]}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interpretación */}
              <div className="mt-6 rounded-2xl bg-brand-50/60 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-500">Observaciones</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{result.summary}</p>
              </div>

              {/* Acciones */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => window.print()}
                  className="btn-outline"
                >
                  <Printer className="h-4 w-4" />
                  Imprimir
                </button>
                <button onClick={() => window.print()} className="btn-brand">
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </button>
                <a
                  href={whatsappLink(`Hola, tengo una consulta sobre mi resultado de ${result.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white hover:brightness-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Consultar al médico
                </a>
              </div>
              <p className="mt-4 text-xs text-ink/40">
                * Este resultado es una simulación con fines de demostración. Los valores no
                corresponden a un paciente real.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
