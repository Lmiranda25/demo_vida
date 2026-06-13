import { motion } from 'framer-motion'
import { fadeUp, inView } from '@/lib/motion'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial={inView.initial}
      whileInView={inView.whileInView}
      viewport={inView.viewport}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-brand-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-brand-50/85' : 'text-ink/65'}`}>
          {subtitle}
        </p>
      )}
      {align === 'center' && <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-gradient" />}
    </motion.div>
  )
}
