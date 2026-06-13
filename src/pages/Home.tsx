import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCatalog from '@/components/sections/ServiceCatalog'
import ComoFunciona from '@/components/sections/ComoFunciona'
import ResultadosCTA from '@/components/sections/ResultadosCTA'
import Testimonios from '@/components/sections/Testimonios'
import { SPECIALTIES, EXAMS } from '@/data/services'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />

      {/* Especialidades destacadas (preview) */}
      <section className="section-pad bg-paper">
        <div className="container-pro">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Servicios médicos y de laboratorio"
            subtitle="Consulta médica, exámenes ocupacionales, chequeos y toma de muestra a domicilio."
          />
          <div className="mt-12">
            <ServiceCatalog items={SPECIALTIES.slice(0, 3)} />
          </div>
          <div className="mt-10 text-center">
            <Link to="/especialidades" className="btn-outline">
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ComoFunciona />

      {/* Exámenes destacados (preview) */}
      <section className="section-pad bg-paper">
        <div className="container-pro">
          <SectionTitle
            eyebrow="Análisis de laboratorio"
            title="Diagnóstico con tecnología de punta"
            subtitle="Análisis clínicos, hematología, microbiología, biología molecular y más, con resultados en línea."
          />
          <div className="mt-12">
            <ServiceCatalog items={EXAMS.slice(0, 3)} />
          </div>
          <div className="mt-10 text-center">
            <Link to="/examenes" className="btn-outline">
              Ver todos los exámenes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ResultadosCTA />
      <Testimonios />

      {/* Accesos a otras vistas */}
      <section className="section-pad bg-brand-50/40">
        <div className="container-pro grid gap-5 sm:grid-cols-3">
          {[
            { to: '/resultados', title: 'Resultados en línea', desc: 'Consulta tus análisis desde el portal.' },
            { to: '/nosotros', title: 'Conócenos', desc: 'Quiénes somos y por qué confiar en Vida.' },
            { to: '/contacto', title: 'Visítanos', desc: 'Atención todos los días en nuestra sede.' },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-100/60 transition hover:-translate-y-1.5"
            >
              <h3 className="font-display text-lg font-bold text-brand-800">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/65">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 transition group-hover:gap-3">
                Ver más <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
