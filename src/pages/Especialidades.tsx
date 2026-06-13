import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import ServiceCatalog from '@/components/sections/ServiceCatalog'
import ComoFunciona from '@/components/sections/ComoFunciona'
import { SPECIALTIES } from '@/data/services'
import { stock } from '@/lib/img'

export default function Especialidades() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Servicios"
        eyebrow="Nuestros servicios"
        title="Servicios médicos y de laboratorio"
        subtitle="Consulta médica, exámenes ocupacionales, chequeos y toma de muestra a domicilio."
        bg={stock('consulta.jpg')}
      />
      <section className="section-pad bg-paper">
        <div className="container-pro">
          <ServiceCatalog items={SPECIALTIES} />
        </div>
      </section>
      <ComoFunciona />
    </PageWrapper>
  )
}
