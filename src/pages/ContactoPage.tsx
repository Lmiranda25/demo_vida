import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Contacto from '@/components/sections/Contacto'
import { stock } from '@/lib/img'

export default function ContactoPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Contacto"
        eyebrow="Contáctanos"
        title="Estamos para cuidar de ti"
        subtitle="Agenda tu análisis, escríbenos por WhatsApp o visítanos en nuestra sede."
        bg={stock('cta.jpg')}
      />
      <Contacto />
    </PageWrapper>
  )
}
