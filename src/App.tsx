import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import Especialidades from './pages/Especialidades'
import Examenes from './pages/Examenes'
import ServicioDetalle from './pages/ServicioDetalle'
import Resultados from './pages/Resultados'
import Portal from './pages/Portal'
import PortalResultado from './pages/PortalResultado'
import Nosotros from './pages/Nosotros'
import ContactoPage from './pages/ContactoPage'

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/examenes" element={<Examenes />} />
            <Route path="/servicio/:slug" element={<ServicioDetalle />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/portal/resultado/:id" element={<PortalResultado />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
