import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { CONTACT, FORMSPREE_ENDPOINT, whatsappLink } from '@/lib/constants'
import { slideRight, slideLeft, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Contacto() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (FORMSPREE_ENDPOINT.includes('your-form-id')) {
      const msg = `Hola, soy ${data.get('nombre')}. Servicio: ${data.get('servicio')}. Tel: ${data.get('telefono')}.`
      window.open(whatsappLink(msg), '_blank')
      setStatus('ok')
      form.reset()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      setStatus(res.ok ? 'ok' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section-pad bg-paper">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Contáctanos"
          title="Agenda tu cita hoy"
          subtitle="Déjanos tus datos y te contactamos, o escríbenos directamente por WhatsApp."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={slideRight}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-100 sm:p-8"
          >
            {status === 'ok' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-cyan-500" />
                <h3 className="mt-4 font-display text-xl font-bold text-brand-800">¡Mensaje enviado!</h3>
                <p className="mt-2 text-sm text-ink/65">Gracias por escribirnos. Te contactaremos muy pronto.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">Nombre completo</label>
                  <input
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">Teléfono</label>
                  <input
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+51 ..."
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">¿Qué servicio necesitas?</label>
                  <input
                    name="servicio"
                    required
                    placeholder="Ej. Laboratorio, Odontología..."
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-500">Hubo un problema. Escríbenos por WhatsApp.</p>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn-brand w-full">
                  <Send className="h-4 w-4" />
                  {status === 'sending' ? 'Enviando...' : 'Enviar y agendar'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-brand-gradient p-6 text-white shadow-soft sm:p-8">
              <h3 className="font-display text-xl font-bold">Información de contacto</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-brand-50/90">{CONTACT.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-brand-50/90">{CONTACT.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="break-all text-brand-50/90">{CONTACT.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-brand-50/90">{CONTACT.hours}</span>
                </li>
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chatear por WhatsApp
              </a>
            </div>

            {/* Mapa embebido (PLACEHOLDER: el cliente actualiza con su dirección real) */}
            <div className="flex-1 overflow-hidden rounded-3xl shadow-card ring-1 ring-brand-100">
              <iframe
                title="Ubicación Vida laboratorios"
                src="https://www.google.com/maps?q=Lima%20Per%C3%BA&output=embed"
                className="h-full min-h-[220px] w-full sm:min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
