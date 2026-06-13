import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShieldPlus, Clock, FileText } from 'lucide-react'
import { whatsappLink, CONTACT } from '@/lib/constants'
import { stock } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">
      {/* Blobs decorativos */}
      <div className="absolute -left-20 top-24 -z-10 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -right-10 bottom-10 -z-10 h-52 w-52 rounded-full bg-brand-400/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="container-pro grid items-center gap-10 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur"
          >
            <ShieldPlus className="h-4 w-4" />
            Laboratorios y policlínicos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Cuidamos tu{' '}
            <span className="bg-cyan-gradient bg-clip-text text-transparent">vida</span> con
            resultados confiables
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-brand-50/90 sm:text-lg"
          >
            Laboratorio clínico y policlínico con análisis de alta precisión y tecnología de última
            generación. Toma tu muestra y consulta tus resultados en línea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-cyan">
              <WhatsAppIcon className="h-5 w-5" />
              Agenda tu cita
            </a>
            <Link
              to="/resultados"
              className="btn border-2 border-white/40 text-white hover:bg-white hover:text-brand-700"
            >
              <FileText className="h-4 w-4" />
              Resultados en línea
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-50/80"
          >
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" /> {CONTACT.hours}
            </span>
            <span className="flex items-center gap-2">
              <ShieldPlus className="h-4 w-4 text-cyan-400" /> Toma a domicilio
            </span>
          </motion.div>
        </div>

        {/* Imagen 3D del laboratorio con parallax + flotación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ y: imgY }}
          className="hidden lg:block"
        >
          <div className="relative ml-auto w-fit">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cyan-500/20 blur-2xl" />
            <div className="animate-float overflow-hidden rounded-[2rem] shadow-3d ring-1 ring-white/20">
              <img
                src={stock('lab.jpg')}
                alt="Laboratorio clínico moderno"
                className="h-[460px] w-full max-w-[480px] object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 -left-6 rounded-2xl bg-white px-5 py-3 shadow-card"
            >
              <p className="font-display text-2xl font-bold text-brand-600">+200</p>
              <p className="text-xs text-ink/60">análisis disponibles</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-5 top-10 rounded-2xl bg-cyan-gradient px-4 py-3 text-white shadow-glow"
            >
              <p className="text-sm font-bold">Resultados</p>
              <p className="text-xs opacity-90">en línea</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  )
}
