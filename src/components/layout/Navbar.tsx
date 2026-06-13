import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, whatsappLink, CONTACT } from '@/lib/constants'
import { reciclada } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'
  const solid = scrolled || !isHome || open

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-white/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-pro flex h-18 items-center justify-between">
        <Link to="/" className="flex items-center py-2" aria-label="Inicio">
          <span
            className={`inline-flex items-center rounded-lg transition-all duration-300 ${
              solid ? 'bg-transparent p-0' : 'bg-white px-3 py-2 shadow-sm'
            }`}
          >
            <img src={reciclada('logo.svg')} alt="Vida — Laboratorios y Policlínicos" className="h-9 w-auto sm:h-11" />
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-brand-600'
                        : 'text-ink/80 hover:text-brand-600'
                      : 'text-white/90 hover:text-cyan-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && solid && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-cyan-gradient"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className={`flex items-center gap-1.5 text-sm font-semibold ${solid ? 'text-brand-600' : 'text-white'}`}
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-cyan">
            <WhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`rounded-lg p-2 lg:hidden ${solid ? 'text-brand-700' : 'text-white'}`}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white shadow-card lg:hidden"
          >
            <ul className="container-pro flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? 'bg-brand-50 text-brand-600' : 'text-ink/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-cyan w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar cita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
