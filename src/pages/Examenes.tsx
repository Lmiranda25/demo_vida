import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import ServiceCatalog from '@/components/sections/ServiceCatalog'
import ResultadosCTA from '@/components/sections/ResultadosCTA'
import { EXAMS } from '@/data/services'
import { stock } from '@/lib/img'

export default function Examenes() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Exámenes"
        eyebrow="Análisis de laboratorio"
        title="Diagnóstico confiable y oportuno"
        subtitle="Análisis clínicos, hematología, microbiología, biología molecular y más. Con resultados en línea."
        bg={stock('lab.jpg')}
      />
      <section className="section-pad bg-paper">
        <div className="container-pro">
          <ServiceCatalog items={EXAMS} />
        </div>
      </section>
      <ResultadosCTA />
    </PageWrapper>
  )
}
