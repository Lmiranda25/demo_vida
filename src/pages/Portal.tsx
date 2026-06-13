import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Lock,
  User,
  KeyRound,
  LogOut,
  FileText,
  Clock,
  ChevronRight,
  Download,
  ArrowLeft,
  Info,
} from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import { usePortal } from '@/lib/portalAuth'
import { DEMO_PATIENT } from '@/data/portal'
import { reciclada } from '@/lib/img'
import { whatsappLink } from '@/lib/constants'
import { stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Portal() {
  const { patient, login, logout } = usePortal()
  const navigate = useNavigate()
  const [dni, setDni] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleLogin(e: FormEvent) {
    e.preventDefault()
    if (login(dni, code)) {
      setError('')
    } else {
      setError('Datos incorrectos. Usa los datos de demostración indicados abajo.')
    }
  }

  // ---------- VISTA LOGIN ----------
  if (!patient) {
    return (
      <PageWrapper>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient px-5 py-24">
          <div className="absolute -left-20 top-24 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-brand-400/20 blur-3xl sm:h-80 sm:w-80" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-md"
          >
            <Link to="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-cyan-300">
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
            <div className="rounded-3xl bg-white p-7 shadow-soft sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <img src={reciclada('logo.svg')} alt="Vida" className="h-8 w-auto" />
                </div>
              </div>
              <h1 className="mt-5 font-display text-2xl font-bold text-brand-800">Portal del paciente</h1>
              <p className="mt-1 text-sm text-ink/60">Consulta tus resultados de laboratorio en línea.</p>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">Documento (DNI)</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-ink/40" />
                    <input
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      required
                      placeholder="Tu número de DNI"
                      className="w-full rounded-xl border border-brand-100 bg-brand-50/40 py-3 pl-9 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">Código de orden</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-3.5 h-4 w-4 text-ink/40" />
                    <input
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                      placeholder="Código de tu orden"
                      className="w-full rounded-xl border border-brand-100 bg-brand-50/40 py-3 pl-9 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
                    />
                  </div>
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" className="btn-brand w-full">
                  <Lock className="h-4 w-4" />
                  Ingresar
                </button>
              </form>

              {/* Aviso de demo con credenciales */}
              <div className="mt-5 flex items-start gap-2 rounded-xl bg-cyan-50 p-3 text-xs text-brand-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                <span>
                  <strong>Demo:</strong> ingresa con DNI <strong>{DEMO_PATIENT.dni}</strong> y código{' '}
                  <strong>{DEMO_PATIENT.code}</strong> para ver resultados de ejemplo.
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </PageWrapper>
    )
  }

  // ---------- VISTA DASHBOARD ----------
  const disponibles = patient.results.filter((r) => r.status === 'disponible').length

  return (
    <PageWrapper>
      <section className="min-h-screen bg-paper pt-24 pb-16">
        <div className="container-pro">
          {/* Cabecera del paciente */}
          <div className="flex flex-col gap-4 rounded-3xl bg-brand-gradient p-6 text-white shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 font-display text-xl font-bold">
                {patient.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-300">Bienvenido(a)</p>
                <h1 className="font-display text-2xl font-bold">{patient.name}</h1>
                <p className="text-sm text-brand-50/80">
                  DNI {patient.dni} · {patient.age} años · {disponibles} resultados disponibles
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                logout()
                navigate('/portal')
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/20"
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </button>
          </div>

          <h2 className="mt-10 font-display text-xl font-bold text-brand-800">Mis resultados</h2>

          <motion.div
            variants={stagger}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="mt-5 grid gap-4 sm:grid-cols-2"
          >
            {patient.results.map((r) => {
              const ready = r.status === 'disponible'
              return (
                <motion.div key={r.id} variants={fadeUp}>
                  {ready ? (
                    <Link
                      to={`/portal/resultado/${r.id}`}
                      className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-brand-100/60 transition hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-gradient text-white">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display font-bold text-brand-800">{r.title}</h3>
                        <p className="truncate text-xs text-ink/55">
                          {r.category} · {r.date}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 text-brand-300 transition group-hover:translate-x-1 group-hover:text-brand-600" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-100/60">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-400">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display font-bold text-brand-700">{r.title}</h3>
                        <p className="text-xs text-ink/50">{r.category} · En proceso</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold uppercase text-brand-500">
                        En proceso
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Ayuda */}
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-brand-50/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Download className="h-8 w-8 shrink-0 text-brand-500" />
              <p className="text-sm text-ink/70">
                ¿Necesitas tus resultados en PDF o tienes una consulta médica?
              </p>
            </div>
            <a
              href={whatsappLink('Hola, consulto sobre mis resultados de laboratorio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contactar
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
